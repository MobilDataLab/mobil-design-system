// App — Mobil Carga shell: login gate, sidebar rail, top bar, page routing,
// and the person drill-down drawer.
window.MobilCargaApp = function MobilCargaApp() {
  const NS = window.MobilArquitectosDesignSystem_8d3ff0;
  const { Button, Tag } = NS;
  const [page, setPage] = React.useState("login");
  const [drill, setDrill] = React.useState(null);

  if (page === "login") return <window.Login onEnter={() => setPage("dashboard")} />;

  const META = {
    dashboard: { title: "Dashboard · Directorio", crumb: "Vista de saturación · 12 personas · año fiscal 2026" },
    saturacion: { title: "Saturación", crumb: "Heatmap persona × mes" },
    personas: { title: "Personas", crumb: "Catálogo de equipo" },
    proyectos: { title: "Proyectos", crumb: "Portafolio activo" },
    organigrama: { title: "Organigrama", crumb: "Matriz seniority × taller" },
    parametros: { title: "Parámetros", crumb: "Pesos del modelo de carga" },
  };
  const meta = META[page] || { title: page, crumb: "" };

  const Placeholder = ({ name }) => (
    <div style={{ border: "1px solid var(--gray-200)", background: "var(--white)", padding: "48px 32px", textAlign: "center" }}>
      <div style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", fontWeight: 700, fontSize: 22, color: "var(--ink)" }}>{name}</div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--gray-700)", maxWidth: 460, margin: "10px auto 0", lineHeight: 1.5 }}>
        Vista presente en la app real de Mobil Carga, fuera del alcance de este UI kit de demostración. Usa <b>Dashboard</b> y <b>Saturación</b> para ver el sistema aplicado.
      </p>
    </div>
  );

  const Ico = window.Ico;

  return (
    <div style={{ display: "flex", height: "100%", overflow: "hidden", position: "relative" }}>
      <window.Sidebar page={page} setPage={(p) => { setPage(p); setDrill(null); }} />
      <main style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* top bar */}
        <header style={{ height: 60, flexShrink: 0, background: "var(--white)", borderBottom: "1px solid var(--gray-200)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
          <div>
            <div style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", fontWeight: 700, fontSize: 18, letterSpacing: "0.02em", color: "var(--ink)" }}>{meta.title}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--gray-400)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{meta.crumb}</div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Tag tone="tint">Año: 2026</Tag>
            <Button variant="secondary" size="sm">Exportar</Button>
            <Button variant="primary" size="sm">Subir Excel</Button>
          </div>
        </header>
        {/* body */}
        <div style={{ flex: 1, overflow: "auto", padding: 20, background: "var(--gray-50)" }}>
          {page === "dashboard" && <window.Dashboard onDrill={setDrill} />}
          {page === "saturacion" && <window.Heatmap onDrill={setDrill} />}
          {!["dashboard", "saturacion"].includes(page) && <Placeholder name={meta.title} />}
        </div>
      </main>
      <window.DrillDrawer ini={drill} onClose={() => setDrill(null)} />
    </div>
  );
};
