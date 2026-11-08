"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { BlockMath, InlineMath } from "react-katex";
import { useTheme } from "@/app/theme/ThemeContext";
import LegalBlueprintPlate from "./LegalBlueprintPlate";
import LegalArticle from "./LegalArticle";

/**
 * LegalSectionCard renders a major section (e.g. #rules or #privacy) with its anchor ID,
 * technical blueprint plate, formal KaTeX predicate, and nested legal articles.
 */
export default function LegalSectionCard({ section }) {
  const { isDarkMode } = useTheme();
  const accent = section.accentColor || "#462BEF";

  return (
    <Box
      id={section.id}
      component="section"
      aria-labelledby={`${section.id}-heading`}
      sx={{
        scrollMarginTop: { xs: "95px", md: "125px" },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: { xs: "36px", md: "48px" },
        mb: { xs: "80px", sm: "100px", md: "130px" },
        direction: "rtl",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Section Hero Banner (Header + Blueprint Plate) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "32px", md: "48px" },
          p: { xs: "28px", sm: "36px", md: "44px" },
          borderRadius: "24px",
          backgroundColor: "var(--notActiveBG)",
          border: "1px solid",
          borderColor: "var(--border)",
          boxShadow: isDarkMode
            ? "0 10px 40px rgba(0, 0, 0, 0.4)"
            : "0 8px 30px rgba(0, 0, 0, 0.03)",
        }}
      >
        {/* Text and Title Description Column */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {/* Section Marker Badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              px: "14px",
              py: "5px",
              borderRadius: "10px",
              backgroundColor: `${accent}15`,
              border: `1px solid ${accent}35`,
              color: accent,
              fontSize: "12.5px",
              fontWeight: 800,
              mb: "18px",
            }}
          >
            <Box
              component="span"
              sx={{ direction: "ltr", display: "inline-block" }}
            >
              <InlineMath math={section.symbol} />
            </Box>
            <span>{section.sectionNumber}</span>
            <Box
              component="span"
              sx={{
                fontSize: "10px",
                fontFamily: "monospace",
                opacity: 0.85,
                ml: 0.5,
              }}
            >
              [{section.formalTag}]
            </Box>
          </Box>

          {/* Section Title */}
          <Typography
            id={`${section.id}-heading`}
            variant="title"
            component="h2"
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: { xs: "26px", sm: "32px", md: "38px" },
              fontWeight: 1000,
              lineHeight: 1.3,
              mb: "16px",
              color: "var(--primary-text)",
              letterSpacing: "-0.5px",
            }}
          >
            {section.title}
          </Typography>

          {/* Subtitle / Legal Scope */}
          <Typography
            variant="normalBody"
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: { xs: "15px", sm: "16.5px" },
              lineHeight: 2.05,
              color: "var(--secondary-text)",
              mb: "24px",
            }}
          >
            {section.subtitle}
          </Typography>

          {/* Mathematical Predicate Formula Pill */}
          <Box
            sx={{
              width: "100%",
              p: "14px 18px",
              borderRadius: "14px",
              backgroundColor: isDarkMode
                ? "rgba(255, 255, 255, 0.03)"
                : "rgba(0, 0, 0, 0.02)",
              border: "1px solid",
              borderColor: "var(--border)",
              direction: "ltr",
              overflowX: "auto",
              textAlign: "center",
              "& .katex": {
                fontSize: "1.08em",
                color: isDarkMode ? "#E2E8F0" : "#1E293B",
              },
            }}
          >
            <BlockMath math={section.formula} />
          </Box>
        </Box>

        {/* Technical Blueprint Illustration Plate */}
        <Box
          sx={{
            flex: { xs: "none", md: "0 0 420px" },
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LegalBlueprintPlate
            imageSrc={section.image}
            alt={section.imageAlt}
            accentColor={accent}
            coordinateTag={section.symbol}
          />
        </Box>
      </Box>

      {/* Articles Stream */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "24px", sm: "32px" },
          width: "100%",
        }}
      >
        {section.articles.map((article) => (
          <LegalArticle
            key={article.id}
            article={article}
            accentColor={accent}
          />
        ))}
      </Box>
    </Box>
  );
}
