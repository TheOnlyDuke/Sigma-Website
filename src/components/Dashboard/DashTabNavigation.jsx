"use client";
import { Box, Button, Typography } from "@mui/material";
import { dashboardNavItems } from "@/utils/dummydatas";

const BookIcon = ({ color }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path
      d="M11 5.53851C9.48898 4.18309 7.52986 3.43471 5.5 3.43751C4.53567 3.43751 3.60983 3.60251 2.75 3.90684V16.9693C3.63332 16.6577 4.56332 16.499 5.5 16.5C7.61292 16.5 9.54067 17.2948 11 18.601M11 5.53851C12.511 4.18301 14.4701 3.43462 16.5 3.43751C17.4643 3.43751 18.3902 3.60251 19.25 3.90684V16.9693C18.3667 16.6577 17.4367 16.499 16.5 16.5C14.4701 16.4972 12.511 17.2456 11 18.601M11 5.53851V18.601"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NotifIcon = ({ color }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path
      d="M13.6189 15.6585C15.3268 15.4563 17.0049 15.0532 18.6184 14.4577C17.252 12.9441 16.4969 10.9766 16.4999 8.9375V8.25C16.4999 6.79131 15.9205 5.39236 14.889 4.36091C13.8576 3.32946 12.4586 2.75 10.9999 2.75C9.54126 2.75 8.14231 3.32946 7.11086 4.36091C6.07941 5.39236 5.49995 6.79131 5.49995 8.25V8.9375C5.50271 10.9767 4.74735 12.9442 3.38062 14.4577C4.9692 15.0443 6.64395 15.4523 8.38103 15.6585M13.6189 15.6585C11.879 15.8649 10.1209 15.8649 8.38103 15.6585M13.6189 15.6585C13.751 16.0709 13.7838 16.5086 13.7147 16.9361C13.6457 17.3635 13.4766 17.7687 13.2214 18.1184C12.9661 18.4682 12.6319 18.7528 12.2459 18.949C11.8599 19.1452 11.433 19.2474 10.9999 19.2474C10.5669 19.2474 10.14 19.1452 9.75402 18.949C9.368 18.7528 9.03376 18.4682 8.77852 18.1184C8.52327 17.7687 8.35423 17.3635 8.28516 16.9361C8.21609 16.5086 8.24894 16.0709 8.38103 15.6585"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const iconMap = {
  Mobahes: BookIcon,
  Notif: NotifIcon,
};

export default function DashTabNavigation({ activeTab, onTabChange }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 1.5, md: 2 },
        width: "100%",
        direction: "rtl",
      }}
    >
      {dashboardNavItems.map((item) => {
        const isActive = activeTab === item.tabIndex;
        const IconComponent = iconMap[item.icon];
        const iconColor = isActive ? "#FFFFFF" : "var(--primary-text)";

        return (
          <Button
            key={item.id}
            variant="contained"
            fullWidth
            onClick={() => onTabChange(item.tabIndex)}
            sx={{
              width: "100%",
              height: { xs: "52px", md: "65px" },
              bgcolor: isActive ? "#000000" : "transparent",
              color: isActive ? "#FFFFFF" : "var(--primary-text)",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
              gap: "14px",
              direction: "rtl",
              borderRadius: "10px",
              px: "22px",
              fontFamily: "inherit",
              fontSize: "16px",
              fontWeight: 500,
              boxShadow: "none",
              "&:hover": {
                bgcolor: isActive ? "#000000" : "rgba(0, 0, 0, 0.04)",
                color: isActive ? "#FFFFFF" : "var(--primary-text)",
                boxShadow: "none",
              },
              transition: "background-color 0.2s ease, color 0.2s ease",
            }}
          >
            {IconComponent && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <IconComponent color={iconColor} />
              </Box>
            )}
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                color: "inherit",
                fontFamily: "inherit",
                lineHeight: 1,
              }}
            >
              {item.label}
            </Typography>
          </Button>
        );
      })}
    </Box>
  );
}
