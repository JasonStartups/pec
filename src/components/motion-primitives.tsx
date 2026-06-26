import { useEffect, useRef, useState, type CSSProperties } from "react";

function ConnectorIcon() {
  const ref = useRef<SVGSVGElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      width="52"
      height="20"
      viewBox="0 0 52 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="inline-block shrink-0"
      style={{ color: "currentColor" }}
    >
      {/* Line — draws left → right when visible */}
      <rect
        y="11"
        width="50"
        height="1"
        fill="currentColor"
        style={{
          transformOrigin: "0px 11.5px",
          ...(animate
            ? { animation: "connectorLineGrow 0.8s cubic-bezier(0.22,1,0.36,1) both" }
            : { transform: "scaleX(0)" }),
        }}
      />
      {/* Diamond — pops in then spins forever */}
      <rect
        x="44.7782"
        y="4"
        width="10"
        height="10"
        fill="currentColor"
        style={{
          transformOrigin: "49.778px 9px",
          ...(animate
            ? { animation: "connectorDiamondIn 0.3s ease 0.65s both, connectorDiamondSpin 5s linear 0.95s infinite" }
            : { opacity: 0 }),
        }}
      />
    </svg>
  );
}

export function Counter({ end, suffix = "", duration = 1800 }: { end: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export function Eyebrow({
  children,
  align = "left",
  className = "",
  color = "var(--leaf)",
}: {
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  color?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] ${
        align === "center" ? "justify-center w-full" : ""
      } ${className}`}
      style={{ color }}
    >
      <ConnectorIcon />
      <span className="connector-label-reveal">{children}</span>
    </span>
  );
}

export function Parallax({
  children,
  className = "",
  speed = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (center - window.innerHeight / 2) * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

export function Tilt({
  children,
  className = "",
  max = 9,
  scale = 1.02,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg) scale(1)");

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * max * 2;
    const ry = (px - 0.5) * max * 2;
    setTransform(
      `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(${scale})`,
    );
  };

  const reset = () => setTransform("rotateX(0deg) rotateY(0deg) scale(1)");

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={reset} className={className} style={{ perspective: "1000px" }}>
      <div
        className="h-full"
        style={{
          transform,
          transformStyle: "preserve-3d",
          transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function PulseDot({
  style,
  size = 12,
  color = "var(--leaf-bright)",
}: {
  style?: CSSProperties;
  size?: number;
  color?: string;
}) {
  return (
    <span className="absolute -translate-x-1/2 -translate-y-1/2" style={style}>
      <span
        className="pulse-ring absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ width: size * 2.4, height: size * 2.4, background: color }}
      />
      <span
        className="dot-glow relative block rounded-full"
        style={{ width: size, height: size, background: color }}
      />
    </span>
  );
}

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      });
    }, { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
