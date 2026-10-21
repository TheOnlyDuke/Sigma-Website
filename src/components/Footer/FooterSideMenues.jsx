import React from "react";
import { Box } from "@mui/material";
import FooterMenu from "./FooterMenu";

export default function FooterSideMenues({ menu }) {
  const menusList = [
    {
      id: "ourTeam",
      title: "تیم ما",
      items: [
        ["درباره ما", "/about"],
        ["تماس با ما", "/about"],
      ],
      order: { xs: 1, sm: 1 },
      isMobileOnly: false,
    },
    {
      id: "products",
      title: "دیگر محصولات",
      items: [
        ["ویدئو های آموزشی", "/"],
        ["جزوات و جمع بندی", "/"],
      ],
      order: { xs: 2, sm: 3 },
      isMobileOnly: false,
    },
    {
      id: "pops",
      title: "مباحث پرطرفدار",
      items: [
        ["انتگرال", "/topics/integral"],
        ["مشتق", "/topics/derivative"],
      ],
      order: { xs: 3, sm: 2 },
      isMobileOnly: false,
    },
    {
      id: "menu",
      title: "بیشتر",
      items: [
        ["حریم خصوصی", "/privacy&rules#privacy"],
        ["قوانین و شرایط", "/privacy&rules#rules"],
        ["اموزش نحوه استفاده", "/howto"],
      ],
      order: { xs: 4, sm: 4 },
      isMobileOnly: true,
    },
  ];

  return (
    <Box
      id="footerLinks"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" },
        columnGap: { xs: "20px", sm: "28px", md: "36px", lg: "48px" },
        rowGap: { xs: "40px", sm: 0 },
        flex: { xs: "1 1 100%", sm: "1 1 auto", md: "0 1 560px", lg: "0 1 600px" },
        maxWidth: { xs: "100%", sm: "520px", md: "560px", lg: "600px" },
        width: "100%",
      }}
    >
      {menusList.map((menuItem, index) => (
        <FooterMenu
          key={menuItem.id}
          index={index}
          menuData={menuItem}
          order={menuItem.order}
          isMobileOnly={menuItem.isMobileOnly}
        />
      ))}
    </Box>
  );
}


