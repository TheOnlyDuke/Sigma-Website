import { GlobeIconNew } from "@/utils/icons";
import { Box, Typography } from "@mui/material";

export default function IMItems({ direc, title, desc, picture }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          sm: direc === "rtl" ? "row" : "row-reverse",
        },
      }}
    >
      <Box
        sx={{
          justifyContent: "space-between",
          direction: "rtl",
          width: {
            sx: "100%",
            sm: "475px",
          },
        }}
      >
        <Typography
          variant="title"
          sx={{
            marginBottom: "30px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {title}
        </Typography>
        <Typography variant="normalBodyCap">{desc}</Typography>
      </Box>
      {picture}
    </Box>
  );
}
