import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function FooterBottomLine({ menu }) {
  return (
    <Grid
      xs={12}
      id="footerLisence&RulesBox"
      container
      sx={{
        height: "fit-content",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid xs={12} sm={7} id="footerLisence">
        <Typography variant="smallBody">
          ©️ 1404 - تمامی حقوق این وبسایت متعلق به تیم سیگما می‌باشد.
        </Typography>
      </Grid>
      <Grid
        id="footerRules&Etc"
        xs={5}
        container
        sx={{
          justifyContent: "space-evenly",
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
      >
        {menu.map((each, index) => (
          <Typography variant="smallBody" key={index}>
            <Link href={each[1]} style={{ cursor: "pointer" }}>
              {each[0]}
            </Link>
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
}
