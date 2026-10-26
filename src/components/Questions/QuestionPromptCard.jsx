"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

import { motion, useReducedMotion } from "framer-motion";

/**
 * QuestionPromptCard renders the rounded mathematical statement box
 * from Figma State A (Desktop & Mobile) with a solid smooth gray background
 * and centered math equation.
 */
export default function QuestionPromptCard({
  prefix = "اگر داشته باشیم:",
  latex = "",
  description = "",
  sx = {},
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key={latex}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      style={{ width: "100%" }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#262626" : "#EFEFEF",
          border: (theme) =>
            theme.palette.mode === "dark"
              ? "1px solid #333336"
              : "1px solid #E5E5EA",
          borderRadius: { xs: "18px", sm: "22px" },
          py: { xs: 3, sm: 4, md: 4.5 },
          px: { xs: 2, sm: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          direction: "rtl",
          boxSizing: "border-box",
          ...sx,
        }}
      >
        {/* Intro Text */}
        <Typography
          sx={{
            fontFamily: "inherit",
            fontSize: { xs: "15px", sm: "17px" },
            fontWeight: 600,
            color: "var(--primary-text)",
            mb: { xs: 1.5, sm: 2 },
          }}
        >
          {prefix}
        </Typography>

        {/* KaTeX Math Display */}
        {latex && (
          <Box
            sx={{
              direction: "ltr",
              maxWidth: "100%",
              overflowX: "auto",
              overflowY: "hidden",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
              py: 1,
              px: 1,
              "& .katex-display": {
                margin: 0,
              },
              "& .katex": {
                fontSize: { xs: "22px", sm: "28px", md: "34px" },
                fontFamily: "'Satisfy', cursive, serif",
              },
            }}
          >
            <BlockMath math={latex} />
          </Box>
        )}

        {/* Optional stage description note */}
        {description && (
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: "13px", sm: "14px" },
              color: "var(--secondary-text)",
              mt: 1.5,
              lineHeight: 1.7,
              maxWidth: "600px",
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </motion.div>
  );
}
