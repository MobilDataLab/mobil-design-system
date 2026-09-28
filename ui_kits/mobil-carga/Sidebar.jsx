// Sidebar — narrow icon rail. v3 brand: blue-deep rail, hexagon mark, blue
// active accent. Mirrors Mobil Carga's 60px navigation rail.
window.Sidebar = function Sidebar({ page, setPage }) {
  const Ico = window.Ico;
  const nav = [
    { id: "dashboard", icon: "grid", tip: "Dashboard" },
    { id: "saturacion", icon: "chart", tip: "Saturación" },
    { id: "personas", icon: "users", tip: "Personas" },
    { id: "proyectos", icon: "folder", tip: "Proyectos" },
    { id: "organigrama", icon: "sitemap", tip: "Organigrama" },
    { id: "parametros", icon: "gear", tip: "Parámetros" },
  ];

  const Mark = () => (
    <svg viewBox="0 0 840 960" width="30" height="34">
      <g fill="none" stroke="#FFFFFF" strokeWidth="24" strokeLinecap="square">
        <line x1="420" y1="30" x2="809.71" y2="255"/><line x1="809.71" y1="255" x2="809.71" y2="705"/>
        <line x1="809.71" y1="705" x2="420" y2="930"/><line x1="420" y1="930" x2="30.29" y2="705"/>
        <line x1="30.29" y1="705" x2="30.29" y2="255"/><line x1="30.29" y1="255" x2="420" y2="30"/>
        <line x1="420" y1="480" x2="420" y2="30"/><line x1="420" y1="480" x2="809.71" y2="255"/>
        <line x1="420" y1="480" x2="809.71" y2="705"/><line x1="420" y1="480" x2="420" y2="930"/>
        <line x1="420" y1="480" x2="30.29" y2="705"/><line x1="420" y1="480" x2="30.29" y2="255"/>
      </g>
    </svg>
  );

  const Item = ({ id, icon, tip, onClick, active }) => {
    const [h, setH] = React.useState(false);
    return (
      <button
        title={tip}
        onClick={onClick}
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{
          position: "relative", width: 44, height: 44, display: "grid", placeItems: "center",
          border: "none", background: active ? "rgba(0,107,255,0.18)" : "transparent",
          color: active ? "#fff" : (h ? "#fff" : "rgba(255,255,255,0.55)"),
          cursor: "pointer", borderRadius: 0, transition: "color .12s, background .12s",
        }}
      >
        {active && <span style={{ position: "absolute", left: 0, top: 8, bottom: 8, width: 3, background: "var(--blue)" }} />}
        <Ico name={icon} size={20} />
      </button>
    );
  };

  return (
    <aside style={{ width: 60, background: "var(--blue-deep)", display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", flexShrink: 0, gap: 4 }}>
      <div style={{ marginBottom: 18 }}><Mark /></div>
      <nav style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
        {nav.map((n) => <Item key={n.id} {...n} active={page === n.id} onClick={() => setPage(n.id)} />)}
      </nav>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, marginTop: "auto" }}>
        <div style={{ width: 28, height: 28, background: "rgba(255,255,255,0.12)", display: "grid", placeItems: "center", color: "#fff", font: "700 10px var(--font-body)", letterSpacing: "0.5px" }}>PB</div>
        <Item id="logout" icon="logout" tip="Salir" onClick={() => setPage("login")} active={false} />
        <div style={{ font: "10px var(--font-body)", color: "rgba(255,255,255,0.3)", letterSpacing: 1 }}>v3</div>
      </div>
    </aside>
  );
};
