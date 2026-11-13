"use client";
import React, { useMemo } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@/app/theme/ThemeContext";
import { resolvePreset } from "./background-presets";
import BackgroundGrid from "./BackgroundGrid";
import BackgroundWatermarks from "./BackgroundWatermarks";
import BackgroundFigures from "./BackgroundFigures";
import BackgroundFormulas from "./BackgroundFormulas";
import BackgroundMathSymbols from "./BackgroundMathSymbols";
import BackgroundStations from "./BackgroundStations";
import "./background.css";

export default function PageBackground({
  preset = "legal",
  variant,
  density = "normal",
  opacityMultiplier = 1.0,
  animate = false,
  sx,
  className,
}) {
  const { isDarkMode } = useTheme();

  const activePresetKey = variant || preset;
  const config = useMemo(
    () => resolvePreset(activePresetKey, density),
    [activePresetKey, density]
  );

  const modeKey = isDarkMode ? "dark" : "light";
  const tokens = config.themeTokens?.[modeKey] || config.themeTokens?.light;
  const motionClass = animate ? "bg-subtle-drift" : "";

  return (
    <Box
      aria-hidden="true"
      className={`page-background-root ${className || ""}`.trim()}
      sx={{
        opacity: opacityMultiplier,
        ...sx,
      }}
    >
      <BackgroundGrid
        tokens={tokens}
        headerMarkings={config.headerMarkings}
      />

      <BackgroundWatermarks
        watermarks={config.watermarks}
        color={tokens.watermark}
        motionClass={motionClass}
      />

      <BackgroundFigures
        figures={config.editorialFigures}
        tokens={tokens}
        motionClass={motionClass}
      />

      <BackgroundFormulas
        formulas={config.formulas}
        tokens={tokens}
        motionClass={motionClass}
      />

      <BackgroundMathSymbols
        symbols={config.mathSymbols}
        tokens={tokens}
        motionClass={motionClass}
      />

      <BackgroundStations
        stations={config.stations}
        tokens={tokens}
      />
    </Box>
  );
}
