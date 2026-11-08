"use client";
import React from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@/app/theme/ThemeContext";
import { supportConfig } from "@/utils/legalData";

/**
 * LegalFooterNotice renders official contact avenues, support hours,
 * and statutory disclaimers at the conclusion of the codex.
 */
export default function LegalFooterNotice({ onScrollToTop }) {
  const { isDarkMode } = useTheme();
  const telegramLink = supportConfig.getTelegramLink();
  const telegramDisplay = supportConfig.getTelegramDisplay();

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "28px",
        p: { xs: "28px", sm: "36px", md: "44px" },
        borderRadius: "24px",
        backgroundColor: "var(--notActiveBG)",
        border: "1px solid",
        borderColor: "var(--border)",
        direction: "rtl",
        boxShadow: isDarkMode
          ? "0 10px 40px rgba(0, 0, 0, 0.4)"
          : "0 8px 30px rgba(0, 0, 0, 0.03)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: 2.5,
          borderBottom: "1px solid",
          borderColor: "var(--border)",
          pb: 3,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: { xs: "17px", sm: "19px" },
              fontWeight: 800,
              color: "var(--primary-text)",
              mb: 0.8,
            }}
          >
            کانال‌های ارتباطی، نظارت و ساعات پشتیبانی رسمی
          </Typography>
          <Typography
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: "13.5px",
              color: "var(--secondary-text)",
              lineHeight: 1.8,
            }}
          >
            پاسخگویی به ابهامات حقوقی، گزارش باگ یا درخواست پیگیری حساب کاربری:{" "}
            <Box
              component="span"
              sx={{ color: "var(--primary-text)", fontWeight: 700 }}
            >
              {supportConfig.schedule.full}
            </Box>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {/* Email Channel */}
          <ButtonBase
            component="a"
            href={`mailto:${supportConfig.email}`}
            sx={{
              px: "18px",
              py: "10px",
              borderRadius: "12px",
              fontSize: "13px",
              fontWeight: 700,
              backgroundColor: isDarkMode
                ? "rgba(255, 255, 255, 0.04)"
                : "rgba(0, 0, 0, 0.03)",
              border: "1px solid",
              borderColor: "var(--border)",
              color: "var(--primary-text)",
              transition: "all 0.2s ease",
              "&:hover": {
                borderColor: "var(--activeBG)",
                color: "var(--activeBG)",
                backgroundColor: "rgba(70, 43, 239, 0.06)",
              },
            }}
          >
            رایانامه: {supportConfig.email}
          </ButtonBase>

          {/* Configurable Telegram Channel */}
          {telegramLink ? (
            <ButtonBase
              component="a"
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: "18px",
                py: "10px",
                borderRadius: "12px",
                fontSize: "13px",
                fontWeight: 700,
                backgroundColor: isDarkMode
                  ? "rgba(255, 255, 255, 0.04)"
                  : "rgba(0, 0, 0, 0.03)",
                border: "1px solid",
                borderColor: "var(--border)",
                color: "var(--primary-text)",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "var(--activeBG)",
                  color: "var(--activeBG)",
                  backgroundColor: "rgba(70, 43, 239, 0.06)",
                },
              }}
            >
              تلگرام پشتیبانی: {telegramDisplay}
            </ButtonBase>
          ) : (
            <Box
              sx={{
                px: "18px",
                py: "10px",
                borderRadius: "12px",
                fontSize: "12.5px",
                fontWeight: 600,
                backgroundColor: isDarkMode
                  ? "rgba(255, 255, 255, 0.02)"
                  : "rgba(0, 0, 0, 0.02)",
                border: "1px solid",
                borderColor: "var(--border)",
                color: "var(--secondary-text)",
              }}
            >
              کانال تلگرام: به‌زودی فعال می‌شود
            </Box>
          )}
        </Box>
      </Box>

      {/* Statutory Disclaimer & Operational Notice */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Typography
          sx={{
            fontFamily: "IRANYekanX, sans-serif",
            fontSize: "12.5px",
            color: "var(--secondary-text)",
            lineHeight: 1.9,
            textAlign: "justify",
          }}
        >
          <Box
            component="strong"
            sx={{ color: "var(--primary-text)", ml: 0.5, fontWeight: 800 }}
          >
            یادداشت حقوقی مهم:
          </Box>
          این سند منشور عملیاتی و ضوابط حاکم بر استفاده از خدمات پلتفرم آموزشی سیگما بوده و برای تمامی اعضا و مراجعین لازم‌الاجرا است. مفاد این نظام‌نامه منطبق با موازین قانونی و شرعی جاری کشور تدوین یافته و جایگزین مشاوره یا آراء رسمی مراجع صالحه قضایی نخواهد بود. هرگونه سوال در باب استنباط از بندها از طریق مراجع رسمی پشتیبانی سیگما قابل طرح و پیگیری است.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            pt: 2,
            borderTop: "1px solid",
            borderColor: "var(--border)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: "12px",
              color: "var(--secondary-text)",
            }}
          >
            تمامی حقوق مادی و معنوی این نظام‌نامه متعلق به پلتفرم آموزشی سیگما می‌باشد.
          </Typography>

          <ButtonBase
            onClick={onScrollToTop}
            sx={{
              px: "14px",
              py: "6px",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: 700,
              color: "var(--activeBG)",
              "&:hover": {
                backgroundColor: "rgba(70, 43, 239, 0.06)",
              },
            }}
          >
            بازگشت به ابتدای سند ↑
          </ButtonBase>
        </Box>
      </Box>
    </Box>
  );
}
