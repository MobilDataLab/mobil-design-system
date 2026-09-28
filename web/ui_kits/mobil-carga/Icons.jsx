// Stroke icon set for the Mobil Carga kit — mirrors the app's hand-built
// 1.5px round-cap icons (Icons.tsx). Usage: <Ico name="grid" size={18} />
window.Ico = function Ico({ name, size = 18 }) {
  const s = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  const P = {
    grid: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
    chart: <><rect x="3" y="12" width="4" height="9"/><rect x="10" y="7" width="4" height="14"/><rect x="17" y="3" width="4" height="18"/><line x1="3" y1="21" x2="21" y2="21"/></>,
    layers: <><path d="M12 3 L21 8 L12 13 L3 8 Z"/><path d="M3 12 L12 17 L21 12"/><path d="M3 16 L12 21 L21 16"/></>,
    users: <><circle cx="9" cy="8" r="3"/><path d="M3 20 c0-3 2-6 6-6 s6 3 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M14 20 c0-2 2-4 4.5-4 s2.5 1 2.5 4"/></>,
    folder: <path d="M3 6 h6 l2 2 h10 v11 H3z"/>,
    upload: <><path d="M12 16 V4"/><path d="M7 9 L12 4 L17 9"/><path d="M4 16 V20 H20 V16"/></>,
    download: <><path d="M12 4 V16"/><path d="M7 11 L12 16 L17 11"/><path d="M4 16 V20 H20 V16"/></>,
    gear: <><circle cx="12" cy="12" r="3"/><path d="M12 3 v2 M12 19 v2 M3 12 h2 M19 12 h2 M5.6 5.6 l1.4 1.4 M17 17 l1.4 1.4 M5.6 18.4 l1.4-1.4 M17 7 l1.4-1.4"/></>,
    filter: <polygon points="3 4 21 4 14 13 14 20 10 20 10 13"/>,
    sitemap: <><rect x="9" y="2" width="6" height="4"/><line x1="12" y1="6" x2="12" y2="10"/><line x1="4" y1="10" x2="20" y2="10"/><rect x="2" y="10" width="6" height="4"/><rect x="9" y="10" width="6" height="4"/><rect x="16" y="10" width="6" height="4"/></>,
    logout: <><path d="M15 4 H6 a2 2 0 0 0-2 2 v12 a2 2 0 0 0 2 2 h9"/><path d="M17 8 l4 4 l-4 4"/><line x1="21" y1="12" x2="9" y2="12"/></>,
    x: <><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></>,
    alert: <><path d="M12 3 L22 20 H2 z"/><line x1="12" y1="10" x2="12" y2="14"/><circle cx="12" cy="17" r="0.6" fill="currentColor"/></>,
    search: <><circle cx="11" cy="11" r="7"/><line x1="16" y1="16" x2="21" y2="21"/></>,
  };
  return <svg {...s}>{P[name] || null}</svg>;
};
