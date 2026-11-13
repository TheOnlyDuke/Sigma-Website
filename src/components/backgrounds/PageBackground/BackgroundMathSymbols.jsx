"use client";
import React from "react";
import { Box } from "@mui/material";

export default function BackgroundMathSymbols({ symbols = [], tokens, motionClass = "" }) {
  if (!symbols || symbols.length === 0) return null;

  return (
    <>
      {symbols.map((item, idx) => (
        <Box
          key={`bg-symbol-${idx}`}
          className={`bg-math-symbol ${motionClass}`.trim()}
          sx={{
            position: "absolute",
            top: item.top,
            left: item.left,
            right: item.right,
            color: item.faint ? tokens.strokeFaint : tokens.mathSymbol || tokens.stroke,
            fontSize: item.fontSize || { xs: "20px", sm: "26px", md: "32px" },
            fontFamily: item.fontFamily || "'Times New Roman', Times, Georgia, serif",
            transform: item.rotate ? `rotate(${item.rotate})` : undefined,
            opacity: item.opacity || 0.85,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
            lineHeight: 1,
            display: item.hideOnMobile ? { xs: "none", sm: "block" } : "block",
          }}
        >
          {item.symbol}
        </Box>
      ))}
    </>
  );
}
