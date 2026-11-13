"use client";
import React from "react";
import { Box } from "@mui/material";

export const LEGAL_SYMBOLS = {
  section: "§",
  pilcrow: "¶",
  dagger: "†",
  doubleDagger: "‡",
  reference: "※",
  colonPair: "∷",
  target: "⌖",
  cornerTopLeft: "⌜",
  cornerTopRight: "⌝",
  cornerBottomLeft: "⌞",
  cornerBottomRight: "⌟",
  blackSquare: "■",
};

export const MATH_SYMBOLS = {
  sigma: "Σ",
  integral: "∫",
  partial: "∂",
  forAll: "∀",
  exists: "∃",
  inElement: "∈",
  implies: "⟹",
  angleBracketLeft: "⟨",
  angleBracketRight: "⟩",
  almostEqual: "≈",
  qed: "Q.E.D.",
};

export function EditorialSealSvg({
  strokeColor,
  textColor,
  symbol = "§",
  textTop = "CODEX · SIGMA",
  textBottom = "1404-1405 · ATTEST",
  sx,
}) {
  return (
    <Box
      component="svg"
      viewBox="0 0 140 140"
      sx={{
        width: "100%",
        height: "100%",
        opacity: 0.85,
        ...sx,
      }}
    >
      <circle cx="70" cy="70" r="64" fill="none" stroke={strokeColor} strokeWidth="1.2" />
      <circle cx="70" cy="70" r="58" fill="none" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="3 3" />
      <circle cx="70" cy="70" r="42" fill="none" stroke={strokeColor} strokeWidth="1" />

      <text
        x="70"
        y="80"
        textAnchor="middle"
        fill={textColor}
        fontSize="34"
        fontFamily="'Times New Roman', Times, Georgia, serif"
        fontWeight="bold"
      >
        {symbol}
      </text>

      <line x1="6" y1="70" x2="16" y2="70" stroke={strokeColor} strokeWidth="1.2" />
      <line x1="124" y1="70" x2="134" y2="70" stroke={strokeColor} strokeWidth="1.2" />
      <line x1="70" y1="6" x2="70" y2="16" stroke={strokeColor} strokeWidth="1.2" />
      <line x1="70" y1="124" x2="70" y2="134" stroke={strokeColor} strokeWidth="1.2" />

      <text
        x="70"
        y="32"
        textAnchor="middle"
        fill={textColor}
        fontSize="6.5"
        fontFamily="monospace"
        letterSpacing="0.1em"
      >
        {textTop}
      </text>
      <text
        x="70"
        y="116"
        textAnchor="middle"
        fill={textColor}
        fontSize="6"
        fontFamily="monospace"
        letterSpacing="0.1em"
      >
        {textBottom}
      </text>
    </Box>
  );
}

export function ColumnGuideSvg({
  strokeColor,
  textColor,
  refText = "¶ REGISTRY // 04.COL",
  indexText = "§ ART.INDEX ∷ 1404",
  noteText = "Ref: Formal Documentation",
  regText = "[⌖ REGISTRATION: 0.12mm]",
  sx,
}) {
  return (
    <Box
      component="svg"
      viewBox="0 0 150 120"
      sx={{
        width: "100%",
        height: "100%",
        opacity: 0.8,
        ...sx,
      }}
    >
      <line x1="15" y1="10" x2="15" y2="110" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 3" />
      <line x1="135" y1="10" x2="135" y2="110" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 3" />
      <rect x="25" y="20" width="100" height="75" fill="none" stroke={strokeColor} strokeWidth="1" />
      <line x1="25" y1="36" x2="125" y2="36" stroke={strokeColor} strokeWidth="0.8" />
      <text x="32" y="31" fill={textColor} fontSize="7" fontFamily="monospace" letterSpacing="0.08em">
        {refText}
      </text>
      <text x="32" y="52" fill={textColor} fontSize="7.5" fontFamily="monospace">
        {indexText}
      </text>
      <text x="32" y="66" fill={textColor} fontSize="7" fontFamily="monospace" opacity="0.8">
        {noteText}
      </text>
      <text x="32" y="80" fill={textColor} fontSize="6.5" fontFamily="monospace" opacity="0.7">
        {regText}
      </text>
    </Box>
  );
}

export function RegistrationMarkSvg({ strokeColor, textColor, label = "REG-0.12", sx }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 80 80"
      sx={{
        width: "100%",
        height: "100%",
        opacity: 0.75,
        ...sx,
      }}
    >
      <circle cx="40" cy="40" r="28" fill="none" stroke={strokeColor} strokeWidth="0.8" />
      <circle cx="40" cy="40" r="14" fill="none" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="6" y1="40" x2="74" y2="40" stroke={strokeColor} strokeWidth="0.8" />
      <line x1="40" y1="6" x2="40" y2="74" stroke={strokeColor} strokeWidth="0.8" />
      <text x="44" y="24" fill={textColor} fontSize="6" fontFamily="monospace">
        {label}
      </text>
    </Box>
  );
}

export function DocumentStampSvg({
  strokeColor,
  textColor,
  textTop = "ARCHIVAL RECORD",
  textCenter = "VALIDATED · 1404",
  textBottom = "SIGMA CODEX",
  sx,
}) {
  return (
    <Box
      component="svg"
      viewBox="0 0 160 70"
      sx={{
        width: "100%",
        height: "100%",
        opacity: 0.75,
        ...sx,
      }}
    >
      <rect x="5" y="5" width="150" height="60" rx="6" fill="none" stroke={strokeColor} strokeWidth="1.2" />
      <rect x="9" y="9" width="142" height="52" rx="4" fill="none" stroke={strokeColor} strokeWidth="0.6" strokeDasharray="3 2" />
      <text x="80" y="24" textAnchor="middle" fill={textColor} fontSize="6.5" fontFamily="monospace" letterSpacing="0.1em">
        {textTop}
      </text>
      <text x="80" y="41" textAnchor="middle" fill={textColor} fontSize="9" fontFamily="monospace" fontWeight="bold">
        {textCenter}
      </text>
      <text x="80" y="54" textAnchor="middle" fill={textColor} fontSize="6.5" fontFamily="monospace" letterSpacing="0.08em">
        {textBottom}
      </text>
    </Box>
  );
}

export function MathDiagramFragmentSvg({ strokeColor, textColor, sx }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 140 100"
      sx={{
        width: "100%",
        height: "100%",
        opacity: 0.7,
        ...sx,
      }}
    >
      <line x1="20" y1="10" x2="20" y2="90" stroke={strokeColor} strokeWidth="0.8" />
      <line x1="15" y1="85" x2="130" y2="85" stroke={strokeColor} strokeWidth="0.8" />
      <polygon points="20,6 17,13 23,13" fill={strokeColor} />
      <polygon points="134,85 127,82 127,88" fill={strokeColor} />
      <path
        d="M 20 80 Q 55 75, 75 50 T 125 20"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeDasharray="4 2"
      />
      <line x1="50" y1="72" x2="50" y2="85" stroke={strokeColor} strokeWidth="0.6" strokeDasharray="1 2" />
      <line x1="90" y1="38" x2="90" y2="85" stroke={strokeColor} strokeWidth="0.6" strokeDasharray="1 2" />
      <text x="12" y="18" fill={textColor} fontSize="7" fontFamily="monospace">
        y
      </text>
      <text x="126" y="96" fill={textColor} fontSize="7" fontFamily="monospace">
        x
      </text>
      <text x="78" y="32" fill={textColor} fontSize="7" fontFamily="monospace">
        f(x)=∫dt
      </text>
    </Box>
  );
}

export function ProcessFlowSvg({ strokeColor, textColor, sx }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 150 70"
      sx={{
        width: "100%",
        height: "100%",
        opacity: 0.75,
        ...sx,
      }}
    >
      <rect x="5" y="8" width="140" height="54" rx="4" fill="none" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="3 2" />
      <circle cx="28" cy="35" r="10" fill="none" stroke={strokeColor} strokeWidth="1" />
      <text x="28" y="38" textAnchor="middle" fill={textColor} fontSize="7" fontFamily="monospace" fontWeight="bold">01</text>
      <line x1="38" y1="35" x2="65" y2="35" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="2 2" />
      <polygon points="65,35 60,32 60,38" fill={strokeColor} />
      <circle cx="75" cy="35" r="10" fill="none" stroke={strokeColor} strokeWidth="1" />
      <text x="75" y="38" textAnchor="middle" fill={textColor} fontSize="7" fontFamily="monospace" fontWeight="bold">02</text>
      <line x1="85" y1="35" x2="112" y2="35" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="2 2" />
      <polygon points="112,35 107,32 107,38" fill={strokeColor} />
      <circle cx="122" cy="35" r="10" fill="none" stroke={strokeColor} strokeWidth="1" />
      <text x="122" y="38" textAnchor="middle" fill={textColor} fontSize="7" fontFamily="monospace" fontWeight="bold">03</text>
      <text x="75" y="56" textAnchor="middle" fill={textColor} fontSize="5.5" fontFamily="monospace" letterSpacing="0.08em">
        PEDAGOGICAL FLOW // STEP-SEQUENCE
      </text>
    </Box>
  );
}

export function MetricGraphSvg({ strokeColor, textColor, sx }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 140 90"
      sx={{
        width: "100%",
        height: "100%",
        opacity: 0.7,
        ...sx,
      }}
    >
      <line x1="18" y1="12" x2="18" y2="78" stroke={strokeColor} strokeWidth="0.8" />
      <line x1="14" y1="74" x2="130" y2="74" stroke={strokeColor} strokeWidth="0.8" />
      <polygon points="18,8 15,14 21,14" fill={strokeColor} />
      <polygon points="134,74 128,71 128,77" fill={strokeColor} />
      <rect x="30" y="44" width="16" height="30" fill="none" stroke={strokeColor} strokeWidth="0.8" />
      <rect x="56" y="28" width="16" height="46" fill="none" stroke={strokeColor} strokeWidth="1" />
      <rect x="82" y="52" width="16" height="22" fill="none" stroke={strokeColor} strokeWidth="0.8" />
      <line x1="18" y1="28" x2="120" y2="28" stroke={strokeColor} strokeWidth="0.6" strokeDasharray="2 2" />
      <text x="38" y="40" textAnchor="middle" fill={textColor} fontSize="6" fontFamily="monospace">#02</text>
      <text x="64" y="24" textAnchor="middle" fill={textColor} fontSize="6.5" fontFamily="monospace" fontWeight="bold">#01</text>
      <text x="90" y="48" textAnchor="middle" fill={textColor} fontSize="6" fontFamily="monospace">#03</text>
      <text x="75" y="84" textAnchor="middle" fill={textColor} fontSize="5.5" fontFamily="monospace" letterSpacing="0.08em">
        PERCENTILE DISTRIBUTION // 1404
      </text>
    </Box>
  );
}

export function renderBackgroundFigure(figure, tokens) {
  if (!figure) return null;

  switch (figure.type) {
    case "seal":
      return (
        <EditorialSealSvg
          strokeColor={tokens.sealStroke || tokens.stroke}
          textColor={tokens.text}
          symbol={figure.symbol || "§"}
          textTop={figure.textTop}
          textBottom={figure.textBottom}
        />
      );

    case "columnGuide":
      return (
        <ColumnGuideSvg
          strokeColor={tokens.stroke}
          textColor={tokens.text}
          refText={figure.refText}
          indexText={figure.indexText}
          noteText={figure.noteText}
          regText={figure.regText}
        />
      );

    case "registration":
      return (
        <RegistrationMarkSvg
          strokeColor={tokens.stroke}
          textColor={tokens.text}
          label={figure.label}
        />
      );

    case "stamp":
      return (
        <DocumentStampSvg
          strokeColor={tokens.sealStroke || tokens.stroke}
          textColor={tokens.text}
          textTop={figure.textTop}
          textCenter={figure.textCenter}
          textBottom={figure.textBottom}
        />
      );

    case "mathDiagram":
      return (
        <MathDiagramFragmentSvg
          strokeColor={tokens.stroke}
          textColor={tokens.text}
        />
      );

    case "processFlow":
      return (
        <ProcessFlowSvg
          strokeColor={tokens.stroke}
          textColor={tokens.text}
        />
      );

    case "metricGraph":
      return (
        <MetricGraphSvg
          strokeColor={tokens.stroke}
          textColor={tokens.text}
        />
      );

    default:
      return null;
  }
}
