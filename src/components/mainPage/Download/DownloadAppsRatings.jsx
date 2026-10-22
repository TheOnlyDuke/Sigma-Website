import React from "react";
import { Box, Typography } from "@mui/material";
import SoonStampBadge from "./SoonStampBadge";

export default function DownloadAppsRatings() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: { xs: "10px", sm: "14px" },
        mb: "16px",
        "@media (min-width: 2560px)": {
          gap: "18px",
          mb: "24px",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          sx={{
            width: 24,
            height: 24,
            fill: "none",
            stroke: "var(--activeText)",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "@media (min-width: 2560px)": {
              width: 30,
              height: 30,
            },
          }}
          aria-hidden="true"
        >
          <path d="M12 3v13m0 0l-4.5-4.5m4.5 4.5l4.5-4.5M3.5 20.5h17" />
        </Box>
        <Typography
          component="span"
          sx={{
            fontFamily: "IRANYekanX, sans-serif",
            fontSize: "17px",
            fontWeight: 900,
            lineHeight: 1.8,
            color: "var(--activeText)",
            whiteSpace: "nowrap",
            "@media (min-width: 2560px)": {
              fontSize: "22px",
            },
          }}
        >
          دانلود مستقیم برای :
        </Typography>
      </Box>

      <SoonStampBadge />
    </Box>
  );
}

