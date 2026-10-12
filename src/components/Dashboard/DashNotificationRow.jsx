"use client";
import { Box, Typography } from "@mui/material";

const EnvelopeSvg = ({ color = "#B0B0B0" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect
      x="2"
      y="4"
      width="20"
      height="16"
      rx="3"
      stroke={color}
      strokeWidth="1.5"
    />
    <path
      d="M2.5 5.5L12 13L21.5 5.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RoundedCheckbox = ({ checked, onChange }) => (
  <Box
    onClick={(e) => {
      e.stopPropagation();
      onChange?.();
    }}
    sx={{
      width: 24,
      height: 24,
      borderRadius: "6px",
      border: `2px solid ${checked ? "var(--activeBG)" : "#E2E2E2"}`,
      bgcolor: checked ? "var(--activeBG)" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.2s ease",
      flexShrink: 0,
      "&:hover": {
        borderColor: "var(--activeBG)",
      },
    }}
  >
    {checked && (
      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
        <path
          d="M1.5 5L5 8.5L12.5 1.5"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </Box>
);

export function DashNotificationDesktopRow({ notif, isSelected, onToggle }) {
  return (
    <Box
      onClick={() => onToggle(notif.id)}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "110px",
        bgcolor: "background.paper",
        borderRadius: "20px",
        border: "1px solid var(--border)",
        px: "50px",
        boxSizing: "border-box",
        cursor: "pointer",
        direction: "rtl",
        transition: "all 0.25s ease",
        "&:hover": {
          borderColor: "var(--activeBG)",
          transform: "translateY(-2px)",
          boxShadow: "0 6px 16px rgba(70, 43, 239, 0.08)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          minWidth: "170px",
          justifyContent: "flex-start",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EnvelopeSvg />
        </Box>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "inherit",
            color: "var(--primary-text)",
          }}
        >
          {notif.title}
        </Typography>
      </Box>

      <Typography
        sx={{
          minWidth: "120px",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: 400,
          fontFamily: "inherit",
          color: "var(--primary-text)",
          px: 2,
        }}
      >
        {notif.date}
      </Typography>

      <Typography
        sx={{
          flex: 1,
          textAlign: "right",
          pr: 4,
          fontSize: "16px",
          fontWeight: 400,
          fontFamily: "inherit",
          color: "var(--primary-text)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {notif.description}
      </Typography>

      <RoundedCheckbox
        checked={isSelected}
        onChange={() => onToggle(notif.id)}
      />
    </Box>
  );
}

export function DashNotificationMobileRow({ notif, isSelected, onToggle }) {
  return (
    <Box
      onClick={() => onToggle(notif.id)}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 1.5,
        cursor: "pointer",
        direction: "rtl",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <EnvelopeSvg />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            fontFamily: "inherit",
            color: "var(--primary-text)",
            textAlign: "right",
          }}
        >
          {notif.title}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: 400,
          fontFamily: "inherit",
          color: "var(--primary-text)",
          textAlign: "center",
        }}
      >
        {notif.date}
      </Typography>

      <RoundedCheckbox
        checked={isSelected}
        onChange={() => onToggle(notif.id)}
      />
    </Box>
  );
}
