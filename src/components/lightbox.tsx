import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

type Props = {
  images: string[];
  startIndex?: number;
  alt?: string;
  onClose: () => void;
};

export function Lightbox({ images, startIndex = 0, alt = "", onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ startX: number; startY: number; baseX: number; baseY: number } | null>(null);

  const reset = useCallback(() => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
    reset();
  }, [images.length, reset]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
    reset();
  }, [images.length, reset]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 0.5, 5));
      else if (e.key === "-") setZoom((z) => Math.max(z - 0.5, 1));
      else if (e.key === "0") reset();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [next, prev, onClose, reset]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.25 : -0.25;
    setZoom((z) => {
      const nz = Math.max(1, Math.min(5, z + delta));
      if (nz === 1) setOffset({ x: 0, y: 0 });
      return nz;
    });
  };

  const onDoubleClick = () => {
    if (zoom === 1) setZoom(2);
    else reset();
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (zoom <= 1) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = { startX: e.clientX, startY: e.clientY, baseX: offset.x, baseY: offset.y };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return;
    setOffset({
      x: dragRef.current.baseX + (e.clientX - dragRef.current.startX),
      y: dragRef.current.baseY + (e.clientY - dragRef.current.startY),
    });
  };
  const onPointerUp = () => {
    dragRef.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center animate-in fade-in duration-200"
      style={{ backgroundColor: "rgba(7, 12, 24, 0.96)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Top controls */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-between px-5 md:px-8 py-5 text-white/85">
        <div className="text-xs uppercase tracking-[0.3em] font-semibold">
          {index + 1} <span className="text-white/40">/ {images.length}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(1, z - 0.5))}
            aria-label="Zoom out"
            className="h-10 w-10 rounded-full inline-flex items-center justify-center bg-white/10 hover:bg-white/20 transition disabled:opacity-30"
            disabled={zoom <= 1}
          >
            <ZoomOut size={18} />
          </button>
          <span className="text-xs tabular-nums w-12 text-center">{Math.round(zoom * 100)}%</span>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(5, z + 0.5))}
            aria-label="Zoom in"
            className="h-10 w-10 rounded-full inline-flex items-center justify-center bg-white/10 hover:bg-white/20 transition disabled:opacity-30"
            disabled={zoom >= 5}
          >
            <ZoomIn size={18} />
          </button>
          <button
            type="button"
            onClick={reset}
            aria-label="Reset zoom"
            className="h-10 w-10 rounded-full inline-flex items-center justify-center bg-white/10 hover:bg-white/20 transition"
          >
            <RotateCcw size={16} />
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="ml-2 h-10 w-10 rounded-full inline-flex items-center justify-center bg-white/10 hover:bg-white/20 transition"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 h-12 w-12 md:h-14 md:w-14 rounded-full inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition z-10"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 h-12 w-12 md:h-14 md:w-14 rounded-full inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition z-10"
          >
            <ChevronRight size={26} />
          </button>
        </>
      )}

      {/* Image stage */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        onWheel={onWheel}
      >
        <img
          key={index}
          src={images[index]}
          alt={alt ? `${alt} — ${index + 1}` : `Image ${index + 1}`}
          draggable={false}
          onDoubleClick={onDoubleClick}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            cursor: zoom > 1 ? (dragRef.current ? "grabbing" : "grab") : "zoom-in",
            transition: dragRef.current ? "none" : "transform 0.2s ease-out",
          }}
          className="max-h-[85vh] max-w-[92vw] object-contain select-none animate-in fade-in duration-200"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="absolute bottom-5 inset-x-0 flex justify-center">
          <div className="flex gap-2 px-3 py-2 rounded-full bg-white/5 backdrop-blur-sm max-w-[92vw] overflow-x-auto">
            {images.map((src, i) => (
              <button
                key={src + i}
                type="button"
                onClick={() => {
                  setIndex(i);
                  reset();
                }}
                aria-label={`Go to image ${i + 1}`}
                className={`h-12 w-16 rounded-md overflow-hidden flex-shrink-0 transition ${i === index ? "ring-2" : "opacity-50 hover:opacity-100"}`}
                style={i === index ? { boxShadow: "0 0 0 2px var(--solar)" } : undefined}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
