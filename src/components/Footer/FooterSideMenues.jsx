import Grid from "@mui/material/Grid";
import FooterMenu from "./FooterMenu";

export default function FooterSideMenues({ menu }) {
  // temporary will be fetched from DB later on
  const MenuesItems = {
    ourTeam: {
      title: "تیم ما",
      items: [
        ["درباره ما", "\\about"],
        ["تماس با ما", "\\about"],
      ],
    },
    pops: {
      title: "مباحث پرطرفدار",
      items: [
        ["انتگرال", "\\learning\\انتگرال"],
        ["مشتق", "\\learning\\مشتق"],
      ],
    },
    products: {
      title: "دیگر محصولات",
      items: [
        ["ویدئو های آموزشی", "\\"],
        ["جزوات و جمع بندی", "\\"],
      ],
    },
    menu: {
      title: "بیشتر",
      items: menu,
    },
  };

  return (
    <Grid
      id="footerLinks"
      container
      spacing={4}
      sx={{ width: { xs: "100%", sm: "50%" } }}
    >
      {Object.keys(MenuesItems).map((key, index) => {
        return (
          <FooterMenu key={index} index={index} menuData={MenuesItems[key]} />
        );
      })}
    </Grid>
  );
}
