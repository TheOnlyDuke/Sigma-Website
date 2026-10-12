"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const HomeSvg = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V9.5Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LogoutSvg = ({ color = "#FFFFFF" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M17 16L21 12M21 12L17 8M21 12H9M9 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H9"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function DashNavActions({ onLogout, compact = false }) {
  const height = compact ? "52px" : "56px";
  const btnRadius = compact ? "12px" : "14px";
  const logoutRadius = compact ? "10px" : "14px";
  const fontSize = compact ? "14px" : "15px";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: compact ? 1.5 : "14px",
        width: "100%",
        direction: "rtl",
      }}
    >
      <Link href="/" style={{ textDecoration: "none", width: "100%" }}>
        <Button
          variant="text"
          fullWidth
          sx={{
            height,
            borderRadius: btnRadius,
            border: "1px solid var(--border)",
            bgcolor: "transparent",
            px: 2.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            direction: "rtl",
            "&:hover": {
              bgcolor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          <Typography
            sx={{
              fontSize,
              fontWeight: 500,
              color: "var(--primary-text)",
              fontFamily: "inherit",
            }}
          >
            بازگشت به صفحه اصلی
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <HomeSvg color="var(--primary-text)" />
          </Box>
        </Button>
      </Link>

      <Button
        variant="contained"
        fullWidth
        onClick={onLogout}
        sx={{
          height,
          borderRadius: logoutRadius,
          bgcolor: "#000000",
          px: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "none",
          direction: "rtl",
          "&:hover": {
            bgcolor: "#222222",
            boxShadow: "none",
          },
        }}
      >
        <Typography
          sx={{
            fontSize,
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
  );
}
