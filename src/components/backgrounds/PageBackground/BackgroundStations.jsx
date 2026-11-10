"use client";
import React from "react";
import { Box } from "@mui/material";

export default function BackgroundStations({ stations = [], tokens }) {
  if (!stations || stations.length === 0) return null;

  return (
    <>
      {stations.map((station, idx) => (
        <React.Fragment key={`station-${idx}`}>
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
    </>
  );
}

