"use client";
import { useState } from "react";
import { Box } from "@mui/material";
import { dashboardNotifications } from "@/utils/dummydatas";
import {
  DashNotificationDesktopRow,
  DashNotificationMobileRow,
} from "./DashNotificationRow";

export default function DashNotificationsTab() {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const toggleSelect = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <Box sx={{ width: "100%", direction: "rtl" }}>
      {/* Desktop view */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          gap: 3,
          width: "100%",
        }}
      >
        {dashboardNotifications.map((notif) => (
          <DashNotificationDesktopRow
            key={notif.id}
            notif={notif}
            isSelected={selectedIds.has(notif.id)}
            onToggle={toggleSelect}
          />
        ))}
      </Box>

      {/* Mobile view */}
      <Box sx={{ display: { xs: "block", md: "none" }, width: "100%" }}>
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
            gap: 2.5,
          }}
        >
          {dashboardNotifications.map((notif) => (
            <DashNotificationMobileRow
              key={notif.id}
              notif={notif}
              isSelected={selectedIds.has(notif.id)}
              onToggle={toggleSelect}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
