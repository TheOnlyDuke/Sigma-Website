"use client";
import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@/app/theme/ThemeContext";
import presets from "./presets";

/**
 * EditorialSealSvg renders a minimal, sophisticated legal/publishing circular crest watermark.
 */
function EditorialSealSvg({ strokeColor, textColor, width = 120, height = 120 }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 140 140"
      sx={{ width: "100%", height: "100%", opacity: 0.85 }}
    >
      {/* Outer concentric hairline boundary */}
      <circle cx="70" cy="70" r="64" fill="none" stroke={strokeColor} strokeWidth="1.2" />
      <circle cx="70" cy="70" r="58" fill="none" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="3 3" />
      <circle cx="70" cy="70" r="42" fill="none" stroke={strokeColor} strokeWidth="1" />

      {/* Central Section Symbol */}
      <text
        x="70"
        y="80"
        textAnchor="middle"
        fill={textColor}
        fontSize="34"
        fontFamily="'Times New Roman', Times, Georgia, serif"
        fontWeight="bold"
      >
        §
      </text>

      {/* Marginal Registration Marks */}
      <line x1="6" y1="70" x2="16" y2="70" stroke={strokeColor} strokeWidth="1.2" />
      <line x1="124" y1="70" x2="134" y2="70" stroke={strokeColor} strokeWidth="1.2" />
      <line x1="70" y1="6" x2="70" y2="16" stroke={strokeColor} strokeWidth="1.2" />
      <line x1="70" y1="124" x2="70" y2="134" stroke={strokeColor} strokeWidth="1.2" />

      {/* Micro Archival Text */}
      <text x="70" y="32" textAnchor="middle" fill={textColor} fontSize="6.5" fontFamily="monospace" letterSpacing="0.1em">
        CODEX · SIGMA
      </text>
      <text x="70" y="116" textAnchor="middle" fill={textColor} fontSize="6" fontFamily="monospace" letterSpacing="0.1em">
        1404-1405 · ATTEST
      </text>
    </Box>
  );
}

/**
 * ColumnGuideSvg renders a minimal document column ruler and registration stamp.
 */
function ColumnGuideSvg({ strokeColor, textColor }) {
  return (
    <Box component="svg" viewBox="0 0 150 120" sx={{ width: "100%", height: "100%", opacity: 0.8 }}>
      <line x1="15" y1="10" x2="15" y2="110" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 3" />
      <line x1="135" y1="10" x2="135" y2="110" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 3" />
      <rect x="25" y="20" width="100" height="75" fill="none" stroke={strokeColor} strokeWidth="1" />
      <line x1="25" y1="36" x2="125" y2="36" stroke={strokeColor} strokeWidth="0.8" />
      <text x="32" y="31" fill={textColor} fontSize="7" fontFamily="monospace" letterSpacing="0.08em">
        ¶ REGISTRY // 04.COL
      </text>
      <text x="32" y="52" fill={textColor} fontSize="7.5" fontFamily="monospace">
        § ART.INDEX ∷ 1404
      </text>
      <text x="32" y="66" fill={textColor} fontSize="7" fontFamily="monospace" opacity="0.8">
        Ref: Formal Documentation
      </text>
      <text x="32" y="80" fill={textColor} fontSize="6.5" fontFamily="monospace" opacity="0.7">
        [⌖ REGISTRATION: 0.12mm]
      </text>
    </Box>
  );
}

/**
 * PageBackground
 * Reusable, theme-aware page background engine for the project.
 * Renders full-bleed across the entire width and height of the page container,
 * positioned behind page content without interfering with sticky headers or the solid footer.
 *
 * @param {string} preset - Identifier of visual preset (defaults to "legal")
 * @param {number} opacityMultiplier - Optional global opacity scaling factor (default: 1.0)
 * @param {string} density - "sparse" | "normal" | "dense" (default: "normal")
 * @param {object} sx - MUI style overrides
 */
export default function PageBackground({
  preset = "legal",
  opacityMultiplier = 1.0,
  density = "normal",
  sx,
  className,
}) {
  const { isDarkMode } = useTheme();

  // Load configured preset definition with safe fallback
  const config = presets[preset] || presets.legal;
  const modeKey = isDarkMode ? "dark" : "light";
  const tokens = config.themeTokens[modeKey] || config.themeTokens.light;

  return (
    <Box
      aria-hidden="true"
      className={className}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        userSelect: "none",
        overflow: "hidden",
        zIndex: 0,
        opacity: opacityMultiplier,
        contain: "strict",
        ...sx,
      }}
    >
      {/* =========================================================================
          LAYER 1: Full-Bleed Continuous Drafting & Editorial Layout Grid
         ========================================================================= */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, ${tokens.gridPrimary} 1px, transparent 1px),
            linear-gradient(to bottom, ${tokens.gridPrimary} 1px, transparent 1px),
            linear-gradient(to right, ${tokens.gridSecondary} 1px, transparent 1px),
            linear-gradient(to bottom, ${tokens.gridSecondary} 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px, 120px 120px, 24px 24px, 24px 24px",
        }}
      />

      {/* =========================================================================
          LAYER 2: Outer Marginal Precision Guides & Measurement Tick Marks
         ========================================================================= */}
      {/* Left Margin Guide Rail */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: { xs: "10px", sm: "24px", md: "40px" },
          width: "2px",
          borderLeft: `1px dashed ${tokens.strokeFaint}`,
          backgroundImage: `repeating-linear-gradient(to bottom, ${tokens.stroke} 0px, ${tokens.stroke} 8px, transparent 8px, transparent 80px)`,
          opacity: 0.85,
        }}
      />

      {/* Right Margin Guide Rail */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: { xs: "10px", sm: "24px", md: "40px" },
          width: "2px",
          borderRight: `1px dashed ${tokens.strokeFaint}`,
          backgroundImage: `repeating-linear-gradient(to bottom, ${tokens.stroke} 0px, ${tokens.stroke} 8px, transparent 8px, transparent 80px)`,
          opacity: 0.85,
        }}
      />

      {/* Top Left Document Identifier */}
      {config.headerMarkings?.topLeft && (
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
          {config.headerMarkings.topLeft}
        </Box>
      )}

      {/* Top Right Document Identifier */}
      {config.headerMarkings?.topRight && (
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
          {config.headerMarkings.topRight}
        </Box>
      )}

      {/* =========================================================================
          LAYER 3: Structural Watermark Glyphs (§, ¶, Σ)
         ========================================================================= */}
      {config.watermarks?.map((wm, idx) => (
        <Box
          key={idx}
          sx={{
            position: "absolute",
            top: wm.top,
            left: wm.left,
            right: wm.right,
            fontSize: wm.fontSize,
            fontFamily: wm.fontFamily,
            color: tokens.watermark,
            lineHeight: 1,
            transform: `rotate(${wm.rotate || "0deg"})`,
            filter: "blur(0.5px)",
          }}
        >
          {wm.symbol}
        </Box>
      ))}

      {/* =========================================================================
          LAYER 4: Minimal Editorial Vector Outlines (Seals, Column Guides)
         ========================================================================= */}
      {config.editorialFigures?.map((fig, idx) => (
        <Box
          key={idx}
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
          {fig.type === "seal" && (
            <EditorialSealSvg
              strokeColor={tokens.sealStroke}
              textColor={tokens.text}
            />
          )}
          {fig.type === "columnGuide" && (
            <ColumnGuideSvg
              strokeColor={tokens.stroke}
              textColor={tokens.text}
            />
          )}
        </Box>
      ))}

      {/* =========================================================================
          LAYER 5: Distributed Statutory & Academic Publishing Notations
         ========================================================================= */}
      {config.stations?.map((station, idx) => (
        <React.Fragment key={idx}>
          {/* Left Editorial Column Notation */}
          {station.leftContent && (
            <Box
              sx={{
                position: "absolute",
                top: station.top,
                left: { xs: "16px", sm: "32px", md: "52px" },
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                fontFamily: "monospace",
                fontSize: { xs: "10px", md: "11.5px" },
                color: tokens.text,
                direction: "ltr",
                textAlign: "left",
                lineHeight: 1.6,
                maxWidth: { xs: "240px", md: "380px" },
              }}
            >
              <Box sx={{ fontWeight: 700, color: tokens.text }}>
                {station.leftContent.title}
              </Box>
              <Box sx={{ color: tokens.textFaint, fontSize: "10px" }}>
                {station.leftContent.subtitle}
              </Box>
              {station.leftContent.note && (
                <Box
                  sx={{
                    color: tokens.textFaint,
                    fontSize: "9px",
                    letterSpacing: "0.04em",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  {station.leftContent.note}
                </Box>
              )}
            </Box>
          )}

          {/* Right Editorial Column Notation */}
          {station.rightContent && (
            <Box
              sx={{
                position: "absolute",
                top: station.top,
                right: { xs: "16px", sm: "32px", md: "52px" },
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                gap: "4px",
                fontFamily: "monospace",
                fontSize: { xs: "10px", md: "11.5px" },
                color: tokens.text,
                direction: "ltr",
                textAlign: "right",
                lineHeight: 1.6,
                maxWidth: { xs: "240px", md: "380px" },
              }}
            >
              <Box sx={{ fontWeight: 700, color: tokens.text }}>
                {station.rightContent.title}
              </Box>
              <Box sx={{ color: tokens.textFaint, fontSize: "10px" }}>
                {station.rightContent.subtitle}
              </Box>
              {station.rightContent.note && (
                <Box
                  sx={{
                    color: tokens.textFaint,
                    fontSize: "9px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {station.rightContent.note}
                </Box>
              )}
            </Box>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
}

