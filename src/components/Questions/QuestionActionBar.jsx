"use client";
import React from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

/**
 * QuestionActionBar renders the bottom action buttons ("گام بعدی", "سوال بعدی ←")
 * and the decorative SigmaHeartBadge from Figma State A (Desktop & Mobile).
 */
export default function QuestionActionBar({
  onNextStep,
  onNextQuestion,
  isNextStepDisabled = false,
  isNextQuestionDisabled = false,
  hasNextQuestion = true,
  isLoading = false,
  sx = {},
}) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        direction: "rtl",
        pt: { xs: 2.5, sm: 3.5 },
        boxSizing: "border-box",
        ...sx,
      }}
    >
      {/* Action Buttons Centered */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 1.5, sm: 2.5 },
          flexWrap: "wrap",
        }}
      >
        {/* Next Step ("گام بعدی") Button */}
        <Button
          variant="contained"
          onClick={onNextStep}
          disabled={isNextStepDisabled || isLoading}
          sx={{
            bgcolor: "#000000",
            color: "#FFFFFF",
            borderRadius: "12px",
            px: { xs: 3, sm: 5 },
            py: { xs: 1.2, sm: 1.4 },
            fontSize: { xs: "15px", sm: "16px" },
            fontWeight: 800,
            fontFamily: "inherit",
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#222222",
              boxShadow: "none",
            },
            "&:disabled": {
              bgcolor: "rgba(0, 0, 0, 0.12)",
              color: "rgba(0, 0, 0, 0.26)",
            },
          }}
        >
          گام بعدی
        </Button>

        {/* Next Question ("سوال بعدی ←") Button */}
        <Button
          variant="contained"
          onClick={onNextQuestion}
          disabled={isNextQuestionDisabled || isLoading}
          endIcon={
            <ArrowBackIcon
              sx={{
                fontSize: { xs: "18px", sm: "20px" },
                mr: 0.5,
                ml: -0.5,
              }}
            />
          }
          sx={{
            bgcolor: "#000000",
            color: "#FFFFFF",
            borderRadius: "12px",
            px: { xs: 2.5, sm: 4 },
            py: { xs: 1.2, sm: 1.4 },
            fontSize: { xs: "15px", sm: "16px" },
            fontWeight: 800,
            fontFamily: "inherit",
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#222222",
              boxShadow: "none",
            },
            "&:disabled": {
              bgcolor: "rgba(0, 0, 0, 0.12)",
              color: "rgba(0, 0, 0, 0.26)",
            },
          }}
        >
          {hasNextQuestion ? "سوال بعدی" : "پایان آزمون"}
        </Button>
      </Box>
    </Box>
  );
}
