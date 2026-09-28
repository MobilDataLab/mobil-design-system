// Mobil Carga — fake dataset for the UI-kit recreation.
// Faithful to the real domain (talleres TV/TC/TI/TS/TU, seniority codes,
// saturación = ocupación × carga). Numbers are illustrative.

window.MC_DATA = (function () {
  const MESES = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

  const TALLERES = {
    TV: { code: "TV", name: "Vivienda" },
    TC: { code: "TC", name: "Comercial" },
    TI: { code: "TI", name: "Infraestructura" },
    TS: { code: "TS", name: "Salud / Hospitales" },
    TU: { code: "TU", name: "Urbano" },
  };

  // seniority: S socio · AA asociado · JP jefe proyecto · A arquitecto · P practicante
  const PERSONAS = [
    { ini: "PB", nombre: "Paula Bravo",      sen: "S",  taller: "TS", rol: "Socia" },
    { ini: "SM", nombre: "Sergio Marín",     sen: "S",  taller: "TI", rol: "Socio" },
    { ini: "JM", nombre: "Javiera Morales",  sen: "S",  taller: "TC", rol: "Socia" },
    { ini: "LP", nombre: "Luis Pérez",       sen: "AA", taller: "TV", rol: "Asociado" },
    { ini: "CR", nombre: "Carla Reyes",      sen: "AA", taller: "TS", rol: "Asociada" },
    { ini: "DF", nombre: "Diego Fuentes",    sen: "JP", taller: "TI", rol: "Jefe de Proyecto" },
    { ini: "MA", nombre: "Marcela Aguirre",  sen: "JP", taller: "TC", rol: "Jefa de Proyecto" },
    { ini: "RT", nombre: "Rodrigo Tapia",    sen: "A",  taller: "TV", rol: "Arquitecto" },
    { ini: "VS", nombre: "Valentina Soto",   sen: "A",  taller: "TS", rol: "Arquitecta" },
    { ini: "NC", nombre: "Nicolás Castro",   sen: "A",  taller: "TI", rol: "Arquitecto" },
    { ini: "FG", nombre: "Fernanda Gálvez",  sen: "A",  taller: "TU", rol: "Arquitecta" },
    { ini: "IM", nombre: "Ignacio Muñoz",    sen: "P",  taller: "TC", rol: "Practicante" },
  ];

  // Deterministic pseudo-random saturation matrix (persona × 12 meses), 0–1.4.
  function seeded(i) { const x = Math.sin(i * 99.7) * 43758.5453; return x - Math.floor(x); }
  const MATRIX = {};
  PERSONAS.forEach((p, pi) => {
    const base = 0.55 + seeded(pi + 1) * 0.55; // 0.55–1.10 baseline
    MATRIX[p.ini] = MESES.map((_, mi) => {
      const wave = Math.sin((mi / 11) * Math.PI * 1.3 + pi) * 0.22;
      const noise = (seeded(pi * 13 + mi + 7) - 0.5) * 0.18;
      return Math.max(0.05, Math.min(1.38, +(base + wave + noise).toFixed(2)));
    });
  });

  const annual = (ini) => {
    const r = MATRIX[ini];
    return +(r.reduce((a, b) => a + b, 0) / r.length).toFixed(2);
  };

  // Semáforo ramp — v3 blue lineage for 0→100%, error red for overload.
  // Returns { bg, dark } where dark=true means use white text.
  function sem(v) {
    if (v < 0.40) return { bg: "#E7F3FD", dark: false };
    if (v < 0.60) return { bg: "#B9DBFF", dark: false };
    if (v < 0.75) return { bg: "#6FB0FF", dark: false };
    if (v < 0.90) return { bg: "#2C8BFF", dark: true };
    if (v < 1.00) return { bg: "#006BFF", dark: true };
    if (v <= 1.15) return { bg: "#C8412C", dark: true };
    return { bg: "#8A2E1E", dark: true };
  }

  const SEM_LEGEND = [
    { label: "< 40%", bg: "#E7F3FD", dark: false },
    { label: "40–60", bg: "#B9DBFF", dark: false },
    { label: "60–75", bg: "#6FB0FF", dark: false },
    { label: "75–90", bg: "#2C8BFF", dark: true },
    { label: "90–100", bg: "#006BFF", dark: true },
    { label: "100–115", bg: "#C8412C", dark: true },
    { label: "> 115%", bg: "#8A2E1E", dark: true },
  ];

  // KPIs for the dashboard header.
  const ranked = [...PERSONAS].map((p) => ({ ...p, sat: annual(p.ini) })).sort((a, b) => b.sat - a.sat);
  const avgSat = +(ranked.reduce((a, p) => a + p.sat, 0) / ranked.length).toFixed(2);
  const overloaded = ranked.filter((p) => p.sat > 1.0).length;

  return { MESES, TALLERES, PERSONAS, MATRIX, sem, SEM_LEGEND, annual, ranked, avgSat, overloaded };
})();
