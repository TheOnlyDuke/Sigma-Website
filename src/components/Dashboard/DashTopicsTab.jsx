"use client";
import { Box, Typography } from "@mui/material";
import { dashboardTopics, topicsTableHeaders } from "@/utils/dummydatas";
import { DashTopicDesktopRow, DashTopicMobileRow } from "./DashTopicRow";

export default function DashTopicsTab() {
  return (
    <Box sx={{ width: "100%", direction: "rtl" }}>
      {/* Desktop view */}
      <Box sx={{ display: { xs: "none", md: "block" }, width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "150px",
            bgcolor: "var(--activeBG)",
            borderRadius: "20px",
            px: "50px",
            mb: 4,
            boxSizing: "border-box",
            color: "#FFFFFF",
          }}
        >
          <Typography
            sx={{
              width: "26%",
              textAlign: "right",
              fontSize: "19px",
              fontWeight: 700,
              fontFamily: "inherit",
              whiteSpace: "nowrap",
              color: "#FFFFFF",
              pr: 1,
            }}
          >
            {topicsTableHeaders[0]}
          </Typography>
          <Typography
            sx={{
              width: "22%",
              textAlign: "center",
              fontSize: "19px",
              fontWeight: 700,
              fontFamily: "inherit",
              whiteSpace: "nowrap",
              color: "#FFFFFF",
            }}
          >
            {topicsTableHeaders[1]}
          </Typography>
          <Typography
            sx={{
              width: "22%",
              textAlign: "center",
              fontSize: "19px",
              fontWeight: 700,
              fontFamily: "inherit",
              whiteSpace: "nowrap",
              color: "#FFFFFF",
            }}
          >
            {topicsTableHeaders[2]}
          </Typography>
          <Typography
            sx={{
              width: "18%",
              textAlign: "center",
              fontSize: "19px",
              fontWeight: 700,
              fontFamily: "inherit",
              whiteSpace: "nowrap",
              color: "#FFFFFF",
            }}
          >
            {topicsTableHeaders[3]}
          </Typography>
          <Typography
            sx={{
              width: "12%",
              textAlign: "left",
              fontSize: "19px",
              fontWeight: 700,
              fontFamily: "inherit",
              whiteSpace: "nowrap",
              color: "#FFFFFF",
              pl: 1,
            }}
          >
            {topicsTableHeaders[4]}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {dashboardTopics.map((topic) => (
            <DashTopicDesktopRow key={topic.id} topic={topic} />
          ))}
        </Box>
      </Box>

      {/* Mobile view */}
      <Box sx={{ display: { xs: "block", md: "none" }, width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "80px",
            bgcolor: "var(--activeBG)",
            borderRadius: "20px",
            px: 3,
            mb: 3,
            boxSizing: "border-box",
            color: "#FFFFFF",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "inherit",
              textAlign: "right",
              color: "#FFFFFF",
            }}
          >
            {topicsTableHeaders[0]}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "inherit",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            {topicsTableHeaders[2]}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "inherit",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            {topicsTableHeaders[4]}
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            borderRadius: "20px",
            border: "1px solid var(--border)",
            p: 3,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {dashboardTopics.map((topic) => (
            <DashTopicMobileRow key={topic.id} topic={topic} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
