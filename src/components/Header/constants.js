export const HEADER_STYLES = {
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  signUpButton: {
    minWidth: { xs: "auto", sm: "130px", md: "140px" },
    width: "auto",
    height: { xs: "38px", sm: "42px", md: "46px" },
    px: { xs: "12px", sm: "14px", md: "18px" },
    backgroundColor: "var(--activeBG)",
    borderRadius: "12px",
    color: "#FFFFFF",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    fontFamily: "IRANYekanX, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: "background-color 200ms ease-in-out, transform 150ms ease",
    "& *": {
      cursor: "pointer",
    },
    "&:hover": {
      backgroundColor: "var(--blackBG)",
      cursor: "pointer",
    },
    "&:focus-visible": {
      outline: "2px solid var(--activeBG)",
      outlineOffset: "2px",
    },
  },
};

export const NAVIGATION_ITEMS = [
  { href: "/topics", label: "مباحث", menuId: "subjects" },
  { href: "/blog", label: "وبلاگ", menuId: "blogs" },
  { href: "/leaderboard", label: "لیدربورد" },
];
