"use client";
import React from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import { InlineMath } from "react-katex";
import { useTheme } from "@/app/theme/ThemeContext";

/**
 * LegalNavigation provides sticky/top dual-section switcher for #rules and #privacy
 * plus fast article reference pills.
 */
export default function LegalNavigation({
  activeAnchor = "rules",
  onSelectAnchor,
  sections = [],
}) {
  const { isDarkMode } = useTheme();

  return (
    <Box
      component="nav"
      aria-label="فهرست بخش‌های حقوقی"
      sx={{
        width: "100%",
        maxWidth: "880px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        mb: { xs: "50px", sm: "70px", md: "90px" },
        direction: "rtl",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Primary Section Switcher (Rules vs Privacy) */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          p: "6px",
          borderRadius: "18px",
          backgroundColor: "var(--notActiveBG)",
          border: "1px solid",
          borderColor: "var(--border)",
          boxShadow: isDarkMode
            ? "0 4px 20px rgba(0,0,0,0.3)"
            : "0 4px 16px rgba(0,0,0,0.03)",
        }}
      >
        {sections.map((sec) => {
          const isActive = activeAnchor === sec.id;
          return (
            <ButtonBase
              key={sec.id}
              onClick={() => onSelectAnchor(sec.id)}
              sx={{
                flex: 1,
                py: { xs: "12px", sm: "14px" },
                px: { xs: "8px", sm: "16px" },
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                backgroundColor: isActive
                  ? "var(--activeBG)"
                  : "transparent",
                color: isActive ? "#FFFFFF" : "var(--primary-text)",
                boxShadow: isActive
                  ? "0 4px 14px rgba(70, 43, 239, 0.35)"
                  : "none",
                "&:hover": {
                  backgroundColor: isActive
                    ? "var(--activeBG)"
                    : isDarkMode
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.03)",
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  direction: "ltr",
                  display: "inline-block",
                  fontSize: "14px",
                  fontWeight: 900,
                  opacity: isActive ? 1 : 0.85,
                }}
              >
                <InlineMath math={sec.symbol} />
              </Box>
              <Typography
                component="span"
                sx={{
                  fontFamily: "IRANYekanX, sans-serif",
                  fontSize: { xs: "13px", sm: "15px" },
                  fontWeight: isActive ? 800 : 600,
                  color: "inherit",
                  whiteSpace: "nowrap",
                }}
              >
                {sec.title}
              </Typography>
            </ButtonBase>
          );
        })}
      </Box>

      {/* Quick Jump Articles Row */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "8px",
          width: "100%",
        }}
      >
        {sections.flatMap((sec) =>
          sec.articles.map((art) => (
            <ButtonBase
              key={art.id}
              onClick={() => onSelectAnchor(art.id)}
              sx={{
                px: "12px",
                py: "5px",
                borderRadius: "10px",
                fontSize: "12px",
                fontWeight: 600,
                backgroundColor: isDarkMode
                  ? "rgba(255, 255, 255, 0.04)"
                  : "rgba(0, 0, 0, 0.03)",
                border: "1px solid",
                borderColor: "var(--border)",
                color: "var(--secondary-text)",
                transition: "all 0.2s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                "&:hover": {
                  color: "var(--activeBG)",
                  borderColor: "var(--activeBG)",
                  backgroundColor: isDarkMode
                    ? "rgba(70, 43, 239, 0.12)"
                    : "rgba(70, 43, 239, 0.06)",
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  direction: "ltr",
                  display: "inline-block",
                  fontSize: "11px",
                }}
              >
                <InlineMath math={art.symbol} />
              </Box>
              <Typography
                component="span"
                sx={{
                  fontFamily: "IRANYekanX, sans-serif",
                  fontSize: "12px",
                }}
              >
                {art.label}
              </Typography>
            </ButtonBase>
          ))
        )}
      </Box>
    </Box>
  );
}
