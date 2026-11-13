"use client";
import React from "react";
import { Box } from "@mui/material";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function BackgroundFormulas({ formulas = [], tokens, motionClass = "" }) {
  if (!formulas || formulas.length === 0) return null;

  return (
    <>
      {formulas.map((item, idx) => (
        <Box
          key={`bg-formula-${idx}`}
          className={`bg-formula-item ${motionClass}`.trim()}
          sx={{
            position: "absolute",
            top: item.top,
            left: item.left,
            right: item.right,
            color: item.faint ? tokens.formulaFaint || tokens.strokeFaint : tokens.formula || tokens.stroke,
            transform: item.rotate ? `rotate(${item.rotate})` : undefined,
            fontSize: item.fontSize || { xs: "18px", sm: "22px", md: "26px" },
            opacity: item.opacity || (item.faint ? tokens.formulaFaintOpacity || 0.3 : tokens.formulaOpacity || 0.48),
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
            direction: "ltr",
            textAlign: item.left ? "left" : "right",
            display: item.hideOnMobile ? { xs: "none", sm: "block" } : "block",
            "& .katex": {
              fontFamily: "KaTeX_Math, 'KaTeX_Main', 'Times New Roman', Times, serif !important",
              color: "inherit",
              lineHeight: 1.2,
            },
            "& .katex *": {
              fontFamily: "inherit !important",
              color: "inherit !important",
              borderColor: "currentColor !important",
            },
            "& .katex-display": {
              margin: 0,
            },
          }}
        >
          {item.displayMode ? (
            <BlockMath math={item.latex} />
          ) : (
            <InlineMath math={item.latex} />
          )}
        </Box>
      ))}
    </>
  );
}
