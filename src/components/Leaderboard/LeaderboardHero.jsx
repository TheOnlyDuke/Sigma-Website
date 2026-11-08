"use client";
import React from "react";
import { Box, Typography, Button, Stack, Chip } from "@mui/material";
import Link from "next/link";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";

export default function LeaderboardHero() {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        direction: "rtl",
        mb: { xs: 5, sm: 7, md: 8 },
      }}
    >
      {/* Main Title */}
      <Typography
        variant="title"
        component="h1"
        sx={{
          fontSize: { xs: "28px", sm: "38px", md: "46px" },
          fontWeight: 950,
          color: "var(--primary-text)",
          lineHeight: 1.3,
          mb: 2,
          letterSpacing: "-0.5px",
        }}
      >
        جدول رتبه‌بندی سراسری{" "}
        <Box
          component="span"
          sx={{
            color: "var(--activeBG)",
            display: "inline-block",
            position: "relative",
          }}
        >
          دانشجویان
        </Box>
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontFamily: "IRANYekanX, sans-serif",
          fontSize: { xs: "14px", sm: "16px", md: "17px" },
          color: "var(--secondary-text)",
          maxWidth: "760px",
          lineHeight: 1.85,
          mb: 4,
          px: { xs: 1, sm: 0 },
        }}
      >
        سیستم رتبه‌بندی و رقابت‌های کشوری سیگما پس از تکمیل{" "}
        <Box
          component="span"
          sx={{ color: "var(--primary-text)", fontWeight: 700 }}
        >
          فاز اول
        </Box>{" "}
        و با پیوستن و مشارکت حداکثری دانشجویان فعال خواهد شد. هم‌اکنون با حل
        چالش‌های مفهومی در بخش مباحث آموزشی، امتیازات اولیه خود را ذخیره کنید تا
        به عنوان اولین مدعیان در صدر جدول قرار بگیرید!
      </Typography>

      {/* Action Buttons */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          width: { xs: "100%", sm: "auto" },
          justifyContent: "center",
          alignItems: "center",
          mb: 3.5,
        }}
      >
        <Button
          component={Link}
          href="/topics"
          variant="contained"
          startIcon={<RocketLaunchRoundedIcon sx={{ ml: 1, mr: -0.5 }} />}
          sx={{
            minWidth: { xs: "100%", sm: "230px" },
            height: "50px",
            fontSize: "15px",
            fontWeight: 700,
            backgroundColor: "var(--activeBG)",
            color: "#FFFFFF",
            borderRadius: "12px",
            "&:hover": {
              backgroundColor: "var(--blackBG)",
            },
          }}
        >
          شروع حل چالش‌ها و ثبت امتیاز
        </Button>

        <Button
          component={Link}
          href="/howto"
          variant="outlined"
          startIcon={<MenuBookRoundedIcon sx={{ ml: 1, mr: -0.5 }} />}
          sx={{
            minWidth: { xs: "100%", sm: "190px" },
            height: "50px",
            fontSize: "15px",
            fontWeight: 600,
            borderColor: "var(--border)",
            color: "var(--primary-text)",
            backgroundColor: "transparent",
            borderRadius: "12px",
            "&:hover": {
              borderColor: "var(--activeBG)",
              backgroundColor: "rgba(70, 43, 239, 0.04)",
            },
          }}
        >
          راهنمای استفاده و قوانین
        </Button>
      </Stack>

      {/* Reassurance Note */}
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          px: 2,
          py: 0.6,
          borderRadius: "8px",
          backgroundColor: "rgba(70, 43, 239, 0.06)",
        }}
      >
        <StarsRoundedIcon
          sx={{ fontSize: "18px", color: "var(--activeBG)" }}
        />
        <Typography
          sx={{
            fontFamily: "IRANYekanX, sans-serif",
            fontSize: { xs: "12px", sm: "13px" },
            fontWeight: 600,
            color: "var(--primary-text)",
          }}
        >
          تمامی امتیازات کسب‌شده در فاز اول محفوظ مانده و مستقیماً در لیدربورد نهایی اعمال می‌شوند.
        </Typography>
      </Box>
    </Box>
  );
}

