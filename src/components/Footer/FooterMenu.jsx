import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Link from "next/link";

export default function FooterMenu({ menuData, index }) {
  const titlesStyle = {
    fontSize: "20px",
    fontWeight: "600",
    color: "var(--activeText)",
    marginBottom: "35px",
  };

  return (
    <Grid
      xs={6}
      sm={4}
      sx={{
        display: {
          xs: "block",
          sm: index === 3 ? "none" : "block",
        },
      }}
    >
      <Box id="footerLogo" sx={titlesStyle}>
        {menuData.title}
      </Box>
      <Box component="ul" aria-labelledby="footerLogo">
        {menuData.items.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item[1]} style={{ cursor: "pointer" }}>
                {item[0]}
              </Link>
            </li>
          );
        })}
      </Box>
    </Grid>
  );
}
