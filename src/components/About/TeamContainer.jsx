import { Box, Card, Typography } from "@mui/material";
import CardsContainer from "./CardContainer";

export default function TeamContainer({
  teamTitle,
  subtitle,
  icon,
  data,
  teamType,
}) {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "16px", lg: "20px" },
        padding: { xs: "12px 0", lg: "20px 0" },
        width: "100%",
      }}
    >
      <Card
        sx={{
          backgroundColor: "background.paper",
          boxShadow: "none",
          border: "1px solid var(--border)",
          borderRadius: "var(--border-radius)",
          padding: { xs: "16px 20px", lg: "20px 24px" },
          direction: "rtl",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: { xs: 2, sm: 2.5, lg: 3 },
          }}
        >
          {icon && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: 40, lg: 48 },
                height: { xs: 40, lg: 48 },
                borderRadius: "12px",
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                flexShrink: 0,
              }}
            >
              {icon}
            </Box>
          )}
          <Box sx={{ textAlign: "right", minWidth: 0 }}>
            <Typography variant="smallTitle">{teamTitle}</Typography>
            {subtitle && (
              <Typography
                variant="smallBody"
                sx={{ color: "text.secondary", mt: 0.25 }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>
        </Box>
      </Card>
      <CardsContainer data={data} teamType={teamType} />
    </Box>
  );
}
