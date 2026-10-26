"use client";
import React from "react";
import { Box } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

/**
 * QuestionStageProgress renders the top sequence of stage dots connected by dashed lines
 * as designed in Figma State A (Desktop & Mobile).
 */
export default function QuestionStageProgress({
  totalStages = 2,
  currentStage = 1,
  sx = {},
}) {
  const shouldReduceMotion = useReducedMotion();
  // Dynamic step count from actual question data (minimum 1)
  const stagesCount = Math.max(Number(totalStages) || 1, 1);

  // Adapt container width depending on total step count so 2 or 3 steps don't overstretch
  const containerMaxWidth =
    stagesCount <= 2
      ? { xs: "180px", sm: "220px", md: "260px" }
      : stagesCount === 3
      ? { xs: "240px", sm: "320px", md: "380px" }
      : { xs: "300px", sm: "440px", md: "500px" };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        direction: "rtl",
        userSelect: "none",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: containerMaxWidth,
          width: "100%",
          justifyContent: "space-between",
          transition: "max-width 0.3s ease",
        }}
      >
        {Array.from({ length: stagesCount }).map((_, index) => {
          const stepNum = index + 1;
          const isDoneOrActive = stepNum <= currentStage;
          const isNextDone = stepNum < currentStage;

          return (
            <React.Fragment key={index}>
              {/* Dot Circle */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: stepNum === currentStage ? [1, 1.2, 1] : 1,
                      }
                }
                transition={{ duration: 0.3 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Box
                  sx={{
                    width: { xs: 12, sm: 15 },
                    height: { xs: 12, sm: 15 },
                    borderRadius: "50%",
                    bgcolor: isDoneOrActive
                      ? "var(--activeBG, #462BEF)"
                      : "transparent",
                    border: isDoneOrActive
                      ? "none"
                      : "1.8px solid var(--border, #D1D1D6)",
                    boxShadow:
                      stepNum === currentStage
                        ? "0 0 0 4px rgba(70, 43, 239, 0.2)"
                        : "none",
                    transition: "all 0.25s ease",
                  }}
                />
              </motion.div>

              {/* Dashed Connector Line */}
              {index < stagesCount - 1 && (
                <Box
                  sx={{
                    flex: 1,
                    mx: { xs: 0.8, sm: 1.5 },
                    borderTop: `2px dashed ${
                      isNextDone
                        ? "var(--activeBG, #462BEF)"
                        : "var(--border, #D1D1D6)"
                    }`,
                    height: 0,
                    transition: "border-color 0.25s ease",
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </Box>
    </Box>
  );
}
