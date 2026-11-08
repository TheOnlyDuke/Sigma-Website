"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Box } from "@mui/material";
import "katex/dist/katex.min.css";
import LegalHeader from "./LegalHeader";
import LegalNavigation from "./LegalNavigation";
import LegalSectionCard from "./LegalSectionCard";
import LegalFooterNotice from "./LegalFooterNotice";
import { legalSections } from "@/utils/legalData";

/**
 * LegalContainer coordinates the mathematical-legal codex presentation,
 * handling anchor resolution, initial page load fragment jumps, and hash state syncing.
 */
export default function LegalContainer({ sections = legalSections }) {
  const [activeAnchor, setActiveAnchor] = useState("rules");
  const isInitialScrollDone = useRef(false);

  // Smoothly scroll to an anchor target accounting for the fixed sticky navbar
  const scrollToAnchor = useCallback((targetId, smooth = true) => {
    if (!targetId || typeof window === "undefined") return;
    const cleanId = targetId.replace(/^#/, "");
    const element = document.getElementById(cleanId);

    if (element) {
      element.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "start",
      });

      // Update URL hash without causing full page reload
      if (window.location.hash !== `#${cleanId}`) {
        window.history.pushState(null, "", `#${cleanId}`);
      }

      // If the target is one of the main sections, update active tab
      if (cleanId === "rules" || cleanId === "privacy") {
        setActiveAnchor(cleanId);
      } else if (cleanId.startsWith("rule-")) {
        setActiveAnchor("rules");
      } else if (cleanId.startsWith("priv-")) {
        setActiveAnchor("privacy");
      }
    }
  }, []);

  // Handle URL hash on initial load, page refresh, and hash changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const performHashScroll = (smooth = false) => {
      const hash = window.location.hash;
      if (hash) {
        const cleanId = hash.replace(/^#/, "");
        scrollToAnchor(cleanId, smooth);
      }
    };

    // Delay slightly on initial mount to allow fonts, layout, and images to settle
    const timer = setTimeout(() => {
      performHashScroll(false);
      isInitialScrollDone.current = true;
    }, 120);

    const handleHashChange = () => {
      performHashScroll(true);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [scrollToAnchor]);

  // Track the active section (rules vs privacy) as the user scrolls
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const rulesEl = document.getElementById("rules");
      const privacyEl = document.getElementById("privacy");
      if (!rulesEl || !privacyEl) return;

      const triggerY = window.innerHeight * 0.35;
      const privRect = privacyEl.getBoundingClientRect();

      // If the privacy section has scrolled into upper viewport, switch active tab to privacy
      if (privRect.top <= triggerY) {
        setActiveAnchor("privacy");
      } else {
        setActiveAnchor("rules");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveAnchor("rules");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Formal Codex Header */}
      <LegalHeader />

      {/* Dual Section & Article Switcher */}
      <LegalNavigation
        activeAnchor={activeAnchor}
        onSelectAnchor={(id) => scrollToAnchor(id, true)}
        sections={sections}
      />

      {/* Main Legal Sections Stream (#rules & #privacy) */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {sections.map((section) => (
          <LegalSectionCard key={section.id} section={section} />
        ))}
      </Box>

      {/* Statutory Footer Notice & Contacts */}
      <LegalFooterNotice onScrollToTop={handleScrollToTop} />
    </Box>
  );
}
