"use client";
import React from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/app/theme/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { cookieStorage } from "@/utils/cookies";
import SoonStampBadge from "@/components/mainPage/Download/SoonStampBadge";

/**
 * HowToStepCard displays a single instructional step with scroll entrance animations,
 * an ambient illustration container that seamlessly integrates with dark & light modes,
 * tags, and contextual action buttons.
 */
export default function HowToStepCard({ step, index }) {
  const router = useRouter();
  const { isDarkMode } = useTheme();
  const { USER_INFO, ACCESS_TOKEN } = useAuth();
  const shouldReduceMotion = useReducedMotion();
  const isOdd = index % 2 !== 0;
  const accent = step.accentColor || "#462BEF";
  const persianNums = ["۱", "۲", "۳", "۴", "۵", "۶"];
  const persianDigit = persianNums[index] || String(index + 1);

  const isAuthenticated = Boolean(
    USER_INFO ||
    ACCESS_TOKEN ||
    (typeof window !== "undefined" && cookieStorage.getAccessToken())
  );

  const targetHref = step.isAuthAware
    ? isAuthenticated
      ? "/dashboard"
      : "/auth"
    : step.actionLink;

  return (
    <Box
      id={step.id || `step-${index + 1}`}
      component="article"
      sx={{
        scrollMarginTop: { xs: "100px", md: "120px" },
        width: "100%",
        direction: "rtl",
      }}
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: isOdd ? "row-reverse" : "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: "32px", md: "50px", lg: "70px" },
            p: { xs: "24px", sm: "36px", md: "44px" },
            borderRadius: { xs: "24px", md: "32px" },
            backgroundColor: isDarkMode
              ? "rgba(22, 23, 30, 0.85)"
              : "rgba(255, 255, 255, 0.9)",
            border: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.08)"
              : "1px solid rgba(0, 0, 0, 0.06)",
            backdropFilter: "blur(12px)",
            transition: "border-color 0.3s ease, transform 0.3s ease",
            "&:hover": {
              borderColor: isDarkMode
                ? "rgba(255, 255, 255, 0.16)"
                : "rgba(0, 0, 0, 0.12)",
            },
          }}
        >
          {/* Text and Details Column */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: { xs: "100%", md: "580px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {/* Step Number Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                px: "14px",
                py: "6px",
                borderRadius: "12px",
                backgroundColor: `${accent}15`,
                border: `1px solid ${accent}35`,
                color: accent,
                fontSize: "13px",
                fontWeight: 800,
                mb: "16px",
              }}
            >
              <Box
                component="span"
                sx={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: accent,
                  color: "#FFFFFF",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: 900,
                }}
              >
                {persianDigit}
              </Box>
              <span>{step.stepLabel || `گام ${persianDigit}`}</span>
            </Box>

            {/* Step Title */}
            <Typography
              variant="title"
              component="h2"
              sx={{
                fontSize: { xs: "22px", sm: "28px", md: "32px" },
                fontWeight: 900,
                lineHeight: 1.35,
                mb: "16px",
                color: "var(--primary-text)",
              }}
            >
              {step.title}
            </Typography>

            {/* Step Description */}
            <Typography
              variant="normalBody"
              sx={{
                fontSize: { xs: "15px", sm: "16px", md: "17px" },
                lineHeight: 1.85,
                color: "var(--secondary-text)",
                mb: "24px",
              }}
            >
              {step.desc}
            </Typography>

            {/* Feature Pills */}
            {step.tags && step.tags.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "8px",
                  mb: "28px",
                }}
              >
                {step.tags.map((tag, tIdx) => {
                  const tagLabel = typeof tag === "object" ? tag.label : tag;
                  const isComingSoon = Boolean(
                    (typeof tag === "object" && tag.isComingSoon) ||
                    tag === "آرشیو فرمول‌ها" ||
                    tagLabel === "آرشیو فرمول‌ها"
                  );

                  return (
                    <Box
                      key={tIdx}
                      sx={{
                        px: "12px",
                        py: "5px",
                        borderRadius: "10px",
                        fontSize: "12px",
                        fontWeight: 600,
                        backgroundColor: isDarkMode
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(0, 0, 0, 0.04)",
                        border: isDarkMode
                          ? "1px solid rgba(255, 255, 255, 0.08)"
                          : "1px solid rgba(0, 0, 0, 0.06)",
                        color: "var(--primary-text)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          backgroundColor: accent,
                        }}
                      />
                      <span>{tagLabel}</span>
                      {isComingSoon && (
                        <SoonStampBadge
                          sx={{
                            fontSize: "10px",
                            py: "1px",
                            px: "5px",
                            mr: "2px",
                          }}
                        />
                      )}
                    </Box>
                  );
                })}
              </Box>
            )}

            {/* Action Link / Button */}
            {step.actionText && targetHref && (
              <ButtonBase
                component={Link}
                href={targetHref}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  px: "20px",
                  py: "12px",
                  borderRadius: "14px",
                  fontSize: "14px",
                  fontWeight: 700,
                  backgroundColor: isDarkMode
                    ? "rgba(255, 255, 255, 0.06)"
                    : "rgba(0, 0, 0, 0.04)",
                  border: isDarkMode
                    ? "1px solid rgba(255, 255, 255, 0.12)"
                    : "1px solid rgba(0, 0, 0, 0.08)",
                  color: "var(--primary-text)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    backgroundColor: accent,
                    borderColor: accent,
                    color: "#FFFFFF",
                    transform: shouldReduceMotion ? "none" : "translateY(-2px)",
                  },
                }}
              >
                <span>{step.actionText}</span>
                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    fontSize: "16px",
                    transform: "rotate(180deg)",
                    lineHeight: 1,
                  }}
                >
                  ➜
                </Box>
              </ButtonBase>
            )}
          </Box>

          {/* Illustration Column with Ambient Lighting Container */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: { xs: "100%", md: "460px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { scale: 1.025, transition: { duration: 0.3 } }
              }
              style={{ width: "100%" }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1 / 1",
                  borderRadius: { xs: "22px", md: "28px" },
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: { xs: "20px", sm: "30px" },
                  backgroundColor: isDarkMode
                    ? "rgba(18, 19, 25, 0.95)"
                    : "rgba(245, 247, 252, 0.8)",
                  border: isDarkMode
                    ? "1px solid rgba(255, 255, 255, 0.08)"
                    : "1px solid rgba(0, 0, 0, 0.05)",
                }}
              >
                {/* Ambient Colored Backlight Aura */}
                <Box
                  aria-hidden="true"
                  sx={{
                    position: "absolute",
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                    backgroundColor: accent,
                    opacity: isDarkMode ? 0.32 : 0.16,
                    filter: "blur(60px)",
                    transform: "translate(-50%, -50%)",
                    top: "50%",
                    left: "50%",
                    pointerEvents: "none",
                  }}
                />

                {/* Subtle Radial Gradient Overlay for Depth */}
                <Box
                  aria-hidden="true"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: isDarkMode
                      ? `radial-gradient(circle at center, ${accent}18 0%, transparent 70%)`
                      : `radial-gradient(circle at center, ${accent}0A 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* The Illustration Asset */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={step.picture}
                    alt={typeof step.title === "string" ? step.title : "راهنمای سیگما"}
                    width={400}
                    height={400}
                    priority={index < 2}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}
