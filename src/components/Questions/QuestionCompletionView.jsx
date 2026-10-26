"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import TrophyIcon from "./TrophyIcon";

const toPersianDigits = (num) => {
  return String(num).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
};

/**
 * QuestionCompletionView implements State B (Game Completed)
 * matching Figma DSK - Question Page - Finale.png & MB - Question Page - X2 - Finale.png
 */
export default function QuestionCompletionView({
  totalQuestions = 4,
  correctCount = 4,
  wrongCount = 0,
  score = 65,
  elapsedMinutes = 2,
  topicTitle = "انتگرال",
  onRestart,
  onNextTopic,
  hasNextTopic = false,
}) {
  const router = useRouter();

  const totalAnswered = Math.max(correctCount + wrongCount, 1);
  const correctPercent = Math.max(Math.round((correctCount / totalAnswered) * 100), 5);
  const wrongPercent = 100 - correctPercent;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "680px",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        direction: "rtl",
        py: { xs: 3, sm: 6 },
        px: { xs: 2, sm: 4 },
        boxSizing: "border-box",
      }}
    >
      {/* Trophy graphic shown on mobile matching Figma MB - Question Page - X2 - Finale.png */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          justifyContent: "center",
          mb: { xs: 2.5, sm: 3 },
        }}
      >
        <TrophyIcon size={76} />
      </Box>

      {/* Main Title */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "IRANYekanX, sans-serif",
          fontSize: { xs: "28px", sm: "36px", md: "44px" },
          fontWeight: 950,
          color: "var(--primary-text)",
          mb: 1.5,
          letterSpacing: "-0.5px",
        }}
      >
        فوق‌العاده بود !
      </Typography>

      {/* Subtitle with dynamic statistics */}
      <Typography
        sx={{
          fontFamily: "inherit",
          fontSize: { xs: "15px", sm: "17px" },
          fontWeight: 500,
          color: "var(--secondary-text)",
          mb: { xs: 4, sm: 5 },
        }}
      >
        {toPersianDigits(totalQuestions)} سوال {topicTitle ? `مبحث ${topicTitle}` : ""} را در{" "}
        {toPersianDigits(Math.max(elapsedMinutes, 1))} دقیقه جواب دادید
      </Typography>

      {/* Results Header: Title & Legend */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 1.5,
          mb: 1.5,
          px: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: "inherit",
            fontSize: { xs: "15px", sm: "17px" },
            fontWeight: 800,
            color: "var(--primary-text)",
          }}
        >
          نتایج آزمون شما
        </Typography>

        {/* Legend */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
          {/* Correct Legend */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: "var(--activeBG, #462BEF)",
              }}
            />
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--secondary-text)",
              }}
            >
              جواب درست
            </Typography>
          </Box>

          {/* Incorrect Legend */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: "var(--redBG, #FF002F)",
              }}
            />
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--secondary-text)",
              }}
            >
              جواب غلط
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Segmented Pill Bar (Purple / Red) */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "52px", sm: "58px" },
          borderRadius: "30px",
          overflow: "hidden",
          display: "flex",
          direction: "rtl",
          mb: { xs: 3, sm: 4 },
        }}
      >
        {/* Correct Segment (Purple #462BEF) */}
        {correctCount > 0 && (
          <Box
            sx={{
              width: wrongCount > 0 ? `${correctPercent}%` : "100%",
              bgcolor: "var(--activeBG, #462BEF)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: { xs: "17px", sm: "20px" },
              transition: "width 0.4s ease",
            }}
          >
            {toPersianDigits(correctCount)}
          </Box>
        )}

        {/* Incorrect Segment (Red #FF002F) */}
        {wrongCount > 0 && (
          <Box
            sx={{
              width: correctCount > 0 ? `${wrongPercent}%` : "100%",
              bgcolor: "var(--redBG, #FF002F)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: { xs: "17px", sm: "20px" },
              transition: "width 0.4s ease",
            }}
          >
            {toPersianDigits(wrongCount)}
          </Box>
        )}
      </Box>

      {/* Points Earned Card matching Figma Finale gray box */}
      <Box
        sx={{
          width: "100%",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#262626" : "#EFEFEF",
          borderRadius: "22px",
          py: { xs: 3, sm: 4.5 },
          px: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mb: { xs: 4, sm: 6 },
        }}
      >
        <Typography
          sx={{
            fontFamily: "IRANYekanX, sans-serif",
            fontSize: { xs: "36px", sm: "44px" },
            fontWeight: 950,
            color: "var(--primary-text)",
            lineHeight: 1.1,
            mb: 1,
          }}
        >
          {toPersianDigits(score)}
        </Typography>

        <Typography
          sx={{
            fontFamily: "inherit",
            fontSize: "15px",
            fontWeight: 600,
            color: "var(--secondary-text)",
          }}
        >
          امتیاز دریافتی
        </Typography>
      </Box>

      {/* Bottom Action Buttons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, sm: 3 },
          width: "100%",
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
      >
        {/* Return to Dashboard / Home */}
        <Button
          variant="contained"
          onClick={() => router.push("/dashboard#topics")}
          sx={{
            bgcolor: "#000000",
            color: "#FFFFFF",
            borderRadius: "14px",
            px: { xs: 4, sm: 5 },
            py: { xs: 1.5, sm: 1.6 },
            fontSize: "16px",
            fontWeight: 800,
            fontFamily: "inherit",
            boxShadow: "none",
            width: { xs: "100%", sm: "auto" },
            "&:hover": {
              bgcolor: "#222222",
              boxShadow: "none",
            },
          }}
        >
          بازگشت به صفحه اصلی
        </Button>

        {/* Restart / Next Challenge */}
        <Button
          variant="contained"
          onClick={onRestart}
          sx={{
            bgcolor: "#000000",
            color: "#FFFFFF",
            borderRadius: "14px",
            px: { xs: 4, sm: 5 },
            py: { xs: 1.5, sm: 1.6 },
            fontSize: "16px",
            fontWeight: 800,
            fontFamily: "inherit",
            boxShadow: "none",
            width: { xs: "100%", sm: "auto" },
            "&:hover": {
              bgcolor: "#222222",
              boxShadow: "none",
            },
          }}
        >
          تکرار آزمون
        </Button>
      </Box>
    </Box>
  );
}
