"use client";
import { useState } from "react";
import { Box, Divider, IconButton, Collapse } from "@mui/material";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { mockUserData } from "@/utils/dummydatas";
import DashUserProfile from "./DashUserProfile";
import DashNavActions from "./DashNavActions";

const ChevronSvg = ({ open }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    style={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.25s ease",
    }}
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="#969696"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function DashSidebar({ tabNavigation }) {
  const { USER_INFO, clearAuth } = useAuth();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await clearAuth();
    router.push("/auth/login");
  };

  if (!USER_INFO) return null;

  const fullName = USER_INFO?.user?.full_name || mockUserData.user.full_name;
  const university = USER_INFO?.user?.university || mockUserData.user.university;

  return (
    <>
      {/* Desktop sidebar */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: 293,
          minWidth: 293,
          height: { md: 800, lg: 820 },
          border: "2px solid var(--border)",
          borderRadius: "20px",
          bgcolor: "background.paper",
          flexDirection: "column",
          justifyContent: "space-between",
          p: "30px 24px",
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <DashUserProfile fullName={fullName} university={university} />
          <Divider sx={{ width: "100%", my: "24px", borderColor: "var(--border)" }} />
          {tabNavigation}
        </Box>

        <DashNavActions onLogout={handleLogout} />
      </Box>

      {/* Mobile collapsible mini-profile card */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          width: "100%",
          border: "1px solid var(--border)",
          borderRadius: "20px",
          bgcolor: "background.paper",
          p: 2,
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            cursor: "pointer",
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <IconButton
            size="small"
            sx={{ color: "#969696", p: 1 }}
            aria-label="منوی کاربری"
          >
            <ChevronSvg open={mobileOpen} />
          </IconButton>

          <DashUserProfile fullName={fullName} university={university} compact />
        </Box>

        <Collapse in={mobileOpen} timeout="auto" unmountOnExit>
          <Divider sx={{ my: 2, borderColor: "var(--border)" }} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, pb: 1 }}>
            {tabNavigation}
            <DashNavActions onLogout={handleLogout} compact />
          </Box>
        </Collapse>
      </Box>
    </>
  );
}
