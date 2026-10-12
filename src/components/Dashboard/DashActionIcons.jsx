"use client";
import { Box } from "@mui/material";
import Image from "next/image";

export default function DashActionIcons() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          width: 22,
          height: 22,
          cursor: "pointer",
          opacity: 0.85,
          "&:hover": { opacity: 1 },
        }}
      >
        <Image
          src="/svg/table-action-eye.svg"
          alt="مشاهده"
          width={22}
          height={22}
        />
      </Box>
      <Box
        sx={{
          width: 22,
          height: 22,
          cursor: "pointer",
          opacity: 0.85,
          "&:hover": { opacity: 1 },
        }}
      >
        <Image
          src="/svg/table-action-replay.svg"
          alt="تکرار"
          width={22}
          height={22}
        />
      </Box>
    </Box>
  );
}
