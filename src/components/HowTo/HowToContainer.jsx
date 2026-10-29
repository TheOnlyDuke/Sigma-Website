"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Box } from "@mui/material";
import HowToHero from "./HowToHero";
import HowToStepCard from "./HowToStepCard";
import HowToTimeline from "./HowToTimeline";
import HowToCta from "./HowToCta";

/**
 * HowToContainer orchestrates the step-by-step tutorial experience,
 * including scroll spy tracking and quick navigation across steps.
 */
export default function HowToContainer({ steps = [] }) {
  const [activeStep, setActiveStep] = useState(0);

  // Smooth scroll to a chosen step card
  const handleSelectStep = useCallback((stepIndex) => {
    setActiveStep(stepIndex);
    const targetElement = document.getElementById(`step-${stepIndex + 1}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Track the active step card as the user scrolls
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      // If near the top hero, highlight step 1
      if (window.scrollY < 250) {
        setActiveStep(0);
        return;
      }

      // Check which step card is currently closest to the upper-third of the screen
      let currentIdx = 0;
      let minDistance = Infinity;
      const targetY = window.innerHeight * 0.35;

      steps.forEach((step, index) => {
        const element = document.getElementById(step.id || `step-${index + 1}`);
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - targetY);
        if (distance < minDistance) {
          minDistance = distance;
          currentIdx = index;
        }
      });

      setActiveStep(currentIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [steps]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Hero Header with interactive quick navigation */}
      <HowToHero
        steps={steps}
        activeStep={activeStep}
        onSelectStep={handleSelectStep}
      />

      {/* Sequential Tutorial Steps */}
      <Box
        component="section"
        aria-label="مراحل آموزش"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const nextStep = steps[index + 1];

          return (
            <React.Fragment key={step.id || index}>
              <HowToStepCard step={step} index={index} />
              {!isLast && (
                <HowToTimeline
                  nextStepNumber={index + 2}
                  accentColor={nextStep?.accentColor || step.accentColor}
                />
              )}
            </React.Fragment>
          );
        })}
      </Box>

      {/* Closing Call to Action Banner */}
      <HowToCta />
    </Box>
  );
}
