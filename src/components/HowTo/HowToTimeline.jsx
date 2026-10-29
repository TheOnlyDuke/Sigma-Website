"use client";
import React from "react";
import { Box } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

/**
 * HowToTimeline renders a smooth animated vertical connector between consecutive tutorial steps.
 */
export default function HowToTimeline({ nextStepNumber = 1, accentColor = "#462BEF" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Box
      aria-hidden="true"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: "12px", md: "16px" },
        userSelect: "none",
      }}
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
        >
          {/* Top connecting segment */}
          <Box
            sx={{
              width: "2px",
              height: { xs: "24px", md: "32px" },
              background: `linear-gradient(180deg, transparent 0%, ${accentColor} 100%)`,
              opacity: 0.6,
            }}
          />

          {/* Centered Node Pill */}
          <Box
            sx={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              backgroundColor: "rgba(128, 128, 128, 0.08)",
              border: `2px solid ${accentColor}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
              fontWeight: 900,
              color: accentColor,
              boxShadow: `0 0 12px ${accentColor}40`,
            }}
          >
            ↓
          </Box>

          {/* Bottom connecting segment */}
          <Box
            sx={{
              width: "2px",
              height: { xs: "24px", md: "32px" },
              background: `linear-gradient(180deg, ${accentColor} 0%, transparent 100%)`,
              opacity: 0.6,
            }}
          />
        </Box>
      </motion.div>
    </Box>
  );
}
