"use client";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ReplayIcon from "@mui/icons-material/Replay";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function QuestionCompletionView({
  isAllFinished,
  topicTitle,
  onNextQuestion,
  onRestart,
  hasNext,
}) {
  if (isAllFinished) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 6,
          px: 3,
          width: "100%",
          textAlign: "center",
          gap: 3,
          direction: "rtl",
        }}
      >
        <CheckCircleRoundedIcon
          sx={{ fontSize: 72, color: "var(--secActiveBG)" }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            color: "var(--primary-text)",
            fontSize: { xs: "24px", sm: "32px" },
          }}
        >
          تبریک و آفرین!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "var(--secondary-text)",
            maxWidth: "500px",
            fontSize: "16px",
            lineHeight: 1.8,
          }}
        >
          تمامی سوالات چالش {topicTitle} را با موفقیت و استدلال صحیح به پایان
          رساندید.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center", mt: 2 }}>
          <Button
            variant="contained"
            onClick={onRestart}
            startIcon={<ReplayIcon sx={{ ml: 1, mr: -0.5 }} />}
            sx={{
              height: "48px",
              px: 3,
              borderRadius: "10px",
              bgcolor: "var(--activeBG)",
              color: "#FFFFFF",
              fontWeight: 700,
              "&:hover": {
                bgcolor: "#341ec7",
              },
            }}
          >
            شروع مجدد این مبحث
          </Button>

          <Link href="/dashboard#topics" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              sx={{
                height: "48px",
                px: 3,
                borderRadius: "10px",
                borderColor: "var(--border)",
                color: "var(--primary-text)",
                fontWeight: 700,
                "&:hover": {
                  borderColor: "var(--activeBG)",
                },
              }}
            >
              بازگشت به مباحث داشبورد
            </Button>
          </Link>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 5,
        px: 3,
        width: "100%",
        textAlign: "center",
        gap: 2.5,
        direction: "rtl",
      }}
    >
      <CheckCircleRoundedIcon
        sx={{ fontSize: 64, color: "var(--activeBG)" }}
      />
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          color: "var(--primary-text)",
          fontSize: { xs: "22px", sm: "26px" },
        }}
      >
        آفرین و درود!
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "var(--secondary-text)", fontSize: "15px" }}
      >
        این سوال با موفقیت حل شد. برای ادامه چالش به سوال بعدی بروید.
      </Typography>

      {hasNext && (
        <Button
          variant="contained"
          onClick={onNextQuestion}
          endIcon={<ArrowBackIcon sx={{ mr: 1, ml: -0.5 }} />}
          sx={{
            height: "48px",
            px: 4,
            borderRadius: "10px",
            bgcolor: "var(--activeBG)",
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: "15px",
            mt: 1,
            "&:hover": {
              bgcolor: "#341ec7",
            },
          }}
        >
          سوال بعدی
        </Button>
      )}
    </Box>
  );
}
