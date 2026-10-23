"use client";
import { Box, Typography, Button, Chip } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function QuestionHeader({
  topicTitle,
  currentIndex,
  totalQuestions,
}) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 2,
        pb: 2,
        borderBottom: "1px solid var(--border)",
        direction: "rtl",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Link href="/dashboard#topics" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<ArrowForwardIcon sx={{ ml: 0.5, mr: -0.5 }} />}
            sx={{
              borderRadius: "8px",
              borderColor: "var(--border)",
              color: "var(--primary-text)",
              fontSize: "13px",
              "&:hover": {
                borderColor: "var(--activeBG)",
                bgcolor: "rgba(70, 43, 239, 0.04)",
              },
            }}
          >
            بازگشت به مباحث
          </Button>
        </Link>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "18px", sm: "20px" },
            color: "var(--primary-text)",
          }}
        >
          چالش سوالات {topicTitle}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Chip
          label={`سوال ${currentIndex + 1} از ${totalQuestions}`}
          sx={{
            bgcolor: "var(--activeBG)",
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: "13px",
            height: "30px",
          }}
        />
      </Box>
    </Box>
  );
}
