"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { BlockMath, InlineMath } from "react-katex";
import { useTheme } from "@/app/theme/ThemeContext";
import { legalMetadata } from "@/utils/legalData";

/**
 * LegalHeader renders the formal codex title, mathematical charter formula,
 * and academic-legal credential metadata banner.
 */
export default function LegalHeader() {
  const { isDarkMode } = useTheme();

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mb: { xs: "50px", sm: "70px", md: "90px" },
        direction: "rtl",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Primary Headline */}
      <Typography
        variant="title"
        component="h1"
        sx={{
          fontFamily: "IRANYekanX, sans-serif",
          fontSize: { xs: "28px", sm: "38px", md: "46px" },
          fontWeight: 950,
          lineHeight: { xs: 1.35, md: 1.25 },
          mb: "16px",
          color: "var(--primary-text)",
          letterSpacing: "-0.5px",
        }}
      >
        قوانین، مقررات و سیاست‌نامه صیانت از داده‌ها
      </Typography>

      {/* Explanatory Subtitle */}
      <Typography
        variant="normalBody"
        sx={{
          maxWidth: "820px",
          fontSize: { xs: "15px", sm: "16.5px" },
          color: "var(--secondary-text)",
          lineHeight: 1.9,
          mb: { xs: "32px", md: "44px" },
          px: "16px",
        }}
      >
        سند رسمی تبیین‌کننده حقوق متقابل، استانداردهای استفاده از خدمات آموزشی،
        الزامات حفظ محرمانگی و پروتکل‌های صیانت از هویت و داده‌های تحصیلی کاربران در پلتفرم سیگما (SigmaToStudy.ir).
      </Typography>

      {/* Mathematical Specification Plate (KaTeX Formulations) */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "880px",
          p: { xs: "20px", sm: "28px" },
          borderRadius: "20px",
          backgroundColor: "var(--notActiveBG)",
          border: "1px solid",
          borderColor: "var(--border)",
          mb: { xs: "24px", md: "32px" },
          boxShadow: isDarkMode
            ? "0 8px 30px rgba(0,0,0,0.3)"
            : "0 6px 20px rgba(0,0,0,0.03)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px dashed",
            borderColor: "var(--border)",
            pb: 1.5,
            mb: 2,
            direction: "rtl",
          }}
        >
          <Typography
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: "13px",
              fontWeight: 800,
              color: "var(--activeBG)",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <span>مدل صوری و اصل توافق دوجانبه سند:</span>
          </Typography>
          <Typography
            sx={{
              fontFamily: "monospace",
              fontSize: "12px",
              color: "var(--secondary-text)",
            }}
          >
            {legalMetadata.documentId}
          </Typography>
        </Box>

        {/* KaTeX Math Equation */}
        <Box
          sx={{
            direction: "ltr",
            overflowX: "auto",
            py: 1,
            color: "var(--primary-text)",
            "& .katex-display": {
              margin: "6px 0",
            },
          }}
        >
          <BlockMath math={legalMetadata.formalFormula} />
        </Box>

        <Typography
          sx={{
            fontFamily: "IRANYekanX, sans-serif",
            fontSize: "13px",
            color: "var(--secondary-text)",
            mt: 1,
            direction: "rtl",
            textAlign: "center",
            lineHeight: 1.8,
          }}
        >
          شرط لازم و کافی ورود به سامانه و بهره‌برداری از خدمات:{" "}
          <Box
            component="span"
            sx={{ direction: "ltr", display: "inline-block", mx: 1 }}
          >
            <InlineMath math={legalMetadata.consentFormula} />
          </Box>
        </Typography>
      </Box>

      {/* Metadata Ribbon (Grid of Credential Attributes) */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "880px",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(3, 1fr)",
          },
          gap: "12px",
          direction: "rtl",
        }}
      >
        <Box
          sx={{
            p: "14px 18px",
            borderRadius: "14px",
            backgroundColor: "var(--notActiveBG)",
            border: "1px solid",
            borderColor: "var(--border)",
            textAlign: "right",
          }}
        >
          <Typography
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: "11px",
              color: "var(--secondary-text)",
              mb: 0.5,
            }}
          >
            نسخه مصوب و بازبینی
          </Typography>
          <Typography
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: "14px",
              fontWeight: 800,
              color: "var(--primary-text)",
            }}
          >
            {legalMetadata.version}
          </Typography>
        </Box>

        <Box
          sx={{
            p: "14px 18px",
            borderRadius: "14px",
            backgroundColor: "var(--notActiveBG)",
            border: "1px solid",
            borderColor: "var(--border)",
            textAlign: "right",
          }}
        >
          <Typography
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: "11px",
              color: "var(--secondary-text)",
              mb: 0.5,
            }}
          >
            دوره اعتبار اجرایی
          </Typography>
          <Typography
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: "14px",
              fontWeight: 800,
              color: "var(--primary-text)",
            }}
          >
            {legalMetadata.lastRevised}
          </Typography>
        </Box>

        <Box
          sx={{
            p: "14px 18px",
            borderRadius: "14px",
            backgroundColor: "var(--notActiveBG)",
            border: "1px solid",
            borderColor: "var(--border)",
            textAlign: "right",
          }}
        >
          <Typography
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: "11px",
              color: "var(--secondary-text)",
              mb: 0.5,
            }}
          >
            قوانین موضوعه حاکم
          </Typography>
          <Typography
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              color: "var(--primary-text)",
            }}
          >
            قانون تجارت الکترونیک (۱۳۸۲)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
