// Login — v3 brand recreation of Mobil Carga's auth screen (flat, blue, condensed).
window.Login = function Login({ onEnter }) {
  const NS = window.MobilArquitectosDesignSystem_8d3ff0;
  const { Button, Input } = NS;
  const [mode, setMode] = React.useState("signin");

  const Mark = () => (
    <svg viewBox="0 0 840 960" width="40" height="46">
      <g fill="none" stroke="#006BFF" strokeWidth="24" strokeLinecap="square">
        <line x1="420" y1="30" x2="809.71" y2="255"/><line x1="809.71" y1="255" x2="809.71" y2="705"/>
        <line x1="809.71" y1="705" x2="420" y2="930"/><line x1="420" y1="930" x2="30.29" y2="705"/>
        <line x1="30.29" y1="705" x2="30.29" y2="255"/><line x1="30.29" y1="255" x2="420" y2="30"/>
        <line x1="420" y1="480" x2="420" y2="30"/><line x1="420" y1="480" x2="809.71" y2="255"/>
        <line x1="420" y1="480" x2="809.71" y2="705"/><line x1="420" y1="480" x2="420" y2="930"/>
        <line x1="420" y1="480" x2="30.29" y2="705"/><line x1="420" y1="480" x2="30.29" y2="255"/>
      </g>
    </svg>
  );

  const tab = (id, label) => (
    <button onClick={() => setMode(id)} style={{
      flex: 1, padding: "9px 0", border: "none", borderBottom: "2px solid " + (mode === id ? "var(--blue)" : "var(--gray-200)"),
      background: "transparent", cursor: "pointer", fontFamily: "var(--font-heading)", textTransform: "uppercase",
      letterSpacing: "0.04em", fontWeight: mode === id ? 700 : 400, fontSize: 13, color: mode === id ? "var(--ink)" : "var(--gray-700)",
    }}>{label}</button>
  );

  return (
    <div style={{ minHeight: "100%", display: "grid", placeItems: "center", background: "var(--blue-deep)", padding: 24 }}>
      <div style={{ width: 380, maxWidth: "100%", background: "var(--white)", padding: 36, position: "relative" }}>
        <span style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "var(--blue)" }} />
        <Mark />
        <div style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", fontWeight: 900, fontSize: 34, letterSpacing: "0.02em", lineHeight: 1, marginTop: 16, color: "var(--ink)" }}>Mobil · Carga</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--gray-700)", marginTop: 6, marginBottom: 22 }}>Sistema de saturación de talleres</div>
        <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>{tab("signin", "Iniciar sesión")}{tab("signup", "Registrarse")}</div>
        <form onSubmit={(e) => { e.preventDefault(); onEnter(); }} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Input label="Correo" type="email" placeholder="tu@mobil.cl" defaultValue="paula.bravo@mobil.cl" required />
          <Input label="Contraseña" type="password" placeholder="••••••••" defaultValue="mobil2026" required />
          <Button variant="primary" type="submit" block>{mode === "signin" ? "Entrar" : "Crear cuenta"}</Button>
        </form>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--gray-400)", marginTop: 18, lineHeight: 1.5 }}>
          El primer registro queda como <b style={{ color: "var(--gray-700)" }}>Desarrollador</b>. Los siguientes ingresan como Colaborador y requieren aprobación.
        </div>
      </div>
    </div>
  );
};
