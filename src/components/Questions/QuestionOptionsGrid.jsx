"use client";
import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import QuestionOptionCard from "./QuestionOptionCard";

/**
 * QuestionOptionsGrid arranges the 4 options:
 * - Desktop: 2-column x 2-row grid matching Figma DSK (Col 1: Opt 1, Opt 2; Col 2: Opt 3, Opt 4).
 * - Mobile: 1-column vertical stack matching Figma MB.
 */
export default function QuestionOptionsGrid({
  options = ["", "", "", ""],
  selectedOption = null,
  onSelectOption,
  disabled = false,
  sx = {},
}) {
  return (
    <Box sx={{ width: "100%", direction: "rtl", ...sx }}>
      {/* Desktop 2-column layout (md and up) */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Grid container spacing={2.5}>
          {/* Column 1 (Right in RTL): Options 1 and 2 */}
          <Grid size={{ sm: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <QuestionOptionCard
                optionNumber={1}
                latex={options[0]}
                isSelected={selectedOption === 1}
                onSelect={onSelectOption}
                disabled={disabled}
              />
              <QuestionOptionCard
                optionNumber={2}
                latex={options[1]}
                isSelected={selectedOption === 2}
                onSelect={onSelectOption}
                disabled={disabled}
              />
            </Box>
          </Grid>

          {/* Column 2 (Left in RTL): Options 3 and 4 */}
          <Grid size={{ sm: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <QuestionOptionCard
                optionNumber={3}
                latex={options[2]}
                isSelected={selectedOption === 3}
                onSelect={onSelectOption}
                disabled={disabled}
              />
              <QuestionOptionCard
                optionNumber={4}
                latex={options[3]}
                isSelected={selectedOption === 4}
                onSelect={onSelectOption}
                disabled={disabled}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Mobile & Tablet 1-column layout (below md) */}
      <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: 1.5 }}>
        {options.map((latex, index) => (
          <QuestionOptionCard
            key={index + 1}
            optionNumber={index + 1}
            latex={latex}
            isSelected={selectedOption === index + 1}
            onSelect={onSelectOption}
            disabled={disabled}
          />
        ))}
      </Box>
    </Box>
  );
}
