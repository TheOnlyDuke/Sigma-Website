"use client";
import React from "react";
import { Box } from "@mui/material";

/**
 * SigmaHeartBadge renders the decorative Sigma formula with a red heart
 * as seen in the Figma design (bottom-left corner of the question card).
 * Form: sum_{i=0}^{5 <heart>}
 */
export default function SigmaHeartBadge({ sx = {} }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        lineHeight: 1,
        ...sx,
      }}
    >
      {/* Top superscript: 5 with red heart */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "2px",
          fontSize: "11px",
          fontWeight: 700,
          color: "var(--primary-text)",
          mb: "-1px",
        }}
      >
        <span>5</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="#FF002F"
          style={{ display: "inline-block" }}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </Box>

      {/* Sigma Symbol */}
      <Box
        sx={{
          fontFamily: "'Times New Roman', Times, serif, 'Satisfy'",
          fontSize: "26px",
          fontWeight: 900,
          lineHeight: "22px",
          color: "var(--primary-text)",
        }}
      >
        ∑
      </Box>

      {/* Subscript: i = 0 */}
      <Box
        sx={{
          fontSize: "10px",
          fontWeight: 600,
          color: "var(--primary-text)",
          mt: "-1px",
        }}
      >
        i = 0
      </Box>
    </Box>
  );
}
