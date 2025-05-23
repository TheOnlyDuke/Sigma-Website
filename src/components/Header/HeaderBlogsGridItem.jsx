import { Grid, Typography, Paper, SvgIcon } from "@mui/material";
import Link from "next/link";

export default function HeaderBlogsItem({ title, description, icon, onClick }) {
  return (
    <Link href={`/blogs/${title}`} onClick={onClick}>
      <Paper
        sx={{
          p: "40px",
          border: "1px solid",
          borderColor: "var(--border)",
          borderRadius: "20px",
          direction: "ltr",
          height: "100%",
          width: "100%",
          backgroundColor: "var(--notActiveBG)",
          boxShadow: "none",
          transition: "background-color 250ms ease-in-out",
          cursor: "pointer",
          "& *": {
            cursor: "inherit",
          },
          "&:hover": {
            backgroundColor: "var(--blackBG)",
            ".MuiTypography-normalBody": {
              color: "var(--activeText)",
            },
            svg: { fill: "var(--notActiveBG)" },
          },
          svg: {
            transition: "fill 1000ms ease-out",
          },
          ".MuiTypography-normalBody": {
            transition: "color 350ms ease-in-out",
          },
        }}
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid
            xs={2}
            sx={{
              width: "fit-content",
              display: "flex",
              alignItems: "center",
            }}
          >
            <SvgIcon sx={{ width: "24px", height: "24px", fill: "none" }}>
              {icon}
            </SvgIcon>
          </Grid>
          <Grid
            xs={10}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              direction: "rtl",
            }}
          >
            <Typography variant="normalBody">{title}</Typography>
            <Typography variant="smallBodyCap">{description}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
}
