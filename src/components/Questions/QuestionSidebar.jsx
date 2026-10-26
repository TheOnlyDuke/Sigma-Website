"use client";
import React, { useState } from "react";
import { Box, Typography, Divider, IconButton, Collapse } from "@mui/material";
import Image from "next/image";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useAuth } from "@/contexts/AuthContext";
import { mockUserData } from "@/utils/dummydatas";

const PERSIAN_QUESTION_NAMES = [
  "سوال اول",
  "سوال دوم",
  "سوال سوم",
  "سوال چهارم",
  "سوال پنجم",
  "سوال ششم",
  "سوال هفتم",
  "سوال هشتم",
  "سوال نهم",
  "سوال دهم",
];

export function QuestionListItems({
  questionsCount = 4,
  currentIndex = 0,
  onSelectQuestion,
  isQuestionCompleted = () => false,
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, width: "100%" }}>
      {Array.from({ length: questionsCount }).map((_, index) => {
        const isCurrent = index === currentIndex;
        const isDone = isQuestionCompleted(index) || index < currentIndex;
        const isLocked = index > currentIndex && !isDone;
        const name = PERSIAN_QUESTION_NAMES[index] || `سوال ${index + 1}`;

        if (isCurrent) {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "#000000",
                color: "#FFFFFF",
                borderRadius: "12px",
                px: 2,
                py: 1.2,
                cursor: "default",
                userSelect: "none",
                transition: "all 0.2s ease",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "15px",
                  fontWeight: 800,
                  color: "#FFFFFF",
                }}
              >
                {name}
              </Typography>
              <LockOpenOutlinedIcon sx={{ fontSize: 19, color: "#FFFFFF" }} />
            </Box>
          );
        }

        return (
          <Box
            key={index}
            onClick={() => {
              if (!isLocked && onSelectQuestion) {
                onSelectQuestion(index);
              }
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1,
              borderRadius: "10px",
              cursor: isLocked ? "default" : "pointer",
              userSelect: "none",
              color: isLocked ? "var(--secondary-text)" : "var(--primary-text)",
              transition: "all 0.2s ease",
              "&:hover": {
                bgcolor: isLocked ? "transparent" : "rgba(70, 43, 239, 0.04)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: "15px",
                fontWeight: isDone ? 700 : 500,
                color: isLocked ? "var(--secondary-text)" : "var(--primary-text)",
              }}
            >
              {name}
            </Typography>

            {isDone ? (
              <CheckCircleOutlineRoundedIcon
                sx={{ fontSize: 20, color: "var(--activeBG)" }}
              />
            ) : (
              <LockOutlinedIcon
                sx={{ fontSize: 18, color: "var(--secondary-text)" }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
}

/**
 * QuestionSidebar renders:
 * - Desktop: The dedicated right sidebar with profile header and question progress list.
 * - Mobile: Collapsible card with chevron toggle.
 */
export default function QuestionSidebar({
  topicTitle = "انتگرال",
  difficulty = "سخت",
  questionsCount = 4,
  currentIndex = 0,
  onSelectQuestion,
  isQuestionCompleted = () => false,
  sx = {},
}) {
  const { USER_INFO } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const fullName =
    USER_INFO?.user?.full_name || mockUserData?.user?.full_name || "پارسا سورسوری";

  return (
    <>
      {/* Desktop Sidebar (md and up) */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          width: { md: 260, lg: 280 },
          minWidth: { md: 260, lg: 280 },
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#1E1E1E" : "#FFFFFF",
          borderRadius: "20px",
          border: (theme) =>
            theme.palette.mode === "dark"
              ? "1px solid #2F2F2F"
              : "1px solid #E2E2E2",
          boxShadow: (theme) =>
            theme.palette.mode === "dark"
              ? "0 4px 20px rgba(0,0,0,0.4)"
              : "0 2px 14px rgba(0, 0, 0, 0.04)",
          p: 3,
          boxSizing: "border-box",
          direction: "rtl",
          height: "fit-content",
          ...sx,
        }}
      >
        {/* User Profile Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Avatar in rounded container */}
          <Box
            sx={{
              width: 54,
              height: 54,
              borderRadius: "16px",
              border: (theme) =>
                theme.palette.mode === "dark"
                  ? "1px solid #333336"
                  : "1px solid #E2E2E2",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#2A2A2D" : "#F4F4F6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/profile-sticker.png"
              alt={fullName}
              width={44}
              height={44}
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>

          {/* User Name & Topic Info */}
          <Box sx={{ textAlign: "right", flex: 1, pr: 1.5 }}>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: "16px",
                fontWeight: 800,
                color: "var(--primary-text)",
                lineHeight: 1.3,
              }}
            >
              {fullName}
            </Typography>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: "13px",
                fontWeight: 500,
                color: "var(--secondary-text)",
                mt: 0.5,
              }}
            >
              مبحث {topicTitle} • {difficulty}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2.5, borderColor: "var(--border)" }} />

        {/* Questions Status List */}
        <QuestionListItems
          questionsCount={questionsCount}
          currentIndex={currentIndex}
          onSelectQuestion={onSelectQuestion}
          isQuestionCompleted={isQuestionCompleted}
        />
      </Box>

      {/* Mobile Collapsible Header Card (xs to md) */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          width: "100%",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#1E1E1E" : "#FFFFFF",
          borderRadius: "18px",
          border: (theme) =>
            theme.palette.mode === "dark"
              ? "1px solid #2F2F2F"
              : "1px solid #E2E2E2",
          boxShadow: (theme) =>
            theme.palette.mode === "dark"
              ? "0 4px 20px rgba(0,0,0,0.4)"
              : "0 2px 14px rgba(0, 0, 0, 0.04)",
          p: 2,
          boxSizing: "border-box",
          direction: "rtl",
          mb: 2.5,
          ...sx,
        }}
      >
        <Box
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            cursor: "pointer",
          }}
        >
          {/* Right side: Avatar and Info */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "14px",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src="/images/profile-sticker.png"
                alt={fullName}
                width={38}
                height={38}
                style={{ objectFit: "contain" }}
                priority
              />
            </Box>

            <Box sx={{ textAlign: "right" }}>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "15px",
                  fontWeight: 800,
                  color: "var(--primary-text)",
                  lineHeight: 1.3,
                }}
              >
                {fullName}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "var(--secondary-text)",
                  mt: 0.3,
                }}
              >
                مبحث {topicTitle} • {difficulty}
              </Typography>
            </Box>
          </Box>

          {/* Left side: Chevron toggle */}
          <IconButton
            size="small"
            sx={{
              color: "var(--secondary-text)",
              transform: mobileOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </Box>

        {/* Collapsible Question List on Mobile */}
        <Collapse in={mobileOpen} timeout="auto" unmountOnExit>
          <Divider sx={{ my: 2, borderColor: "var(--border)" }} />
          <QuestionListItems
            questionsCount={questionsCount}
            currentIndex={currentIndex}
            onSelectQuestion={(idx) => {
              onSelectQuestion?.(idx);
              setMobileOpen(false);
            }}
            isQuestionCompleted={isQuestionCompleted}
          />
        </Collapse>
      </Box>
    </>
  );
}
