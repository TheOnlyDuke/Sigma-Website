import React from "react";
import { Box } from "@mui/material";

export default function SoonStampBadge({ sx, label = "به‌زودی" }) {
  return (
    <Box
      component="span"
      role="status"
      aria-label="به‌زودی در دسترس قرار می‌گیرد"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: "10px", sm: "12px" },
        py: { xs: "2px", sm: "3px" },
        border: "2px solid #FF4D4F",
        outline: "1.5px dashed rgba(255, 77, 79, 0.75)",
        outlineOffset: "2px",
        borderRadius: "4px",
        color: "#FF4D4F",
        backgroundColor: "rgba(255, 77, 79, 0.14)",
        fontFamily: "IRANYekanX, sans-serif",
        fontSize: { xs: "12px", sm: "13px" },
        fontWeight: 900,
        lineHeight: 1.5,
        letterSpacing: "0.5px",
        "@media (min-width: 2560px)": {
          px: "16px",
          py: "5px",
          fontSize: "16px",
        },
        transform: "rotate(-6deg)",
        boxShadow:
          "0 0 10px rgba(255, 77, 79, 0.25), inset 0 0 4px rgba(255, 77, 79, 0.15)",
        userSelect: "none",
        whiteSpace: "nowrap",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "rotate(-4deg) scale(1.06)",
          boxShadow: "0 0 16px rgba(255, 77, 79, 0.4)",
        },
        ...sx,
      }}
    >
      {label}
    </Box>
  );
}
