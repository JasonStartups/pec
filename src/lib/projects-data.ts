import solarHomeImg from "@/assets/solar-home.jpg";
import heroImg from "@/assets/hero-solar.jpg";
import smartHomeImg from "@/assets/smart-home.jpg";
import cctvImg from "@/assets/cctv.jpg";
import batteryImg from "@/assets/battery.jpg";
import inverterImg from "@/assets/inverter.jpg";

export type Project = {
  slug: string;
  title: string;
  tag: string;
  category: string;
  location: string;
  year: string;
  scale: string;
  cover: string;
  gallery: string[];
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  highlights: { label: string; value: string }[];
  services: string[];
};

export const projects: Project[] = [
  {
    slug: "lekki-estate-hybrid-solar",
    title: "Lekki Estate Hybrid Solar",
    tag: "Residential · Solar",
    category: "Residential",
    location: "Lekki, Lagos",
    year: "2024",
    scale: "45 kW · 120 kWh",
    cover: solarHomeImg,
    gallery: [solarHomeImg, batteryImg, inverterImg, smartHomeImg],
    summary:
      "A premium residential estate transitioned from diesel dependency to a clean, silent hybrid solar and storage system with 24/7 reliability.",
    challenge:
      "The estate operated on three high-noise diesel generators with monthly fuel costs exceeding ₦4.2M. Outages and maintenance disrupted residents and degraded the estate's premium positioning.",
    solution:
      "PEC engineered a 45 kW rooftop PV array paired with a 120 kWh lithium battery bank, intelligent hybrid inverters, and a centralized monitoring dashboard for the estate manager.",
    outcome:
      "Diesel runtime reduced by 92%, monthly energy spend cut by 71%, and residents now experience seamless, silent power around the clock.",
    highlights: [
      { label: "Capacity", value: "45 kW PV" },
      { label: "Storage", value: "120 kWh" },
      { label: "Fuel saved", value: "92%" },
      { label: "Payback", value: "3.4 yrs" },
    ],
    services: ["Solar Design & Install", "Battery Storage", "Monitoring"],
  },
  {
    slug: "ikeja-factory-pv-plant",
    title: "Ikeja Factory PV Plant",
    tag: "Industrial · Solar",
    category: "Industrial",
    location: "Ikeja, Lagos",
    year: "2024",
    scale: "1.2 MW · Grid-Tied",
    cover: heroImg,
    gallery: [heroImg, inverterImg, batteryImg, solarHomeImg],
    summary:
      "A grid-tied 1.2 MW rooftop plant supplying daytime production loads at a high-volume manufacturing facility.",
    challenge:
      "Rising tariffs and load-shedding were eroding margins on a 24-hour production line. The client needed predictable energy costs without sacrificing capacity.",
    solution:
      "Engineered a 1.2 MW grid-tied solar plant with smart string inverters and SCADA-grade monitoring, integrated cleanly with the existing utility supply.",
    outcome:
      "Daytime energy cost reduced by 58%, with a projected ₦920M in savings over the system's 25-year design life.",
    highlights: [
      { label: "Capacity", value: "1.2 MW" },
      { label: "Annual yield", value: "1.78 GWh" },
      { label: "Tariff cut", value: "58%" },
      { label: "CO₂ avoided", value: "1,400 t/yr" },
    ],
    services: ["Industrial Solar", "Grid-Tied Design", "SCADA Monitoring"],
  },
  {
    slug: "abuja-office-smart-building",
    title: "Abuja Office Smart Building",
    tag: "Commercial · Automation",
    category: "Commercial",
    location: "Central Business District, Abuja",
    year: "2025",
    scale: "8,000 m²",
    cover: smartHomeImg,
    gallery: [smartHomeImg, cctvImg, inverterImg, heroImg],
    summary:
      "Full-stack building automation across an 8,000 m² corporate headquarters — lighting, HVAC, access and energy on a single pane.",
    challenge:
      "Disconnected building systems caused energy waste, manual access control overhead, and zero visibility into space utilization.",
    solution:
      "PEC unified lighting, HVAC, access control and metering into a KNX/IP automation backbone with occupancy-based scheduling and executive dashboards.",
    outcome:
      "HVAC consumption dropped 34%, after-hours energy fell 61%, and facilities staff regained 18 hours/week previously lost to manual operations.",
    highlights: [
      { label: "Footprint", value: "8,000 m²" },
      { label: "HVAC saving", value: "34%" },
      { label: "Zones", value: "112" },
      { label: "ROI", value: "2.1 yrs" },
    ],
    services: ["Building Automation", "Access Control", "Energy Metering"],
  },
  {
    slug: "lagos-mall-surveillance-grid",
    title: "Lagos Mall Surveillance Grid",
    tag: "Commercial · Security",
    category: "Commercial",
    location: "Victoria Island, Lagos",
    year: "2024",
    scale: "240 cameras",
    cover: cctvImg,
    gallery: [cctvImg, smartHomeImg, inverterImg, heroImg],
    summary:
      "A 240-camera AI-assisted surveillance grid covering a flagship retail destination with 12 anchor tenants.",
    challenge:
      "The legacy CCTV system had blind spots, low-resolution feeds and no central analytics, making incident response slow and unreliable.",
    solution:
      "Deployed 240 IP cameras with AI video analytics, redundant NVR storage, fiber backbone, and a 24/7 control room with tenant-level access tiers.",
    outcome:
      "Incident response time cut from 9 minutes to under 90 seconds, with full 90-day retention and zero blind zones across the property.",
    highlights: [
      { label: "Cameras", value: "240" },
      { label: "Retention", value: "90 days" },
      { label: "Response", value: "<90 s" },
      { label: "Uptime", value: "99.98%" },
    ],
    services: ["CCTV Design", "AI Analytics", "Control Room"],
  },
  {
    slug: "port-harcourt-bess-site",
    title: "Port Harcourt BESS Site",
    tag: "Industrial · Storage",
    category: "Industrial",
    location: "Port Harcourt, Rivers",
    year: "2025",
    scale: "2.5 MWh",
    cover: batteryImg,
    gallery: [batteryImg, inverterImg, heroImg, solarHomeImg],
    summary:
      "A 2.5 MWh battery energy storage system providing peak shaving and backup for a critical industrial site.",
    challenge:
      "Peak-hour tariff spikes and grid instability were forcing the client to run diesel for 6+ hours daily, with high fuel and emissions cost.",
    solution:
      "Containerized 2.5 MWh lithium BESS with bidirectional inverters, intelligent EMS for peak shaving, and seamless grid/diesel/storage transfer.",
    outcome:
      "Diesel runtime cut by 84% and peak-demand charges reduced by 47%, with sub-20 ms transfer keeping production lines uninterrupted.",
    highlights: [
      { label: "Storage", value: "2.5 MWh" },
      { label: "Diesel cut", value: "84%" },
      { label: "Transfer", value: "<20 ms" },
      { label: "Cycles", value: "6,000+" },
    ],
    services: ["BESS Design", "EMS Integration", "Peak Shaving"],
  },
  {
    slug: "kano-inverter-room-upgrade",
    title: "Kano Inverter Room Upgrade",
    tag: "Industrial · Power",
    category: "Industrial",
    location: "Kano",
    year: "2024",
    scale: "500 kVA",
    cover: inverterImg,
    gallery: [inverterImg, batteryImg, heroImg, smartHomeImg],
    summary:
      "A complete inverter room redesign delivering 500 kVA of clean, redundant power for a regional logistics hub.",
    challenge:
      "Aging inverters, hot-spot wiring and no redundancy were causing weekly outages and growing fire risk inside the existing power room.",
    solution:
      "Rebuilt the room around modular 500 kVA inverters in N+1 configuration, cooled cable management, smart breakers and remote diagnostics.",
    outcome:
      "Outages eliminated over the first 12 months, thermal hotspots resolved, and the facility now meets Tier-III power continuity standards.",
    highlights: [
      { label: "Capacity", value: "500 kVA" },
      { label: "Redundancy", value: "N+1" },
      { label: "Outages", value: "0 / yr" },
      { label: "Tier", value: "III" },
    ],
    services: ["Power Engineering", "Inverter Systems", "Diagnostics"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
