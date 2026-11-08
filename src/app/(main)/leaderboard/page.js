import { Box } from "@mui/material";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import {
  LeaderboardHero,
  LeaderboardPodiumPreview,
  LeaderboardTablePreview,
  LeaderboardRoadmap,
} from "@/components/Leaderboard";

export const metadata = {
  title: "جدول رتبه‌بندی و رقابت‌ها",
  description:
    "جدول برترین دانشجویان و رتبه‌بندی سراسری حل چالش‌های ریاضی سیگما؛ به زودی پس از پایان فاز اول و ورود دانشجویان سراسر کشور.",
};

export default function LeaderboardPage() {
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ResponsiveContainer
        sx={{
          py: { xs: "60px", sm: "80px", md: "100px" },
          px: { xs: "20px", sm: "32px", md: "48px", lg: "64px" },
        }}
      >
        <LeaderboardHero />
        <LeaderboardPodiumPreview />
        <LeaderboardTablePreview />
        <LeaderboardRoadmap />
      </ResponsiveContainer>
    </Box>
  );
}
