/**
 * legalPreset.js
 * Visual preset for the Reusable PageBackground system.
 * Theme: Legal Documentation + Academic Publishing + Structured Codex.
 * Emphasizes statutory symbols (§, ¶), document reference numbering, editorial footnotes,
 * layout guides, and registration marks, with subtle academic notation accents.
 */

const legalPreset = {
  id: "legal",
  name: "Legal Documentation & Academic Publishing",

  // Theme-aware color tokens
  themeTokens: {
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
  },

  // Viewport corner and header archival markings
  headerMarkings: {
    topLeft: "⌜ DOC.SERIES: SIGMA-LEX // 1404-2026 ⌝",
    topRight: "⌞ CODEX REGISTRY // STATUTORY ARCHIVE ⌟",
  },

  // Distributed structural watermarks across the document height
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

  // Editorial stations distributed vertically down the document length (~7000px)
  stations: [
    // Station 1: General Provisions & Definitions (Near Header / Art 1)
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

    // Station 2: Account Security & Identification (Near Art 2 & 3)
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

    // Station 3: Intellectual Property & Content Sourcing (Near Art 4 & 5)
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

    // Station 4: Privacy Charter & Data Scope (Near Section 2 & Art 6)
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

    // Station 5: Confidentiality & Session Tokens (Near Art 7 & 8)
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

    // Station 6: Statutory Closure & Governance (Near Art 9 & Codex Notice)
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

  // Minimal SVG editorial & publishing graphics
  editorialFigures: [
    // Figure 1: Formal Circular Editorial Seal Outline (Top Right, ~240px)
    {
      type: "seal",
      top: { xs: "220px", md: "260px" },
      right: { xs: "20px", md: "64px" },
      width: { xs: "100px", md: "140px" },
      height: { xs: "100px", md: "140px" },
    },
    // Figure 2: Document Column Registry Ruler & Stamp (Mid Left, ~2950px)
    {
      type: "columnGuide",
      top: { xs: "2850px", md: "2950px" },
      left: { xs: "16px", md: "48px" },
      width: { xs: "110px", md: "150px" },
      height: { xs: "90px", md: "120px" },
    },
    // Figure 3: Editorial Attestation Crest Outline (Lower Left, ~5550px)
    {
      type: "seal",
      top: { xs: "5450px", md: "5550px" },
      left: { xs: "20px", md: "64px" },
      width: { xs: "95px", md: "135px" },
      height: { xs: "95px", md: "135px" },
    },
  ],
};

export default legalPreset;

