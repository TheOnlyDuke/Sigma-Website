export const HEADER_STYLES = {
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  signUpButton: {
    minWidth: "140px",
    width: "auto",
    height: "48px",
    px: "18px",
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
    transition: "background-color 200ms ease-in-out",
    "&:hover": {
      backgroundColor: "var(--blackBG)",
      cursor: "pointer",
    },
  },
  menu: {
    backdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
    container: {
      position: "fixed",
      top: "105px",
      left: 0,
      width: "100%",
      backgroundColor: "var(--notActiveBG)",
      padding: "16px",
      zIndex: 1001,
      boxShadow: "0px 5px 5px -3px rgba(0,0,0,0.2)",
    },
  },
};

export const NAVIGATION_ITEMS = [
  { href: "/learning", label: "مباحث", menuId: "subjects" },
  { href: "/blogs", label: "وبلاگ", menuId: "blogs" },
  { href: "/leaderboard", label: "لیدربورد" },
];
