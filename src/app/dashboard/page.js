"use client";
import { useState } from "react";
import { Box, CircularProgress, Alert, Button, Typography } from "@mui/material";
import DashSidebar from "@/components/Dashboard/DashSidebar";
import DashTabNavigation from "@/components/Dashboard/DashTabNavigation";
import DashStatsTab from "@/components/Dashboard/DashStatsTab";
import DashTopicsTab from "@/components/Dashboard/DashTopicsTab";
import DashNotificationsTab from "@/components/Dashboard/DashNotificationsTab";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const LogoutSvg = ({ color = "#FFFFFF" }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M17 16L21 12M21 12L17 8M21 12H9M9 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H9"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Dashboard() {
  const { USER_INFO, isLoading, clearAuth } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  const handleLogout = async () => {
    await clearAuth();
    router.push("/auth/login");
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!USER_INFO) {
    return (
      <Box p={3} sx={{ direction: "rtl" }}>
        <Alert severity="warning">
          لطفاً وارد حساب کاربری خود شوید.
        </Alert>
      </Box>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <DashStatsTab />;
      case 1:
        return <DashTopicsTab />;
      case 2:
        return <DashNotificationsTab />;
      default:
        return <DashStatsTab />;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        minHeight: "calc(100dvh - 200px)",
        gap: { xs: 3, md: "30px" },
        py: { xs: 1, md: 2 },
        direction: "rtl",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          flexShrink: 0,
          width: { xs: "100%", md: "293px" },
        }}
      >
        <DashSidebar
          tabNavigation={
            <DashTabNavigation
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          }
        />
      </Box>

      {/* Main tab content */}
      <Box
        sx={{
          flexGrow: 1,
          minWidth: 0,
          maxWidth: { xs: "100%", md: "1077px" },
          width: "100%",
        }}
      >
        {renderTabContent()}

        {/* Mobile logout */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            mt: 4,
            mb: 3,
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogout}
            sx={{
              height: "55px",
              borderRadius: "10px",
              bgcolor: "#000000",
              color: "#FFFFFF",
              fontSize: "15px",
              fontWeight: 500,
              boxShadow: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 3,
              direction: "rtl",
              "&:hover": {
                bgcolor: "#222222",
                boxShadow: "none",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                color: "#FFFFFF",
                fontFamily: "inherit",
              }}
            >
              خروج از حساب کاربری
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LogoutSvg color="#FFFFFF" />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
