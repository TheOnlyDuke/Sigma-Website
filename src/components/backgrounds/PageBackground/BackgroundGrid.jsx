"use client";
import React from "react";
import { Box } from "@mui/material";

export default function BackgroundGrid({ tokens, headerMarkings }) {
  return (
    <>
      <Box
        className="bg-grid-layer"
        sx={{
          "--bg-grid-primary": tokens.gridPrimary,
          "--bg-grid-secondary": tokens.gridSecondary,
        }}
      />

      <Box
        className="bg-rail-left"
        sx={{
          left: { xs: "10px", sm: "24px", md: "40px" },
          "--bg-stroke": tokens.stroke,
          "--bg-stroke-faint": tokens.strokeFaint,
        }}
      />

      <Box
        className="bg-rail-right"
        sx={{
          right: { xs: "10px", sm: "24px", md: "40px" },
          "--bg-stroke": tokens.stroke,
          "--bg-stroke-faint": tokens.strokeFaint,
        }}
      />

      {headerMarkings?.topLeft && (
        <Box
          sx={{
            position: "absolute",
            top: "16px",
            left: { xs: "16px", md: "48px" },
            fontFamily: "monospace",
            fontSize: "11px",
            color: tokens.textFaint,
            direction: "ltr",
            letterSpacing: "0.1em",
            display: { xs: "none", sm: "block" },
          }}
        >
          {headerMarkings.topLeft}
        </Box>
      )}

      {headerMarkings?.topRight && (
        <Box
          sx={{
            position: "absolute",
            top: "16px",
            right: { xs: "16px", md: "48px" },
            fontFamily: "monospace",
            fontSize: "11px",
            color: tokens.textFaint,
            direction: "ltr",
            letterSpacing: "0.1em",
            display: { xs: "none", sm: "block" },
          }}
        >
          {headerMarkings.topRight}
        </Box>
      )}
    </>
  );
}

