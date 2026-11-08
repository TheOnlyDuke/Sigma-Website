"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { InlineMath } from "react-katex";
import { useTheme } from "@/app/theme/ThemeContext";
import SoonStampBadge from "@/components/mainPage/Download/SoonStampBadge";

/**
 * Parses markdown bold (**text**) inside clause text and renders styled strong spans.
 */
function renderFormattedText(text, isDarkMode = false) {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const inner = part.slice(2, -2);
      return (
        <Box
          key={index}
          component="strong"
          sx={{
            color: "var(--primary-text)",
            fontWeight: 900,
            backgroundColor: isDarkMode
              ? "rgba(189, 194, 255, 0.14)"
              : "rgba(70, 43, 239, 0.09)",
            px: "6px",
            py: "2px",
            borderRadius: "5px",
          }}
        >
          {inner}
        </Box>
      );
    }
    return part;
  });
}

/**
 * LegalArticle renders a single statutory article (ماده) with its clauses,
 * mathematical tags, and optional formal Remark/Lemma callout.
 */
export default function LegalArticle({ article, accentColor = "#462BEF" }) {
  const { isDarkMode } = useTheme();

  return (
    <Box
      id={article.id}
      component="article"
      sx={{
        scrollMarginTop: { xs: "95px", md: "120px" },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        p: { xs: "22px", sm: "30px", md: "36px" },
        borderRadius: "20px",
        backgroundColor: "var(--notActiveBG)",
        border: "1px solid",
        borderColor: "var(--border)",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          borderColor: isDarkMode
            ? "rgba(189, 194, 255, 0.3)"
            : "rgba(70, 43, 239, 0.25)",
          boxShadow: isDarkMode
            ? "0 8px 30px rgba(0, 0, 0, 0.35)"
            : "0 8px 24px rgba(0, 0, 0, 0.04)",
        },
        direction: "rtl",
      }}
    >
      {/* Article Header Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          borderBottom: "1px solid",
          borderColor: "var(--border)",
          pb: 2,
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1.5, sm: 2 } }}>
          {/* Section Marker Pill */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              px: { xs: "12px", sm: "16px" },
              py: { xs: "5px", sm: "7px" },
              borderRadius: "10px",
              backgroundColor: `${accentColor}18`,
              border: `1px solid ${accentColor}35`,
              color: accentColor,
              fontSize: { xs: "14px", sm: "15.5px" },
              fontWeight: 900,
            }}
          >
            <Box
              component="span"
              sx={{ direction: "ltr", display: "inline-block" }}
            >
              <InlineMath math={article.symbol} />
            </Box>
            <span>{article.label}</span>
          </Box>

          <Typography
            component="h3"
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: { xs: "22px", sm: "26px", md: "28px" },
              fontWeight: 950,
              color: "var(--primary-text)",
              letterSpacing: "-0.4px",
              lineHeight: 1.35,
            }}
          >
            {article.title}
          </Typography>
        </Box>

        {article.mathTag && (
          <Box
            sx={{
              fontFamily: "monospace",
              fontSize: "14px",
              color: "var(--secondary-text)",
              direction: "ltr",
              opacity: 0.85,
            }}
          >
            <InlineMath math={article.mathTag} />
          </Box>
        )}
      </Box>

      {/* Clauses (بندهای ماده) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "36px", sm: "46px", md: "52px" },
        }}
      >
        {article.clauses.map((clause, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "12px", sm: "14px" },
            }}
          >
            {/* Clause Heading Row (Number Pill + Prominent Clause Title + Optional Status Badge) */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: { xs: "12px", sm: "16px" },
              }}
            >
              {/* Clause Number Pill */}
              <Box
                component="span"
                sx={{
                  flexShrink: 0,
                  px: { xs: "12px", sm: "14px" },
                  py: { xs: "4px", sm: "5px" },
                  borderRadius: "8px",
                  backgroundColor: isDarkMode
                    ? "rgba(189, 194, 255, 0.12)"
                    : "rgba(70, 43, 239, 0.08)",
                  border: "1px solid",
                  borderColor: isDarkMode
                    ? "rgba(189, 194, 255, 0.28)"
                    : "rgba(70, 43, 239, 0.22)",
                  fontFamily: "IRANYekanX, monospace",
                  fontSize: { xs: "14.5px", sm: "16px" },
                  fontWeight: 950,
                  color: "var(--activeBG)",
                  lineHeight: 1.2,
                }}
              >
                {clause.number}
              </Box>

              {/* Prominent Clause Title Heading */}
              <Typography
                component="h4"
                sx={{
                  fontFamily: "IRANYekanX, sans-serif",
                  fontSize: { xs: "20px", sm: "22px", md: "24px" },
                  fontWeight: 900,
                  color: "var(--primary-text)",
                  lineHeight: 1.45,
                  letterSpacing: "-0.3px",
                  display: "inline-flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 1.5,
                  m: 0,
                }}
              >
                <span>{clause.title}</span>
                {clause.isComingSoon && (
                  <SoonStampBadge
                    label="به‌زودی"
                    sx={{
                      fontSize: "12px",
                      px: "10px",
                      py: "2px",
                      transform: "rotate(-4deg)",
                    }}
                  />
                )}
              </Typography>
            </Box>

            {/* High-Readability Clause Body Text */}
            <Typography
              component="p"
              variant="normalBody"
              sx={{
                fontFamily: "IRANYekanX, sans-serif",
                fontSize: { xs: "15.5px", sm: "16.5px", md: "17px" },
                lineHeight: { xs: 2.25, sm: 2.38 },
                color: "var(--primary-text)",
                opacity: isDarkMode ? 0.92 : 0.88,
                fontWeight: 450,
                pr: { xs: 0, sm: "46px" },
                m: 0,
                letterSpacing: "0.01em",
              }}
            >
              {renderFormattedText(clause.text, isDarkMode)}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Formal Remark / Lemma / تبصره */}
      {article.remark && (
        <Box
          sx={{
            mt: 4,
            p: { xs: "18px", sm: "24px" },
            borderRadius: "16px",
            backgroundColor: isDarkMode
              ? "rgba(70, 43, 239, 0.09)"
              : "rgba(70, 43, 239, 0.045)",
            borderRight: `4px solid ${accentColor}`,
            borderTop: "1px solid",
            borderBottom: "1px solid",
            borderLeft: "1px solid",
            borderColor: "var(--border)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 1.5,
              mb: 1.5,
            }}
          >
            <Typography
              sx={{
                fontFamily: "IRANYekanX, sans-serif",
                fontSize: { xs: "15.5px", sm: "17px" },
                fontWeight: 900,
                color: accentColor,
              }}
            >
              {article.remark.number} ({article.remark.label})
            </Typography>
            {article.remark.math && (
              <Box
                sx={{
                  direction: "ltr",
                  fontSize: "13.5px",
                  color: "var(--primary-text)",
                  "& .katex": { fontSize: "1em" },
                }}
              >
                <InlineMath math={article.remark.math} />
              </Box>
            )}
          </Box>
          <Typography
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: { xs: "14.5px", sm: "15.5px" },
              lineHeight: 2.2,
              color: "var(--primary-text)",
              opacity: 0.92,
              fontWeight: 450,
            }}
          >
            {article.remark.text}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
