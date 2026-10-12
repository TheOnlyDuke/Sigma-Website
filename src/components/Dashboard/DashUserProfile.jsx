"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function DashUserProfile({
  fullName,
  university,
  avatarSrc = "/images/profile-sticker.png",
  compact = false,
}) {
  const avatarSize = compact ? 54 : 62;
  const stickerSize = compact ? 44 : 50;
  const borderRadius = compact ? "18px" : "20px";
  const nameSize = compact ? "16px" : "17px";
  const uniSize = compact ? "13px" : "14px";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        direction: "rtl",
      }}
    >
      <Box sx={{ textAlign: "right", flex: 1, pr: 1.5 }}>
        <Typography
          sx={{
            fontFamily: "inherit",
            fontSize: nameSize,
            fontWeight: 600,
            color: "var(--primary-text)",
            lineHeight: 1.3,
          }}
        >
          {fullName}
        </Typography>
        <Typography
          sx={{
            fontFamily: "inherit",
            fontSize: uniSize,
            fontWeight: 400,
            color: "var(--secondary-text)",
            lineHeight: 1.3,
            mt: 0.5,
          }}
        >
          {university}
        </Typography>
      </Box>

      <Box
        sx={{
          width: avatarSize,
          height: avatarSize,
          borderRadius: borderRadius,
          border: "1px solid var(--border)",
          bgcolor: "background.paper",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Image
          src={avatarSrc}
          alt={fullName || "کاربر"}
          width={stickerSize}
          height={stickerSize}
          style={{ objectFit: "contain" }}
          priority
        />
      </Box>
    </Box>
  );
}
