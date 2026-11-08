"use client";
import React from "react";
import { PageBackground } from "@/components/common/PageBackground";

/**
 * LegalBackgroundDecor (Compatibility Layer)
 * Forwards to the centralized, reusable PageBackground system using the "legal" preset.
 */
export default function LegalBackgroundDecor(props) {
  return <PageBackground preset="legal" {...props} />;
}
