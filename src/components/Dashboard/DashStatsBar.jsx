import Grid from "@mui/material/Grid";
import { Card, Typography } from "@mui/material";
import { useAuth } from "@/contexts/AuthContext";

export default function DashStatsBar() {
  const { USER_INFO } = useAuth();

  const stats = [
    {
      value: USER_INFO?.score || 0,
      label: "امتیاز خام شما",
    },
    {
      value: USER_INFO?.rank || "N/A",
      label: "رتبه شما",
    },
    {
      value: USER_INFO?.solved_questions || 0,
      label: "سوالات حل شده",
    },
  ];

  return (
    <Grid
      container
      spacing={3}
      sx={{
        bgcolor: "primary.main",
        borderRadius: "var(--border-radius)",
        justifyContent: "center",
      }}
    >
      {stats.map((stat, index) => (
        <Grid key={index} xs={12} sm={3}>
          <Card
            elevation={2}
            sx={{
              p: 3,
              bgcolor: "transparent",
              boxShadow: "none",
              color: "white",
              textAlign: "center",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <Typography
              variant="smallTitle"
              sx={{ color: "var(--activeText)" }}
            >
              {stat.label}
            </Typography>
            <Typography variant="title" sx={{ color: "var(--activeText)" }}>
              {stat.value}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
