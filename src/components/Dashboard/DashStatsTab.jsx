"use client";
import { Box } from "@mui/material";
import DashStatsBar from "./DashStatsBar";
import DashStatsTable from "./DashStatsTable";
import { records } from "@/utils/dummydatas";

export default function DashStatsTab() {
  return (
    <Box sx={{ width: "100%" }}>
      <DashStatsBar />
      <DashStatsTable data={records} />
    </Box>
  );
}
