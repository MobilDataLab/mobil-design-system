// src/MobilMark.tsx
// Logotipo MOBIL — hexágono regular pointy-top con líneas radiales.
// Geometría: 6 radios idénticos (r=450), centrado en viewBox 840×960.
// Stroke calibrado contra PNG de referencia (~2.9% del ancho).
interface Props {
  size?: number;
  color?: string;
}

export function MobilMark({ size = 28, color = "#006BFF" }: Props) {
  return (
    <svg viewBox="0 0 840 960" width={size} height={size * (960 / 840)} aria-hidden="true">
      <g
        fill="none"
        stroke={color}
        strokeWidth={24}
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        {/* Perímetro (clockwise desde top) */}
        <line x1="420" y1="30" x2="809.71" y2="255" />
        <line x1="809.71" y1="255" x2="809.71" y2="705" />
        <line x1="809.71" y1="705" x2="420" y2="930" />
        <line x1="420" y1="930" x2="30.29" y2="705" />
        <line x1="30.29" y1="705" x2="30.29" y2="255" />
        <line x1="30.29" y1="255" x2="420" y2="30" />
        {/* Radios al centro */}
        <line x1="420" y1="480" x2="420" y2="30" />
        <line x1="420" y1="480" x2="809.71" y2="255" />
        <line x1="420" y1="480" x2="809.71" y2="705" />
        <line x1="420" y1="480" x2="420" y2="930" />
        <line x1="420" y1="480" x2="30.29" y2="705" />
        <line x1="420" y1="480" x2="30.29" y2="255" />
      </g>
    </svg>
  );
}
