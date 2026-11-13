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
    formula: "rgba(70, 43, 239, 0.13)",
    formulaFaint: "rgba(15, 23, 42, 0.08)",
    formulaOpacity: 0.48,
    formulaFaintOpacity: 0.3,
    mathSymbol: "rgba(70, 43, 239, 0.11)",
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
    formula: "rgba(189, 194, 255, 0.15)",
    formulaFaint: "rgba(226, 232, 240, 0.09)",
    formulaOpacity: 0.5,
    formulaFaintOpacity: 0.32,
    mathSymbol: "rgba(189, 194, 255, 0.12)",
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
      fontSize: { xs: "130px", md: "220px" },
      rotate: "8deg",
    },
    {
      symbol: "¶",
      fontFamily: "Georgia, serif",
      top: "1900px",
      left: "4%",
      fontSize: { xs: "120px", md: "200px" },
      rotate: "-5deg",
    },
    {
      symbol: "Σ",
      fontFamily: "monospace",
      top: "3500px",
      right: "6%",
      fontSize: { xs: "130px", md: "210px" },
      rotate: "6deg",
    },
    {
      symbol: "§",
      fontFamily: "'Times New Roman', Times, Georgia, serif",
      top: "5000px",
      left: "5%",
      fontSize: { xs: "130px", md: "220px" },
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
      width: { xs: "95px", md: "135px" },
      height: { xs: "95px", md: "135px" },
    },
    {
      type: "columnGuide",
      refText: "¶ REGISTRY // 04.COL",
      indexText: "§ ART.INDEX ∷ 1404",
      noteText: "Ref: Documentation",
      regText: "[⌖ REG: 0.12mm]",
      top: { xs: "2850px", md: "2950px" },
      left: { xs: "16px", md: "48px" },
      width: { xs: "105px", md: "145px" },
      height: { xs: "85px", md: "115px" },
    },
  ],

  formulas: [
    {
      latex: "\\mathcal{D}_{\\text{priv}} \\cap \\mathcal{D}_{\\text{public}} = \\emptyset",
      top: { xs: "280px", md: "310px" },
      left: { xs: "18px", md: "40px" },
      fontSize: { xs: "17px", sm: "22px", md: "28px" },
    },
    {
      latex: "\\forall u \\in \\mathcal{U} : \\operatorname{Consent}(u) \\implies \\operatorname{Access}(u)",
      top: { xs: "1450px", md: "1520px" },
      right: { xs: "20px", md: "44px" },
      fontSize: { xs: "16px", sm: "21px", md: "26px" },
      rotate: "-2deg",
    },
    {
      latex: "\\operatorname{Hash}(s) \\neq s \\quad \\forall s \\in \\mathcal{S}",
      top: { xs: "2650px", md: "2750px" },
      left: { xs: "20px", md: "42px" },
      fontSize: { xs: "17px", sm: "22px", md: "27px" },
      rotate: "2deg",
    },
    {
      latex: "\\operatorname{Session}(t) \\le T_{\\max} \\implies \\operatorname{Valid}(t)",
      top: { xs: "3950px", md: "4050px" },
      right: { xs: "20px", md: "44px" },
      fontSize: { xs: "16px", sm: "21px", md: "26px" },
    },
    {
      latex: "A \\subseteq B \\iff (x \\in A \\implies x \\in B)",
      top: { xs: "5150px", md: "5250px" },
      left: { xs: "20px", md: "42px" },
      fontSize: { xs: "17px", sm: "21px", md: "26px" },
      rotate: "-2deg",
    },
  ],

  mathSymbols: [
    { symbol: "§", top: "180px", right: "12%", fontSize: { xs: "22px", md: "32px" } },
    { symbol: "¶", top: "850px", left: "10%", fontSize: { xs: "20px", md: "28px" }, rotate: "-6deg" },
    { symbol: "∀", top: "1950px", right: "14%", fontSize: { xs: "18px", md: "26px" } },
    { symbol: "∃", top: "3150px", left: "11%", fontSize: { xs: "18px", md: "26px" } },
    { symbol: "⊆", top: "4400px", right: "12%", fontSize: { xs: "20px", md: "28px" }, rotate: "8deg" },
    { symbol: "∈", top: "5600px", left: "13%", fontSize: { xs: "18px", md: "26px" } },
  ],

  stations: [
    {
      top: { xs: "120px", md: "150px" },
      leftContent: {
        title: "§ 01 · FORMATION",
        align: "left",
      },
      rightContent: {
        title: "CODEX · 1404",
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
    topLeft: "⌜ MATHEMATICAL CORPUS // SIGMA-1404 ⌝",
    topRight: "⌞ CALCULUS & ANALYSIS ⌟",
  },

  watermarks: [
    {
      symbol: "Σ",
      fontFamily: "monospace",
      top: "380px",
      right: "6%",
      fontSize: { xs: "130px", md: "210px" },
      rotate: "-6deg",
    },
    {
      symbol: "∫",
      fontFamily: "'Times New Roman', Times, Georgia, serif",
      top: "1400px",
      left: "5%",
      fontSize: { xs: "140px", md: "220px" },
      rotate: "8deg",
    },
    {
      symbol: "∂",
      fontFamily: "'Times New Roman', Times, Georgia, serif",
      top: "2300px",
      right: "5%",
      fontSize: { xs: "130px", md: "200px" },
      rotate: "-4deg",
    },
  ],

  editorialFigures: [
    {
      type: "seal",
      symbol: "Σ",
      textTop: "SIGMA · ACADEMY",
      textBottom: "1404 · MATHEMATICS",
      top: { xs: "220px", md: "250px" },
      right: { xs: "20px", md: "56px" },
      width: { xs: "90px", md: "125px" },
      height: { xs: "90px", md: "125px" },
    },
    {
      type: "mathDiagram",
      top: { xs: "1600px", md: "1700px" },
      left: { xs: "16px", md: "48px" },
      width: { xs: "100px", md: "135px" },
      height: { xs: "70px", md: "95px" },
    },
  ],

  formulas: [
    {
      latex: "\\lim_{x \\to c} f(x) = f(c)",
      top: { xs: "150px", md: "170px" },
      left: { xs: "18px", md: "38px" },
      fontSize: { xs: "18px", sm: "24px", md: "28px" },
    },
    {
      latex: "\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)",
      top: { xs: "340px", md: "380px" },
      right: { xs: "20px", md: "44px" },
      fontSize: { xs: "17px", sm: "22px", md: "28px" },
      rotate: "-2deg",
    },
    {
      latex: "\\frac{d}{dx}[\\ln x] = \\frac{1}{x}",
      top: { xs: "580px", md: "620px" },
      left: { xs: "18px", md: "40px" },
      fontSize: { xs: "18px", sm: "22px", md: "26px" },
      rotate: "3deg",
    },
    {
      latex: "\\sum_{k=0}^n \\binom{n}{k} a^{n-k} b^k = (a+b)^n",
      top: { xs: "820px", md: "870px" },
      right: { xs: "18px", md: "38px" },
      fontSize: { xs: "16px", sm: "20px", md: "25px" },
    },
    {
      latex: "\\int_a^b f'(x)\\,dx = f(b) - f(a)",
      top: { xs: "1080px", md: "1140px" },
      left: { xs: "20px", md: "42px" },
      fontSize: { xs: "18px", sm: "23px", md: "28px" },
      rotate: "-2deg",
    },
    {
      latex: "\\nabla f = \\left(\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}\\right)",
      top: { xs: "1340px", md: "1400px" },
      right: { xs: "22px", md: "46px" },
      fontSize: { xs: "18px", sm: "22px", md: "27px" },
    },
    {
      latex: "\\int_{-\\infty}^\\infty e^{-x^2}\\,dx = \\sqrt{\\pi}",
      top: { xs: "1580px", md: "1650px" },
      left: { xs: "18px", md: "38px" },
      fontSize: { xs: "18px", sm: "23px", md: "28px" },
      rotate: "2deg",
    },
    {
      latex: "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
      top: { xs: "1840px", md: "1920px" },
      right: { xs: "20px", md: "42px" },
      fontSize: { xs: "18px", sm: "22px", md: "27px" },
    },
    {
      latex: "\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}",
      top: { xs: "2100px", md: "2180px" },
      left: { xs: "18px", md: "36px" },
      fontSize: { xs: "17px", sm: "21px", md: "26px" },
      rotate: "-2deg",
    },
  ],

  mathSymbols: [
    { symbol: "∫", top: "110px", right: "12%", fontSize: { xs: "22px", md: "34px" } },
    { symbol: "∂", top: "250px", left: "10%", fontSize: { xs: "20px", md: "28px" }, rotate: "-6deg" },
    { symbol: "∇", top: "470px", right: "14%", fontSize: { xs: "18px", md: "26px" } },
    { symbol: "∞", top: "710px", left: "12%", fontSize: { xs: "20px", md: "30px" }, rotate: "10deg" },
    { symbol: "π", top: "960px", right: "11%", fontSize: { xs: "18px", md: "26px" } },
    { symbol: "∑", top: "1220px", left: "14%", fontSize: { xs: "22px", md: "32px" } },
    { symbol: "λ", top: "1480px", right: "13%", fontSize: { xs: "18px", md: "24px" } },
    { symbol: "√", top: "1750px", left: "10%", fontSize: { xs: "20px", md: "30px" }, rotate: "-4deg" },
    { symbol: "≤", top: "2020px", right: "15%", fontSize: { xs: "18px", md: "24px" } },
    { symbol: "∈", top: "2260px", left: "12%", fontSize: { xs: "18px", md: "26px" } },
  ],

  stations: [
    {
      top: { xs: "130px", md: "160px" },
      leftContent: {
        title: "ANALYSIS · I",
        align: "left",
      },
      rightContent: {
        title: "CURRICULUM · 1404",
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
    topLeft: "⌜ SPECIFICATION ARCHIVE ⌝",
    topRight: "⌞ ARCHITECTURAL BLUEPRINT ⌟",
  },

  watermarks: [
    {
      symbol: "⌖",
      fontFamily: "monospace",
      top: "400px",
      right: "6%",
      fontSize: { xs: "110px", md: "180px" },
      rotate: "0deg",
    },
    {
      symbol: "※",
      fontFamily: "monospace",
      top: "1400px",
      left: "5%",
      fontSize: { xs: "110px", md: "190px" },
      rotate: "12deg",
    },
  ],

  editorialFigures: [
    {
      type: "columnGuide",
      refText: "¶ SCHEMA // COMPONENT-TREE",
      indexText: "§ SPEC.INDEX ∷ NEXT-16",
      noteText: "Ref: Architecture",
      regText: "[⌖ VERIFIED]",
      top: { xs: "240px", md: "270px" },
      right: { xs: "20px", md: "56px" },
      width: { xs: "105px", md: "145px" },
      height: { xs: "85px", md: "115px" },
    },
  ],

  formulas: [
    {
      latex: "T(n) = 2T(n/2) + \\mathcal{O}(n) \\implies T(n) = \\mathcal{O}(n \\log n)",
      top: { xs: "160px", md: "180px" },
      left: { xs: "18px", md: "38px" },
      fontSize: { xs: "17px", sm: "22px", md: "28px" },
    },
    {
      latex: "\\sum_{i=0}^{k} 2^i = 2^{k+1} - 1",
      top: { xs: "520px", md: "560px" },
      right: { xs: "20px", md: "44px" },
      fontSize: { xs: "18px", sm: "23px", md: "28px" },
      rotate: "-2deg",
    },
    {
      latex: "H(X) = -\\sum_{x \\in \\mathcal{X}} P(x) \\log_2 P(x)",
      top: { xs: "980px", md: "1040px" },
      left: { xs: "18px", md: "40px" },
      fontSize: { xs: "17px", sm: "22px", md: "27px" },
      rotate: "2deg",
    },
  ],

  mathSymbols: [
    { symbol: "⌖", top: "110px", right: "12%", fontSize: { xs: "20px", md: "30px" } },
    { symbol: "※", top: "340px", left: "10%", fontSize: { xs: "20px", md: "28px" } },
    { symbol: "∑", top: "720px", right: "14%", fontSize: { xs: "22px", md: "32px" } },
    { symbol: "log", top: "1150px", left: "12%", fontSize: { xs: "18px", md: "24px" } },
  ],

  stations: [
    {
      top: { xs: "130px", md: "160px" },
      leftContent: {
        title: "SPEC · 2026",
        align: "left",
      },
      rightContent: {
        title: "SIGMA · CORE",
        align: "right",
      },
    },
  ],
};

export const howtoPreset = {
  id: "howto",
  name: "System Walkthrough & Guided Learning Onboarding",
  themeTokens: defaultThemeTokens,

  headerMarkings: {
    topLeft: "⌜ SYSTEM MANUAL // ONBOARDING ⌝",
    topRight: "⌞ PEDAGOGICAL SPEC ⌟",
  },

  watermarks: [
    {
      symbol: "※",
      fontFamily: "monospace",
      top: "400px",
      right: "6%",
      fontSize: { xs: "110px", md: "180px" },
      rotate: "8deg",
    },
    {
      symbol: "Σ",
      fontFamily: "monospace",
      top: "1600px",
      left: "5%",
      fontSize: { xs: "120px", md: "200px" },
      rotate: "-5deg",
    },
    {
      symbol: "⌖",
      fontFamily: "monospace",
      top: "2700px",
      right: "5%",
      fontSize: { xs: "110px", md: "180px" },
      rotate: "6deg",
    },
  ],

  editorialFigures: [
    {
      type: "processFlow",
      top: { xs: "220px", md: "250px" },
      right: { xs: "16px", md: "48px" },
      width: { xs: "100px", md: "140px" },
      height: { xs: "55px", md: "80px" },
    },
    {
      type: "columnGuide",
      refText: "¶ GUIDE // INTERACTIVE",
      indexText: "※ STEP.INDEX",
      noteText: "Ref: Methodology",
      regText: "[⌖ STATUS: VERIFIED]",
      top: { xs: "1800px", md: "1900px" },
      left: { xs: "16px", md: "44px" },
      width: { xs: "100px", md: "140px" },
      height: { xs: "80px", md: "110px" },
    },
  ],

  formulas: [
    {
      latex: "\\operatorname{Score}(u) = \\sum_{k=1}^m w_k \\cdot \\operatorname{acc}_k",
      top: { xs: "160px", md: "180px" },
      left: { xs: "18px", md: "38px" },
      fontSize: { xs: "17px", sm: "22px", md: "28px" },
    },
    {
      latex: "\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{i=1}^n X_i = \\mathbb{E}[X]",
      top: { xs: "520px", md: "560px" },
      right: { xs: "20px", md: "44px" },
      fontSize: { xs: "17px", sm: "22px", md: "27px" },
      rotate: "-2deg",
    },
    {
      latex: "P(A \\cap B) = P(A) \\cdot P(B \\mid A)",
      top: { xs: "980px", md: "1040px" },
      left: { xs: "18px", md: "40px" },
      fontSize: { xs: "17px", sm: "21px", md: "26px" },
      rotate: "3deg",
    },
    {
      latex: "\\sum_{k=1}^n k = \\frac{n(n+1)}{2}",
      top: { xs: "1460px", md: "1520px" },
      right: { xs: "18px", md: "38px" },
      fontSize: { xs: "18px", sm: "23px", md: "28px" },
    },
    {
      latex: "\\Delta t = t_{i+1} - t_i \\implies \\bar{v} = \\frac{\\Delta s}{\\Delta t}",
      top: { xs: "1940px", md: "2020px" },
      left: { xs: "20px", md: "42px" },
      fontSize: { xs: "16px", sm: "20px", md: "25px" },
      rotate: "-2deg",
    },
    {
      latex: "\\|u + v\\| \\le \\|u\\| + \\|v\\|",
      top: { xs: "2420px", md: "2500px" },
      right: { xs: "22px", md: "46px" },
      fontSize: { xs: "18px", sm: "22px", md: "27px" },
    },
    {
      latex: "\\prod_{k=2}^n \\left(1 - \\frac{1}{k}\\right) = \\frac{1}{n}",
      top: { xs: "2900px", md: "2980px" },
      left: { xs: "18px", md: "38px" },
      fontSize: { xs: "18px", sm: "23px", md: "28px" },
      rotate: "2deg",
    },
    {
      latex: "\\int_0^1 x^m (1-x)^n \\,dx = \\frac{m!\\,n!}{(m+n+1)!}",
      top: { xs: "3380px", md: "3460px" },
      right: { xs: "20px", md: "42px" },
      fontSize: { xs: "17px", sm: "21px", md: "26px" },
    },
  ],

  mathSymbols: [
    { symbol: "∑", top: "110px", right: "12%", fontSize: { xs: "22px", md: "32px" } },
    { symbol: "∫", top: "340px", left: "11%", fontSize: { xs: "20px", md: "30px" }, rotate: "-6deg" },
    { symbol: "√", top: "740px", right: "14%", fontSize: { xs: "20px", md: "28px" } },
    { symbol: "π", top: "1220px", left: "13%", fontSize: { xs: "18px", md: "26px" } },
    { symbol: "∞", top: "1700px", right: "11%", fontSize: { xs: "20px", md: "30px" }, rotate: "8deg" },
    { symbol: "∀", top: "2180px", left: "10%", fontSize: { xs: "18px", md: "26px" } },
    { symbol: "∃", top: "2660px", right: "15%", fontSize: { xs: "18px", md: "26px" } },
    { symbol: "≈", top: "3140px", left: "12%", fontSize: { xs: "18px", md: "24px" } },
    { symbol: "≤", top: "3600px", right: "13%", fontSize: { xs: "18px", md: "26px" } },
  ],

  stations: [
    {
      top: { xs: "130px", md: "160px" },
      leftContent: {
        title: "STEP · GUIDE",
        align: "left",
      },
      rightContent: {
        title: "PROTOCOL · 1404",
        align: "right",
      },
    },
  ],
};

export const leaderboardPreset = {
  id: "leaderboard",
  name: "Merit Register & Scholastic Ranking",
  themeTokens: defaultThemeTokens,

  headerMarkings: {
    topLeft: "⌜ MERIT REGISTRY // COHORT ⌝",
    topRight: "⌞ SCHOLASTIC EVALUATION ⌟",
  },

  watermarks: [
    {
      symbol: "№",
      fontFamily: "Georgia, serif",
      top: "400px",
      right: "5%",
      fontSize: { xs: "120px", md: "190px" },
      rotate: "6deg",
    },
    {
      symbol: "Σ",
      fontFamily: "monospace",
      top: "1250px",
      left: "5%",
      fontSize: { xs: "130px", md: "200px" },
      rotate: "-5deg",
    },
  ],

  editorialFigures: [
    {
      type: "metricGraph",
      top: { xs: "210px", md: "240px" },
      right: { xs: "16px", md: "48px" },
      width: { xs: "100px", md: "135px" },
      height: { xs: "65px", md: "90px" },
    },
  ],

  formulas: [
    {
      latex: "\\operatorname{Rank}(u) = 1 + \\sum_{v \\neq u} \\mathbb{I}(S(v) > S(u))",
      top: { xs: "160px", md: "180px" },
      left: { xs: "18px", md: "38px" },
      fontSize: { xs: "16px", sm: "21px", md: "26px" },
    },
    {
      latex: "\\Phi(z) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^z e^{-t^2/2}\\,dt",
      top: { xs: "480px", md: "520px" },
      right: { xs: "20px", md: "44px" },
      fontSize: { xs: "17px", sm: "23px", md: "28px" },
      rotate: "-2deg",
    },
    {
      latex: "\\mu = \\frac{1}{N}\\sum x_i, \\quad \\sigma = \\sqrt{\\frac{1}{N}\\sum (x_i - \\mu)^2}",
      top: { xs: "880px", md: "940px" },
      left: { xs: "18px", md: "40px" },
      fontSize: { xs: "15px", sm: "20px", md: "25px" },
      rotate: "2deg",
    },
    {
      latex: "\\operatorname{Percentile}(p) = \\frac{R(u)}{N_{\\text{total}}} \\times 100\\%",
      top: { xs: "1300px", md: "1380px" },
      right: { xs: "18px", md: "38px" },
      fontSize: { xs: "17px", sm: "22px", md: "27px" },
    },
    {
      latex: "\\max_{u \\in \\mathcal{U}} \\left\\{ \\sum_{k} \\omega_k S_k \\right\\}",
      top: { xs: "1720px", md: "1800px" },
      left: { xs: "20px", md: "42px" },
      fontSize: { xs: "18px", sm: "23px", md: "28px" },
      rotate: "-2deg",
    },
    {
      latex: "\\lim_{N \\to \\infty} \\frac{\\sigma}{\\sqrt{N}} = 0",
      top: { xs: "2120px", md: "2200px" },
      right: { xs: "22px", md: "44px" },
      fontSize: { xs: "18px", sm: "22px", md: "27px" },
    },
  ],

  mathSymbols: [
    { symbol: "№", top: "110px", right: "12%", fontSize: { xs: "22px", md: "32px" } },
    { symbol: "∑", top: "310px", left: "10%", fontSize: { xs: "22px", md: "34px" }, rotate: "-6deg" },
    { symbol: "σ", top: "680px", right: "14%", fontSize: { xs: "18px", md: "26px" } },
    { symbol: "μ", top: "1120px", left: "12%", fontSize: { xs: "18px", md: "26px" } },
    { symbol: "Φ", top: "1540px", right: "11%", fontSize: { xs: "18px", md: "26px" } },
    { symbol: "≥", top: "1940px", left: "14%", fontSize: { xs: "18px", md: "24px" } },
    { symbol: "√", top: "2320px", right: "13%", fontSize: { xs: "20px", md: "28px" } },
  ],

  stations: [
    {
      top: { xs: "130px", md: "160px" },
      leftContent: {
        title: "MERIT · COHORT",
        align: "left",
      },
      rightContent: {
        title: "RANK · 1404",
        align: "right",
      },
    },
  ],
};

export const problemSolvingPreset = {
  id: "problemSolving",
  name: "Interactive Challenge & Mathematical Problem Solving",
  themeTokens: defaultThemeTokens,

  headerMarkings: {
    topLeft: "⌜ SIGMA · CALC LAB ⌝",
    topRight: "⌞ DERIVATION WORKSPACE ⌟",
  },

  watermarks: [
    {
      symbol: "∫",
      fontFamily: "'Times New Roman', Times, Georgia, serif",
      top: "280px",
      right: "6%",
      fontSize: { xs: "120px", md: "180px" },
      rotate: "6deg",
    },
    {
      symbol: "∂",
      fontFamily: "'Times New Roman', Times, Georgia, serif",
      top: "780px",
      left: "5%",
      fontSize: { xs: "110px", md: "170px" },
      rotate: "-4deg",
    },
  ],

  editorialFigures: [
    {
      type: "mathDiagram",
      top: { xs: "200px", md: "220px" },
      right: { xs: "16px", md: "48px" },
      width: { xs: "95px", md: "130px" },
      height: { xs: "65px", md: "90px" },
    },
    {
      type: "registration",
      label: "⌖ 0.12mm",
      top: { xs: "620px", md: "660px" },
      left: { xs: "16px", md: "48px" },
      width: { xs: "55px", md: "75px" },
      height: { xs: "55px", md: "75px" },
    },
  ],

  formulas: [
    {
      latex: "\\int_a^b f(x)\\,dx = F(b) - F(a)",
      top: { xs: "140px", md: "160px" },
      left: { xs: "16px", md: "36px" },
      fontSize: { xs: "18px", sm: "24px", md: "30px" },
      rotate: "-2deg",
    },
    {
      latex: "\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}",
      top: { xs: "230px", md: "250px" },
      right: { xs: "18px", md: "36px" },
      fontSize: { xs: "17px", sm: "22px", md: "27px" },
      rotate: "-2deg",
    },
    {
      latex: "\\frac{d}{dx}[e^{u}] = u' e^u",
      top: { xs: "360px", md: "400px" },
      left: { xs: "20px", md: "42px" },
      fontSize: { xs: "18px", sm: "23px", md: "28px" },
      rotate: "3deg",
    },
    {
      latex: "\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} = f'(x)",
      top: { xs: "510px", md: "540px" },
      right: { xs: "18px", md: "38px" },
      fontSize: { xs: "17px", sm: "22px", md: "27px" },
      rotate: "2deg",
    },
    {
      latex: "\\int u\\,dv = uv - \\int v\\,du",
      top: { xs: "600px", md: "640px" },
      left: { xs: "18px", md: "38px" },
      fontSize: { xs: "18px", sm: "23px", md: "28px" },
    },
    {
      latex: "\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\nabla^2 u",
      top: { xs: "720px", md: "760px" },
      right: { xs: "22px", md: "46px" },
      fontSize: { xs: "18px", sm: "22px", md: "28px" },
      rotate: "2deg",
    },
    {
      latex: "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1",
      top: { xs: "840px", md: "880px" },
      left: { xs: "22px", md: "44px" },
      fontSize: { xs: "17px", sm: "22px", md: "27px" },
      rotate: "-2deg",
    },
    {
      latex: "\\forall \\varepsilon > 0 \\; \\exists \\delta > 0 : |x - c| < \\delta \\implies |f(x) - L| < \\varepsilon",
      top: { xs: "960px", md: "1000px" },
      right: { xs: "16px", md: "36px" },
      fontSize: { xs: "15px", sm: "19px", md: "24px" },
    },
  ],

  mathSymbols: [
    { symbol: "∫", top: "100px", right: "14%", fontSize: { xs: "22px", md: "34px" } },
    { symbol: "∂", top: "200px", left: "10%", fontSize: { xs: "20px", md: "30px" }, rotate: "-8deg" },
    { symbol: "∇", top: "320px", right: "12%", fontSize: { xs: "18px", md: "28px" } },
    { symbol: "∞", top: "440px", left: "13%", fontSize: { xs: "20px", md: "32px" }, rotate: "12deg" },
    { symbol: "λ", top: "560px", right: "15%", fontSize: { xs: "18px", md: "26px" } },
    { symbol: "∑", top: "670px", left: "9%", fontSize: { xs: "22px", md: "34px" }, rotate: "6deg" },
    { symbol: "π", top: "790px", right: "11%", fontSize: { xs: "18px", md: "28px" } },
    { symbol: "√", top: "830px", left: "14%", fontSize: { xs: "20px", md: "30px" } },
    { symbol: "≠", top: "910px", right: "13%", fontSize: { xs: "18px", md: "24px" } },
    { symbol: "∀", top: "980px", left: "11%", fontSize: { xs: "18px", md: "26px" } },
    { symbol: "∈", top: "1050px", right: "10%", fontSize: { xs: "18px", md: "26px" } },
    { symbol: "Δ", top: "1110px", left: "15%", fontSize: { xs: "18px", md: "26px" } },
  ],

  stations: [
    {
      top: { xs: "120px", md: "150px" },
      leftContent: {
        title: "§ 01 · ANALYSIS",
        align: "left",
      },
      rightContent: {
        title: "Q.E.D. // 1404",
        align: "right",
      },
    },
  ],
};

export const presets = {
  legal: legalPreset,
  learning: learningPreset,
  documentation: documentationPreset,
  howto: howtoPreset,
  leaderboard: leaderboardPreset,
  problemSolving: problemSolvingPreset,
  questions: problemSolvingPreset,
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
    const balanceSparse = (items) => {
      if (!items || !items.length) return [];
      const left = items.filter((item) => item.left !== undefined);
      const right = items.filter((item) => item.right !== undefined);
      const sparseLeft = left.filter((_, idx) => idx % 2 === 0);
      const sparseRight = right.filter((_, idx) => idx % 2 === 0);
      return [...sparseLeft, ...sparseRight];
    };

    return {
      ...baseConfig,
      stations: baseConfig.stations ? baseConfig.stations.filter((_, idx) => idx % 2 === 0) : [],
      watermarks: baseConfig.watermarks ? baseConfig.watermarks.slice(0, 2) : [],
      editorialFigures: baseConfig.editorialFigures ? baseConfig.editorialFigures.slice(0, 1) : [],
      formulas: balanceSparse(baseConfig.formulas),
      mathSymbols: balanceSparse(baseConfig.mathSymbols),
    };
  }

  return baseConfig;
}

export default presets;
