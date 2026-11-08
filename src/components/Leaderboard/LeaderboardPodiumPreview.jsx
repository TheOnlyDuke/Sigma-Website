"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";
import LockPersonRoundedIcon from "@mui/icons-material/LockPersonRounded";

export default function LeaderboardPodiumPreview() {
  const podiumData = [
    {
      rank: 2,
      persianRank: "۲",
      title: "رتبه دوم کشوری",
      role: "نایب قهرمان مسابقات",
      height: { xs: 130, sm: 170, md: 200 },
      color: "#94A3B8",
      glowColor: "rgba(148, 163, 184, 0.25)",
      bgGradient:
        "linear-gradient(180deg, rgba(148, 163, 184, 0.12) 0%, rgba(148, 163, 184, 0.02) 100%)",
      order: { xs: 2, sm: 1 }, // in RTL: placed on right
      icon: <MilitaryTechRoundedIcon sx={{ fontSize: { xs: 28, sm: 36 }, color: "#94A3B8" }} />,
    },
    {
      rank: 1,
      persianRank: "۱",
      title: "رتبه اول کشوری",
      role: "صدرنشین و قهرمان فاز ۲",
      height: { xs: 160, sm: 220, md: 260 },
      color: "#F59E0B",
      glowColor: "rgba(245, 158, 11, 0.35)",
      bgGradient:
        "linear-gradient(180deg, rgba(245, 158, 11, 0.18) 0%, rgba(245, 158, 11, 0.03) 100%)",
      order: { xs: 1, sm: 2 }, // in RTL: placed in center
      isCrown: true,
      icon: <EmojiEventsRoundedIcon sx={{ fontSize: { xs: 34, sm: 46 }, color: "#F59E0B" }} />,
    },
    {
      rank: 3,
      persianRank: "۳",
      title: "رتبه سوم کشوری",
      role: "مقام سوم مسابقات",
      height: { xs: 105, sm: 140, md: 165 },
      color: "#D97706",
      glowColor: "rgba(217, 119, 6, 0.25)",
      bgGradient:
        "linear-gradient(180deg, rgba(217, 119, 6, 0.12) 0%, rgba(217, 119, 6, 0.02) 100%)",
      order: { xs: 3, sm: 3 }, // in RTL: placed on left
      icon: <MilitaryTechRoundedIcon sx={{ fontSize: { xs: 24, sm: 32 }, color: "#D97706" }} />,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "960px",
        mx: "auto",
        mb: { xs: 6, sm: 8, md: 10 },
        direction: "rtl",
      }}
    >
      {/* Container Card */}
      <Box
        sx={{
          position: "relative",
          p: { xs: 2, sm: 4, md: 5 },
          pt: { xs: 4, sm: 5, md: 6 },
          borderRadius: { xs: "20px", sm: "28px" },
          border: "1px solid",
          borderColor: "var(--border)",
          backgroundColor: "var(--notActiveBG)",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.03)",
        }}
      >
        {/* Subtle Ambient Background Glows */}
        <Box
          sx={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "350px",
            height: "220px",
            background:
              "radial-gradient(circle, rgba(70, 43, 239, 0.12) 0%, rgba(245, 158, 11, 0.06) 50%, transparent 80%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        {/* Podium Subtitle / Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4, md: 5 } }}>
          <Typography
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: 700,
              color: "var(--activeBG)",
              letterSpacing: "0.5px",
              mb: 0.5,
            }}
          >
            پیش‌نمایش جایگاه‌های افتخار
          </Typography>
          <Typography
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: { xs: "18px", sm: "22px", md: "26px" },
              fontWeight: 900,
              color: "var(--primary-text)",
            }}
          >
            سکوی برترین‌های لیگ سراسری
          </Typography>
        </Box>

        {/* 3 Podium Stands */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: { xs: 1.5, sm: 3, md: 4 },
            minHeight: { xs: 280, sm: 370, md: 430 },
            pb: { xs: 1, sm: 2 },
          }}
        >
          {podiumData.map((item) => (
            <Box
              key={item.rank}
              sx={{
                flex: { xs: "1 1 0", sm: "0 1 240px" },
                maxWidth: { xs: "130px", sm: "240px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                order: item.order,
                position: "relative",
                transition: "transform 300ms ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              {/* Avatar / Placeholder Badge above Podium */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: { xs: 1.5, sm: 2 },
                  textAlign: "center",
                }}
              >
                {/* Trophy or Medal Icon */}
                <Box
                  sx={{
                    mb: 1,
                    p: { xs: 1, sm: 1.5 },
                    borderRadius: "50%",
                    backgroundColor: item.bgGradient,
                    border: `1.5px solid ${item.color}`,
                    boxShadow: `0 0 20px ${item.glowColor}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Box>

                {/* Placeholder Avatar Circle */}
                <Box
                  sx={{
                    width: { xs: 44, sm: 58, md: 66 },
                    height: { xs: 44, sm: 58, md: 66 },
                    borderRadius: "50%",
                    border: "2px dashed",
                    borderColor: item.color,
                    backgroundColor: "var(--notActiveBG)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--secondary-text)",
                    mb: 1,
                  }}
                >
                  <LockPersonRoundedIcon
                    sx={{ fontSize: { xs: 20, sm: 26 }, color: item.color, opacity: 0.8 }}
                  />
                </Box>

                {/* Role / Title */}
                <Typography
                  sx={{
                    fontFamily: "IRANYekanX, sans-serif",
                    fontSize: { xs: "11px", sm: "13px", md: "14px" },
                    fontWeight: 800,
                    color: "var(--primary-text)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.role}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "IRANYekanX, sans-serif",
                    fontSize: { xs: "10px", sm: "11px" },
                    color: "var(--secondary-text)",
                    display: { xs: "none", sm: "block" },
                    mt: 0.3,
                  }}
                >
                  در انتظار ثبت رکورد
                </Typography>
              </Box>

              {/* Physical Podium Pedestal */}
              <Box
                sx={{
                  width: "100%",
                  height: item.height,
                  background: item.bgGradient,
                  border: "1.5px solid",
                  borderColor: item.color,
                  borderBottom: "none",
                  borderTopLeftRadius: { xs: "14px", sm: "20px" },
                  borderTopRightRadius: { xs: "14px", sm: "20px" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  pt: { xs: 2, sm: 3 },
                  position: "relative",
                  boxShadow: `inset 0 4px 15px ${item.glowColor}`,
                }}
              >
                {/* Big Persian Rank Number */}
                <Typography
                  sx={{
                    fontFamily: "IRANYekanX, sans-serif",
                    fontSize: { xs: "36px", sm: "52px", md: "64px" },
                    fontWeight: 1000,
                    lineHeight: 1,
                    color: item.color,
                    letterSpacing: "-1px",
                    textShadow: `0 2px 10px ${item.glowColor}`,
                  }}
                >
                  {item.persianRank}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "IRANYekanX, sans-serif",
                    fontSize: { xs: "10px", sm: "12px" },
                    fontWeight: 700,
                    color: "var(--secondary-text)",
                    mt: 1,
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Podium Foundation Bar */}
        <Box
          sx={{
            width: "100%",
            height: "12px",
            borderRadius: "6px",
            backgroundColor: "var(--activeBG)",
            opacity: 0.85,
            boxShadow: "0 4px 20px rgba(70, 43, 239, 0.4)",
          }}
        />

        {/* Bottom Note */}
        <Typography
          sx={{
            fontFamily: "IRANYekanX, sans-serif",
            fontSize: { xs: "11px", sm: "12px" },
            color: "var(--secondary-text)",
            textAlign: "center",
            mt: 2.5,
          }}
        >
          🔒 نام و تصویر دانشجویان برتر پس از ثبت اولین رکوردهای رسمی در این جایگاه قرار خواهد گرفت.
        </Typography>
      </Box>
    </Box>
  );
}

