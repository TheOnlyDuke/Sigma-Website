"use client";
import React from "react";
import { Box, Typography, Grid, Chip } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

export default function LeaderboardRoadmap() {
  const steps = [
    {
      number: "۱",
      title: "فاز اول: تمرین و ثبت امتیازات",
      desc: "شرکت در چالش‌های گام‌به‌گام انتگرال و مشتق، ذخیره امتیازات حل سوال و ثبت دقت عملکرد در داشبورد کاربری.",
      status: "فعال هم‌اکنون",
      statusColor: "#10B981",
      bgColor: "rgba(16, 185, 129, 0.08)",
      icon: <CheckCircleRoundedIcon sx={{ fontSize: 24, color: "#10B981" }} />,
    },
    {
      number: "۲",
      title: "تکمیل حد نصاب دانشجویان",
      desc: "پیوستن دانشجویان دانشگاه‌های هدف و گسترش جامعه آماری جهت تضمین رقابت علمی سالم، متعادل و پویا.",
      status: "در حال تکمیل",
      statusColor: "#F59E0B",
      bgColor: "rgba(245, 158, 11, 0.08)",
      icon: <HourglassTopRoundedIcon sx={{ fontSize: 24, color: "#F59E0B" }} />,
    },
    {
      number: "۳",
      title: "فاز دوم: افتتاح لیدربورد کشوری",
      desc: "فعال‌سازی جدول رتبه‌بندی سراسری، لیگ‌های دوره‌ای، فیلتر دانشگاهی و اهدای نشان‌های افتخار به نخبگان ریاضی.",
      status: "به‌زودی",
      statusColor: "var(--activeBG)",
      bgColor: "rgba(70, 43, 239, 0.08)",
      icon: <AutoAwesomeRoundedIcon sx={{ fontSize: 24, color: "var(--activeBG)" }} />,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "960px",
        mx: "auto",
        mb: { xs: 8, sm: 10, md: 12 },
        direction: "rtl",
      }}
    >
      <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4 } }}>
        <Typography
          sx={{
            fontFamily: "IRANYekanX, sans-serif",
            fontSize: { xs: "12px", sm: "14px" },
            fontWeight: 700,
            color: "var(--activeBG)",
            mb: 0.5,
          }}
        >
          مسیر راه‌اندازی
        </Typography>
        <Typography
          sx={{
            fontFamily: "IRANYekanX, sans-serif",
            fontSize: { xs: "20px", sm: "24px" },
            fontWeight: 900,
            color: "var(--primary-text)",
          }}
        >
          مراحل فعال‌سازی جدول رقابت‌ها
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        {steps.map((step) => (
          <Grid size={{ xs: 12, md: 4 }} key={step.number}>
            <Box
              sx={{
                p: { xs: 2.5, sm: 3 },
                height: "100%",
                borderRadius: "18px",
                border: "1px solid",
                borderColor: "var(--border)",
                backgroundColor: "var(--notActiveBG)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "transform 250ms ease, border-color 250ms ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "var(--activeBG)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    backgroundColor: step.bgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {step.icon}
                </Box>
                <Chip
                  label={step.status}
                  size="small"
                  sx={{
                    fontFamily: "IRANYekanX, sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    backgroundColor: step.bgColor,
                    color: step.statusColor,
                    borderRadius: "6px",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: "IRANYekanX, sans-serif",
                  fontSize: "15px",
                  fontWeight: 800,
                  color: "var(--primary-text)",
                  mb: 1,
                }}
              >
                {step.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "IRANYekanX, sans-serif",
                  fontSize: "13px",
                  color: "var(--secondary-text)",
                  lineHeight: 1.7,
                }}
              >
                {step.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

