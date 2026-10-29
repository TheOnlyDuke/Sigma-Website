"use client";
import React from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

/**
 * HowToHero renders the introduction header and interactive quick-jump step navigation.
 */
export default function HowToHero({ steps = [], activeStep = 0, onSelectStep }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Box
      component="header"
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: { xs: "50px", sm: "70px", md: "90px" },
      }}
    >
      {/* Decorative Pill Badge */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            px: "18px",
            py: "8px",
            borderRadius: "999px",
            background: "rgba(70, 43, 239, 0.08)",
            border: "1px solid rgba(70, 43, 239, 0.18)",
            color: "var(--activeBG)",
            fontSize: "14px",
            fontWeight: 700,
            mb: "20px",
          }}
        >
          <Box
            sx={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--activeBG)",
              boxShadow: "0 0 10px var(--activeBG)",
            }}
          />
          <span>راهنمای جامع تعاملی سیگما</span>
        </Box>
      </motion.div>

      {/* Main Page Title */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <Typography
          variant="title"
          component="h1"
          sx={{
            fontSize: { xs: "30px", sm: "40px", md: "48px" },
            fontWeight: 950,
            lineHeight: { xs: 1.3, md: 1.25 },
            mb: "18px",
            color: "var(--primary-text)",
          }}
        >
          آموزش نحوه استفاده از سامانه
        </Typography>
      </motion.div>

      {/* Subtitle / Value Proposition */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Typography
          variant="normalBody"
          sx={{
            maxWidth: "760px",
            fontSize: { xs: "15px", sm: "17px" },
            color: "var(--secondary-text)",
            lineHeight: 1.85,
            mb: { xs: "36px", md: "48px" },
            px: "16px",
          }}
        >
          مسیر ۶ مرحله‌ای آموزش تعاملی، استدلال گام‌به‌گام و تسلط عمیق بر مباحث
          ریاضیات دانشگاهی و کنکور با پلتفرم آموزشی سیگما.
        </Typography>
      </motion.div>

      {/* Interactive Quick-Jump Navigation Bar */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ width: "100%", maxWidth: "980px" }}
      >
        <Box
          component="nav"
          aria-label="مراحل راهنمای استفاده"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            direction: "rtl",
            gap: { xs: "8px", sm: "10px" },
            p: { xs: "8px", sm: "10px" },
            borderRadius: "20px",
            backgroundColor: "rgba(128, 128, 128, 0.06)",
            border: "1px solid var(--border)",
            backdropFilter: "blur(10px)",
          }}
        >
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            const persianNums = ["۱", "۲", "۳", "۴", "۵", "۶"];
            const persianDigit = persianNums[idx] || String(idx + 1);

            return (
              <ButtonBase
                key={step.id || idx}
                onClick={() => onSelectStep(idx)}
                sx={{
                  display: "inline-flex",
                  flexDirection: "row",
                  direction: "rtl",
                  alignItems: "center",
                  gap: "8px",
                  px: { xs: "12px", sm: "16px" },
                  py: { xs: "8px", sm: "10px" },
                  borderRadius: "14px",
                  fontSize: { xs: "13px", sm: "14px" },
                  fontWeight: isActive ? 800 : 600,
                  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                  backgroundColor: isActive
                    ? "var(--activeBG)"
                    : "transparent",
                  color: isActive ? "#FFFFFF" : "var(--primary-text)",
                  border: isActive
                    ? "1px solid var(--activeBG)"
                    : "1px solid transparent",
                  "&:hover": {
                    backgroundColor: isActive
                      ? "var(--activeBG)"
                      : "rgba(128, 128, 128, 0.12)",
                    transform: shouldReduceMotion ? "none" : "translateY(-1px)",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    fontWeight: 900,
                    backgroundColor: isActive
                      ? "rgba(255, 255, 255, 0.25)"
                      : "rgba(128, 128, 128, 0.15)",
                    color: isActive ? "#FFFFFF" : "var(--primary-text)",
                  }}
                >
                  {persianDigit}
                </Box>
                <span>{step.shortTitle || step.stepLabel}</span>
              </ButtonBase>
            );
          })}
        </Box>
      </motion.div>
    </Box>
  );
}

