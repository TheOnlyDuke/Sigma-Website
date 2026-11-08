"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@/app/theme/ThemeContext";

/**
 * LegalBlueprintPlate presents legal visual assets inside a mathematically-themed
 * technical drafting container with coordinate crosshairs, grid lines, and adaptive styling.
 */
export default function LegalBlueprintPlate({
  imageSrc,
  alt = "تصویر مستندات حقوقی سیگما",
  accentColor = "#462BEF",
  coordinateTag = "\\mathbb{R}^2 \\times \\Sigma",
}) {
  const { isDarkMode } = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: { xs: "100%", md: "480px" },
        aspectRatio: { xs: "16 / 11", sm: "16 / 10" },
        borderRadius: "20px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: "16px", sm: "24px" },
        backgroundColor: isDarkMode
          ? "rgba(17, 21, 28, 0.95)"
          : "rgba(248, 250, 252, 0.95)",
        border: isDarkMode
          ? "1px solid rgba(255, 255, 255, 0.12)"
          : "1px solid rgba(15, 23, 42, 0.12)",
        boxShadow: isDarkMode
          ? "0 10px 30px -10px rgba(0, 0, 0, 0.7)"
          : "0 10px 30px -10px rgba(70, 43, 239, 0.08)",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: accentColor,
        },
      }}
    >
      {/* Subtle Coordinate Grid Pattern Background */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: isDarkMode
            ? `radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)`
            : `radial-gradient(rgba(15, 23, 42, 0.07) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          pointerEvents: "none",
        }}
      />

      {/* Ambient Colored Backlight Aura */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          backgroundColor: accentColor,
          opacity: isDarkMode ? 0.22 : 0.12,
          filter: "blur(50px)",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Technical Blueprint Corner Crosshairs */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: 8,
          left: 10,
          fontFamily: "monospace",
          fontSize: "10px",
          color: isDarkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)",
          userSelect: "none",
        }}
      >
        ┌ (0, 0)
      </Box>
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: 8,
          right: 10,
          fontFamily: "monospace",
          fontSize: "10px",
          color: isDarkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)",
          userSelect: "none",
        }}
      >
        ┐
      </Box>
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          bottom: 8,
          left: 10,
          fontFamily: "monospace",
          fontSize: "10px",
          color: isDarkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)",
          userSelect: "none",
        }}
      >
        └
      </Box>
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          bottom: 8,
          right: 10,
          fontFamily: "monospace",
          fontSize: "10px",
          color: isDarkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)",
          userSelect: "none",
        }}
      >
        ┘
      </Box>

      {/* Technical Spec Badge */}
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          px: "10px",
          py: "2px",
          borderRadius: "6px",
          backgroundColor: isDarkMode
            ? "rgba(255, 255, 255, 0.06)"
            : "rgba(0, 0, 0, 0.05)",
          border: isDarkMode
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "1px solid rgba(0, 0, 0, 0.08)",
          fontFamily: "monospace",
          fontSize: "11px",
          color: isDarkMode ? "#94A3B8" : "#475569",
          userSelect: "none",
          zIndex: 2,
        }}
      >
        FIG. {coordinateTag}
      </Box>

      {/* The Cleaned Illustration Asset */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          width={500}
          height={320}
          priority
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "92%",
            maxHeight: "88%",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
}

