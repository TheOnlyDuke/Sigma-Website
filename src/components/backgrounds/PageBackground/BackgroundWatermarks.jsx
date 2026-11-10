"use client";
import React from "react";
import { Box } from "@mui/material";

export default function BackgroundWatermarks({ watermarks = [], color, motionClass = "" }) {
  if (!watermarks || watermarks.length === 0) return null;

  return (
    <>
      {watermarks.map((wm, idx) => (
        <Box
          key={`wm-${idx}`}
          className={`bg-watermark-glyph ${motionClass}`.trim()}
          sx={{
            top: wm.top,
            left: wm.left,
            right: wm.right,
            fontSize: wm.fontSize,
            fontFamily: wm.fontFamily || "inherit",
            color,
            transform: `rotate(${wm.rotate || "0deg"})`,
          }}
        >
          {wm.symbol}
        </Box>
      ))}
    </>
  );
}

