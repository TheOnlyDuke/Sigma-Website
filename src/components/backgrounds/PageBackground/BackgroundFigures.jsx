"use client";
import React from "react";
import { Box } from "@mui/material";
import { renderBackgroundFigure } from "./background-elements";

export default function BackgroundFigures({ figures = [], tokens, motionClass = "" }) {
  if (!figures || figures.length === 0) return null;

  return (
    <>
      {figures.map((fig, idx) => (
        <Box
          key={`fig-${idx}`}
          className={motionClass}
          sx={{
            position: "absolute",
            top: fig.top,
            left: fig.left,
            right: fig.right,
            width: fig.width,
            height: fig.height,
            display: { xs: "none", sm: "block" },
          }}
        >
          {renderBackgroundFigure(fig, tokens)}
        </Box>
      ))}
    </>
  );
}

