"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import SoonStampBadge from "@/components/mainPage/Download/SoonStampBadge";

const StartArrowSvg = ({ color = "#969696" }) => (
  <svg width="19" height="11" viewBox="0 0 19 11" fill="none">
    <path
      d="M7.42466 10.7218C8.57712 11.3801 10.0108 10.5475 10.0108 9.21988V7.06246L16.4139 10.7209C17.5664 11.3801 19 10.5475 19 9.21988V1.73253C19 0.404888 17.5664 -0.427655 16.4139 0.231557L10.0108 3.88903V1.73161C10.0108 0.403966 8.57712 -0.428576 7.42466 0.230635L0.871265 3.97477C-0.290422 4.63859 -0.290422 6.3129 0.871265 6.97672L7.42466 10.7209V10.7218Z"
      fill={color}
    />
  </svg>
);

export function DashTopicDesktopRow({ topic }) {
  const isAvailable = topic.isAvailable !== false;
  const href = `/questions/${topic.slug || topic.id}`;

  const rowContent = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "110px",
        bgcolor: "background.paper",
        borderRadius: "20px",
        border: "1px solid var(--border)",
        px: "50px",
        boxSizing: "border-box",
        cursor: isAvailable ? "pointer" : "default",
        transition: "all 0.25s ease",
        direction: "rtl",
        opacity: isAvailable ? 1 : 0.9,
        ...(isAvailable && {
          "&:hover": {
            borderColor: "var(--activeBG)",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 16px rgba(70, 43, 239, 0.08)",
            "& .start-arrow path": {
              fill: "var(--activeBG)",
            },
          },
        }),
      }}
    >
      <Typography
        sx={{
          width: "26%",
          textAlign: "right",
          fontSize: { md: "24px", lg: "28px" },
          fontWeight: 900,
          fontFamily: "inherit",
          color: "var(--primary-text)",
          pr: 1,
        }}
      >
        {topic.name}
      </Typography>
      <Typography
        sx={{
          width: "22%",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: 500,
          fontFamily: "inherit",
          color: "var(--primary-text)",
        }}
      >
        {topic.score} امتیاز
      </Typography>
      <Typography
        sx={{
          width: "22%",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: 500,
          fontFamily: "inherit",
          color: "var(--primary-text)",
        }}
      >
        {topic.solvedQuestions} سوال
      </Typography>
      <Typography
        sx={{
          width: "18%",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: 500,
          fontFamily: "inherit",
          color: "var(--primary-text)",
        }}
      >
        {topic.totalQuestions} سوال
      </Typography>
      <Box
        sx={{
          width: "12%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          pl: 1,
        }}
      >
        {isAvailable ? (
          <Box className="start-arrow" sx={{ transition: "all 0.2s ease" }}>
            <StartArrowSvg />
          </Box>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <SoonStampBadge sx={{ fontSize: "12px", py: "2px", px: "8px" }} />
          </Box>
        )}
      </Box>
    </Box>
  );

  if (isAvailable) {
    return (
      <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
        {rowContent}
      </Link>
    );
  }

  return rowContent;
}

export function DashTopicMobileRow({ topic }) {
  const isAvailable = topic.isAvailable !== false;
  const href = `/questions/${topic.slug || topic.id}`;

  const rowContent = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 1.5,
        cursor: isAvailable ? "pointer" : "default",
        direction: "rtl",
        opacity: isAvailable ? 1 : 0.9,
      }}
    >
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 900,
          fontFamily: "inherit",
          color: "var(--primary-text)",
          minWidth: "70px",
          textAlign: "right",
        }}
      >
        {topic.name}
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 500,
          fontFamily: "inherit",
          color: "var(--primary-text)",
          textAlign: "center",
        }}
      >
        {topic.solvedQuestions}/{topic.totalQuestions}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        {isAvailable ? (
          <StartArrowSvg />
        ) : (
          <SoonStampBadge sx={{ fontSize: "11px", py: "1px", px: "6px" }} />
        )}
      </Box>
    </Box>
  );

  if (isAvailable) {
    return (
      <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
        {rowContent}
      </Link>
    );
  }

  return rowContent;
}
