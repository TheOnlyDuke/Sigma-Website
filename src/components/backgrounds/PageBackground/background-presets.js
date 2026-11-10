export const defaultThemeTokens = {
  light: {
    gridPrimary: "rgba(70, 43, 239, 0.028)",
    gridSecondary: "rgba(15, 23, 42, 0.012)",
    stroke: "rgba(70, 43, 239, 0.07)",
    strokeFaint: "rgba(15, 23, 42, 0.035)",
    text: "rgba(30, 41, 59, 0.15)",
    textFaint: "rgba(70, 43, 239, 0.08)",
    watermark: "rgba(70, 43, 239, 0.022)",
    sealStroke: "rgba(70, 43, 239, 0.06)",
  },
  dark: {
    gridPrimary: "rgba(189, 194, 255, 0.035)",
    gridSecondary: "rgba(255, 255, 255, 0.014)",
    stroke: "rgba(189, 194, 255, 0.09)",
    strokeFaint: "rgba(255, 255, 255, 0.04)",
    text: "rgba(226, 232, 240, 0.18)",
    textFaint: "rgba(189, 194, 255, 0.09)",
    watermark: "rgba(129, 140, 248, 0.032)",
    sealStroke: "rgba(189, 194, 255, 0.07)",
  },
};

export const legalPreset = {
  id: "legal",
  name: "Legal Documentation & Academic Publishing",
  themeTokens: defaultThemeTokens,

  headerMarkings: {
    topLeft: "⌜ DOC.SERIES: SIGMA-LEX // 1404-2026 ⌝",
    topRight: "⌞ CODEX REGISTRY // STATUTORY ARCHIVE ⌟",
  },

  watermarks: [
    {
      symbol: "§",
      fontFamily: "'Times New Roman', Times, Georgia, serif",
      top: "450px",
      right: "5%",
      fontSize: { xs: "140px", md: "240px" },
      rotate: "8deg",
    },
    {
      symbol: "¶",
      fontFamily: "Georgia, serif",
      top: "1900px",
      left: "4%",
      fontSize: { xs: "130px", md: "220px" },
      rotate: "-5deg",
    },
    {
      symbol: "§",
      fontFamily: "'Times New Roman', Times, Georgia, serif",
      top: "3500px",
      right: "6%",
      fontSize: { xs: "150px", md: "250px" },
      rotate: "6deg",
    },
    {
      symbol: "Σ",
      fontFamily: "monospace",
      top: "5000px",
      left: "5%",
      fontSize: { xs: "140px", md: "230px" },
      rotate: "-4deg",
    },
    {
      symbol: "§",
      fontFamily: "'Times New Roman', Times, Georgia, serif",
      top: "6300px",
      right: "7%",
      fontSize: { xs: "140px", md: "240px" },
      rotate: "-6deg",
    },
  ],

  editorialFigures: [
    {
      type: "seal",
      symbol: "§",
      textTop: "CODEX · SIGMA",
      textBottom: "1404-1405 · ATTEST",
      top: { xs: "220px", md: "260px" },
      right: { xs: "20px", md: "64px" },
      width: { xs: "100px", md: "140px" },
      height: { xs: "100px", md: "140px" },
    },
    {
      type: "columnGuide",
      refText: "¶ REGISTRY // 04.COL",
      indexText: "§ ART.INDEX ∷ 1404",
      noteText: "Ref: Formal Documentation",
      regText: "[⌖ REGISTRATION: 0.12mm]",
      top: { xs: "2850px", md: "2950px" },
      left: { xs: "16px", md: "48px" },
      width: { xs: "110px", md: "150px" },
      height: { xs: "90px", md: "120px" },
    },
    {
      type: "registration",
      label: "⌖ ART-06.AUDIT",
      top: { xs: "4200px", md: "4300px" },
      right: { xs: "16px", md: "52px" },
      width: { xs: "60px", md: "80px" },
      height: { xs: "60px", md: "80px" },
    },
    {
      type: "seal",
      symbol: "§",
      textTop: "JURIDICAL · CODEX",
      textBottom: "RATIFIED · 1404",
      top: { xs: "5450px", md: "5550px" },
      left: { xs: "20px", md: "64px" },
      width: { xs: "95px", md: "135px" },
      height: { xs: "95px", md: "135px" },
    },
  ],

  stations: [
    {
      top: { xs: "120px", md: "160px" },
      leftContent: {
        title: "§ 01.1404 // JURIDICAL FORMATION",
        subtitle: "DOC.ID: SIGMA-CODEX-2026.01",
        note: "[*] Ref: Electronic Commerce Act (1382), Art. 6-12",
        align: "left",
      },
      rightContent: {
        title: "REGISTRATION SPEC // FOLIO-01",
        subtitle: "∀u ∈ 𝒰 : Valid(u) ∧ Consent(u)",
        note: "[⌖ MARGIN GUIDE: 36mm // ARCHIVAL]",
        align: "right",
      },
    },
    {
      top: { xs: "1350px", md: "1450px" },
      leftContent: {
        title: "¶ 02.AUTH // USER IDENTITY VERIFICATION",
        subtitle: "CLAUSE 2.1-2.2 ∷ CREDENTIAL CONFIDENTIALITY",
        note: "[†] Security Protocol: Session Tokenization (RFC 6749)",
        align: "left",
      },
      rightContent: {
        title: "§ 02.SUBSEC [α-4] // INTEGRITY AUDIT",
        subtitle: "ValidProfile(u) ⟹ Eligibility(u, Leaderboard)",
        note: "[‡] Ref: Consumer Protection Law (1388)",
        align: "right",
      },
    },
    {
      top: { xs: "2600px", md: "2750px" },
      leftContent: {
        title: "DOC.REF: IP-ACADEMIC-2026",
        subtitle: "§ 04.CONTENT // OPEN-RESOURCE CONVENTIONS",
        note: "Content_current ⊆ OpenWeb ∧ Content_future ⊆ FacultyCollab",
        align: "left",
      },
      rightContent: {
        title: "¶ 04.LICENSING // ACADEMIC FAIR USE",
        subtitle: "NON-COMMERCIAL RESEARCH LICENSE",
        note: "[§ ARTICLE 4.2: NON-EXCLUSIVE PERMIT]",
        align: "right",
      },
    },
    {
      top: { xs: "3950px", md: "4100px" },
      leftContent: {
        title: "§ 06.PRIV // DATA PROTECTION MANDATE",
        subtitle: "SCOPE: TELEPHONE, USERNAME, ACADEMIC RECORD",
        note: "[§ COMMERCIAL EXCLUSION: Transfer(d) ≡ ∅]",
        align: "left",
      },
      rightContent: {
        title: "¶ 06.GOVERNANCE // RETENTION DIRECTIVE",
        subtitle: "EDITORIAL NOTE: Student Activity Confidentiality",
        note: "[⌖ REGISTRY AUDIT: 1404.SEM-01]",
        align: "right",
      },
    },
    {
      top: { xs: "5200px", md: "5350px" },
      leftContent: {
        title: "§ 07.SECURITY // JUDICIAL EXCEPTION CLAUSE",
        subtitle: "Disclose(u) ⟺ Warrant(Court) ∧ DueProcess",
        note: "[*] Statutory Protection: Constitutional Principle 25",
        align: "left",
      },
      rightContent: {
        title: "¶ 08.SESSION // TOKEN LIFECYCLE MANAGEMENT",
        subtitle: "ACTION: Logout(u) ⟹ ClearBrowserTokens(u)",
        note: "[†] Distinction: Local Session Purge vs Server Profile",
        align: "right",
      },
    },
    {
      top: { xs: "6400px", md: "6550px" },
      leftContent: {
        title: "DOCUMENT ATTESTATION // CODEX CONCLUSION",
        subtitle: "GOVERNING LAW: IRANIAN E-COMMERCE JURISDICTION",
        note: "VALIDITY CYCLE: 1404-1405 ACADEMIC YEAR",
        align: "left",
      },
      rightContent: {
        title: "§ 1404-LAW ∷ STATUTORY ATTESTATION ■",
        subtitle: "EDITORIAL BOARD // CS.Assocation@hsu.ac.ir",
        note: "Q.E.D. // CODEX-TERMINUS",
        align: "right",
      },
    },
  ],
};

export const learningPreset = {
  id: "learning",
  name: "Mathematical Learning & Academic Lecture Series",
  themeTokens: defaultThemeTokens,

  headerMarkings: {
    topLeft: "⌜ MATHEMATICAL CORPUS // SIGMA-MATH-1404 ⌝",
    topRight: "⌞ CALCULUS & ANALYSIS // CURRICULUM ARCHIVE ⌟",
  },

  watermarks: [
    {
      symbol: "Σ",
      fontFamily: "monospace",
      top: "400px",
      right: "6%",
      fontSize: { xs: "140px", md: "240px" },
      rotate: "-6deg",
    },
    {
      symbol: "∫",
      fontFamily: "'Times New Roman', Times, Georgia, serif",
      top: "1600px",
      left: "5%",
      fontSize: { xs: "160px", md: "260px" },
      rotate: "8deg",
    },
    {
      symbol: "∂",
      fontFamily: "'Times New Roman', Times, Georgia, serif",
      top: "2800px",
      right: "5%",
      fontSize: { xs: "140px", md: "230px" },
      rotate: "-4deg",
    },
  ],

  editorialFigures: [
    {
      type: "seal",
      symbol: "Σ",
      textTop: "SIGMA · ACADEMY",
      textBottom: "1404 · MATHEMATICS",
      top: { xs: "240px", md: "270px" },
      right: { xs: "20px", md: "64px" },
      width: { xs: "100px", md: "140px" },
      height: { xs: "100px", md: "140px" },
    },
    {
      type: "mathDiagram",
      top: { xs: "1800px", md: "1900px" },
      left: { xs: "16px", md: "48px" },
      width: { xs: "110px", md: "150px" },
      height: { xs: "80px", md: "110px" },
    },
  ],

  stations: [
    {
      top: { xs: "140px", md: "180px" },
      leftContent: {
        title: "LECTURE SERIES ∷ ANALYSIS-I",
        subtitle: "FOUNDATIONAL THEOREMS // LIMITS & CONTINUITY",
        note: "∀ε > 0 ∃δ > 0 : 0 < |x - c| < δ ⟹ |f(x) - L| < ε",
        align: "left",
      },
      rightContent: {
        title: "CURRICULUM SPEC // SEM-1404",
        subtitle: "Σ_{k=1}^n f(x_k^*) Δx_k → ∫_a^b f(x) dx",
        note: "[⌖ RIEMANN INTEGRABILITY CRITERION]",
        align: "right",
      },
    },
    {
      top: { xs: "1500px", md: "1600px" },
      leftContent: {
        title: "DERIVATION DYNAMICS // TANGENCY",
        subtitle: "f'(x) = lim_{h→0} [f(x+h) - f(x)] / h",
        note: "[*] Fundamental Theorem of Calculus (Leibniz-Newton)",
        align: "left",
      },
      rightContent: {
        title: "MULTIVARIATE GRADIENT // ∇f",
        subtitle: "∂f/∂x dx + ∂f/∂y dy + ∂f/∂z dz",
        note: "Q.E.D. // ANALYSIS-CURRICULUM",
        align: "right",
      },
    },
  ],
};

export const documentationPreset = {
  id: "documentation",
  name: "System Documentation & Technical Specifications",
  themeTokens: defaultThemeTokens,

  headerMarkings: {
    topLeft: "⌜ SYSTEM SPECIFICATION // DOC-ARCHIVE ⌝",
    topRight: "⌞ ARCHITECTURAL BLUEPRINT // SIGMA-SPEC ⌟",
  },

  watermarks: [
    {
      symbol: "⌖",
      fontFamily: "monospace",
      top: "450px",
      right: "6%",
      fontSize: { xs: "120px", md: "200px" },
      rotate: "0deg",
    },
    {
      symbol: "※",
      fontFamily: "monospace",
      top: "1800px",
      left: "5%",
      fontSize: { xs: "130px", md: "210px" },
      rotate: "12deg",
    },
  ],

  editorialFigures: [
    {
      type: "columnGuide",
      refText: "¶ SCHEMA // COMPONENT-TREE",
      indexText: "§ SPEC.INDEX ∷ NEXT-16",
      noteText: "Ref: System Architecture",
      regText: "[⌖ STATUS: VERIFIED]",
      top: { xs: "250px", md: "280px" },
      right: { xs: "20px", md: "64px" },
      width: { xs: "110px", md: "150px" },
      height: { xs: "90px", md: "120px" },
    },
  ],

  stations: [
    {
      top: { xs: "140px", md: "180px" },
      leftContent: {
        title: "SYSTEM BLUEPRINT // ARCH-2026",
        subtitle: "MODULAR COMPONENT COMPOSITION PATTERN",
        note: "Layer 0: Theme -> Layer 1: Container -> Layer 2: View",
        align: "left",
      },
      rightContent: {
        title: "API PROTOCOL // REST-REVERSE-PROXY",
        subtitle: "Client -> RouteHandler -> BackendAPI",
        note: "[*] Offline Fallback to Local Mock Data Layer",
        align: "right",
      },
    },
  ],
};

export const presets = {
  legal: legalPreset,
  learning: learningPreset,
  documentation: documentationPreset,
};

export function resolvePreset(presetOrVariant = "legal", density = "normal") {
  let baseConfig;

  if (typeof presetOrVariant === "string") {
    baseConfig = presets[presetOrVariant] || presets.legal;
  } else if (presetOrVariant && typeof presetOrVariant === "object") {
    baseConfig = {
      ...presets.legal,
      ...presetOrVariant,
      themeTokens: {
        ...defaultThemeTokens,
        ...(presetOrVariant.themeTokens || {}),
      },
    };
  } else {
    baseConfig = presets.legal;
  }

  if (density === "sparse") {
    return {
      ...baseConfig,
      stations: baseConfig.stations ? baseConfig.stations.filter((_, idx) => idx % 2 === 0) : [],
      watermarks: baseConfig.watermarks ? baseConfig.watermarks.slice(0, 3) : [],
      editorialFigures: baseConfig.editorialFigures ? baseConfig.editorialFigures.slice(0, 2) : [],
    };
  }

  return baseConfig;
}

export default presets;
