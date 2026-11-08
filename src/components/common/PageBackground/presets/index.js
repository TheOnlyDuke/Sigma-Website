import legalPreset from "./legalPreset";

/**
 * Registry of available visual presets for PageBackground.
 * New presets (e.g. learning, catalog, etc.) can be added here without modifying the engine.
 */
export const presets = {
  legal: legalPreset,
};

export default presets;

