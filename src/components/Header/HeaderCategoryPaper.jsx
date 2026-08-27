import { Typography, SvgIcon } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { ArrowLeft } from "@/utils/icons";
import DotDivider from "../DotDivider";

export default function CategoryPaper({
  title,
  difficulty,
  numOfEpisodes,
  icon,
}) {
  return (
    <Grid
      sx={{
        p: "30px",
        border: "1px solid",
        borderColor: "var(--border)",
        borderRadius: "20px",
        width: "340px",
        direction: "ltr",
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
          "& img": {
            opacity: 0,
            position: "absolute",
          },
          "& .MuiSvgIcon-root": {
            display: "block",
            "& path": {
              stroke: "var(--activeText)",
            },
          },
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
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            "& img": {
              transition: "opacity 0.3s ease",
            },
            "& .MuiSvgIcon-root": {
              display: "none",
            },
            [`${Grid}:hover &`]: {
              "& img": {
                opacity: 0,
                position: "absolute",
              },
              "& .MuiSvgIcon-root": {
                display: "block",
              },
            },
          }}
        >
          <Image src={icon} width={30} height={30} alt={title} />
          <ArrowLeft />
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
          <Typography
            variant="smallBodyCap"
            sx={{ fontSize: "15px", color: "var(--secondary-text)" }}
          >
            {difficulty} <DotDivider /> {numOfEpisodes} مبحث آموزشی
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
