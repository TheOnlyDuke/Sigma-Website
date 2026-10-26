"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { motion, useReducedMotion } from "framer-motion";

const PERSIAN_NUMBERS = ["۱", "۲", "۳", "۴"];

/**
 * QuestionOptionCard renders an individual answer option
 * matching the Figma State A specifications (Persian numeral on right, math on left/center,
 * solid purple when selected, pure white text).
 */
export default function QuestionOptionCard({
  optionNumber = 1,
  latex = "",
  isSelected = false,
  onSelect,
  disabled = false,
}) {
  const shouldReduceMotion = useReducedMotion();
  const persianDigit = PERSIAN_NUMBERS[optionNumber - 1] || optionNumber;

  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect?.(optionNumber);
    }
  };

  return (
    <motion.div
      whileHover={
        disabled || shouldReduceMotion
          ? {}
          : {
              scale: isSelected ? 1 : 1.01,
              transition: { duration: 0.15 },
            }
      }
      whileTap={
        disabled || shouldReduceMotion
          ? {}
          : {
              scale: 0.99,
              transition: { duration: 0.1 },
            }
      }
      style={{ width: "100%" }}
    >
      <Box
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-pressed={isSelected}
        aria-label={`گزینه ${persianDigit}`}
        onClick={() => !disabled && onSelect?.(optionNumber)}
        onKeyDown={handleKeyDown}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          minHeight: { xs: "72px", sm: "82px" },
          px: { xs: 2.5, sm: 3.5 },
          py: { xs: 1.5, sm: 2 },
          borderRadius: { xs: "14px", sm: "18px" },
          border: "1px solid",
          borderColor: isSelected
            ? "var(--activeBG, #462BEF)"
            : (theme) => (theme.palette.mode === "dark" ? "#333336" : "#E2E2E2"),
          bgcolor: isSelected
            ? "var(--activeBG, #462BEF)"
            : (theme) => (theme.palette.mode === "dark" ? "#222225" : "#FFFFFF"),
          boxShadow: isSelected
            ? "0 4px 14px rgba(70, 43, 239, 0.25)"
            : (theme) =>
                theme.palette.mode === "dark"
                  ? "none"
                  : "0 1px 4px rgba(0, 0, 0, 0.02)",
          cursor: disabled ? "not-allowed" : "pointer",
          direction: "rtl",
          boxSizing: "border-box",
          transition: "all 0.2s ease",
          outline: "none",
          "&:focus-visible": {
            boxShadow: "0 0 0 3px rgba(70, 43, 239, 0.35)",
          },
          "&:hover": {
            borderColor: isSelected
              ? "var(--activeBG, #462BEF)"
              : "var(--primary-text)",
            bgcolor: isSelected
              ? "var(--activeBG, #462BEF)"
              : (theme) =>
                  theme.palette.mode === "dark"
                    ? "#28282B"
                    : "rgba(70, 43, 239, 0.02)",
          },
          // Color overrides for KaTeX when selected
          ...(isSelected && {
            "& .katex *": {
              color: "#FFFFFF !important",
            },
          }),
        }}
      >
        {/* Persian Digit Badge on the right in RTL */}
        <Typography
          sx={{
            fontFamily: "IRANYekanX, sans-serif",
            fontSize: { xs: "17px", sm: "20px" },
            fontWeight: 800,
            color: isSelected ? "#FFFFFF" : "var(--primary-text)",
            minWidth: "24px",
            textAlign: "center",
            userSelect: "none",
            ml: 1.5,
          }}
        >
          {persianDigit}
        </Typography>

        {/* KaTeX formula on the left in RTL */}
        <Box
          sx={{
            direction: "ltr",
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflowX: "auto",
            overflowY: "visible",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            py: { xs: 0.8, sm: 1 },
            px: 1,
            "& .katex-display": {
              margin: 0,
              padding: "4px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            "& .katex": {
              fontSize: { xs: "18px", sm: "20px", md: "22px" },
              lineHeight: 1.45,
              color: isSelected ? "#FFFFFF" : "var(--primary-text)",
              display: "inline-flex",
              alignItems: "center",
            },
            "& .katex-html": {
              overflow: "visible",
              display: "inline-flex",
              alignItems: "center",
            },
          }}
        >
          {latex ? (
            <BlockMath math={latex} />
          ) : (
            <Typography
              sx={{
                color: isSelected ? "#FFFFFF" : "var(--secondary-text)",
                fontFamily: "inherit",
              }}
            >
              -
            </Typography>
          )}
        </Box>
      </Box>
    </motion.div>
  );
}
