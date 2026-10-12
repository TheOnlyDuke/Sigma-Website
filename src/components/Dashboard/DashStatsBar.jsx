"use client";
import { Box, Typography } from "@mui/material";
import { useAuth } from "@/contexts/AuthContext";
import { mockUserData } from "@/utils/dummydatas";

export default function DashStatsBar() {
  const { USER_INFO } = useAuth();

  const stats = [
    {
      value: USER_INFO?.score || mockUserData.score,
      labelDesktop: "امتیاز خالص شما",
      labelMobile: "امتیاز شما",
    },
    {
      value: USER_INFO?.rank || mockUserData.rank,
      labelDesktop: "رتبه شما",
      labelMobile: "رتبه شما",
    },
    {
      value: USER_INFO?.solved_questions || mockUserData.solved_questions,
      labelDesktop: "سوالات حل شده",
      labelMobile: "سوالات حل شده",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 160, md: 218 },
        bgcolor: "var(--activeBG)",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        px: { xs: 2, sm: 4, md: 6 },
        boxSizing: "border-box",
        direction: "rtl",
      }}
    >
      {stats.map((stat, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            flex: 1,
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "14px", sm: "16px", md: "17px" },
              fontWeight: 500,
              fontFamily: "inherit",
              lineHeight: 1.4,
            }}
          >
            <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
              {stat.labelDesktop}
            </Box>
            <Box component="span" sx={{ display: { xs: "inline", sm: "none" } }}>
              {stat.labelMobile}
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "28px", sm: "34px", md: "40px" },
              fontWeight: 900,
              fontFamily: "inherit",
              mt: { xs: 1, md: 1.5 },
              lineHeight: 1.2,
            }}
          >
            {stat.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
