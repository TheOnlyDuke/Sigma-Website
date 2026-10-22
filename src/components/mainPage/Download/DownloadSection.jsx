import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DownloadSectionImage from "../../../../public/images/Download/DownloadSection.png";
import DownloadFeaturesList from "./DownloadFeaturesList";
import DownloadOptions from "./DownloadOptions";
import DownloadAppsRatings from "./DownloadAppsRatings";
import ResponsiveContainer from "@/components/ResponsiveContainer";

export default function DownloadSection() {
  return (
    <Box
      component="section"
      id="download-section"
      sx={{
        width: "100%",
        minHeight: {
          xs: "auto",
          sm: "560px",
          lg: "780px",
          xl: "1080px",
        },
        "@media (min-width: 2560px)": {
          minHeight: "1200px",
        },
        "@media (min-width: 1024px) and (max-width: 1439.95px)": {
          minHeight: "660px",
        },
        py: { xs: "50px", sm: 0 },
        backgroundColor: "var(--activeBG)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        direction: "rtl",
        overflow: "hidden",
      }}
    >
      <ResponsiveContainer
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          py: { xs: 0, sm: "30px", lg: 0 },
          px: { xs: "32px", sm: "28px", lg: "128px" },
          "@media (min-width: 1024px) and (max-width: 1439.95px)": {
            px: "48px",
          },
          "@media (min-width: 2560px)": {
            maxWidth: "1800px !important",
            px: "96px",
          },
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "330px",
              lg: "560px",
            },
            "@media (min-width: 2560px)": {
              width: "760px",
            },
            "@media (min-width: 1024px) and (max-width: 1439.95px)": {
              width: "480px",
            },
            textAlign: "right",
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: {
                xs: "26px",
                sm: "24px",
                lg: "40px",
              },
              "@media (min-width: 2560px)": {
                fontSize: "56px",
              },
              "@media (min-width: 1024px) and (max-width: 1439.95px)": {
                fontSize: "32px",
              },
              fontWeight: 900,
              lineHeight: 1.8,
              color: "var(--activeText)",
            }}
          >
            با اپلیکیشن سیگما،
            <Box component="span" sx={{ display: "block", color: "inherit" }}>
              هر روز ریاضی تمرین کنید
            </Box>
          </Typography>

          <DownloadFeaturesList />
          <DownloadAppsRatings />
          <DownloadOptions />
        </Box>
      </ResponsiveContainer>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "auto",
          maxWidth: {
            sm: "340px",
            lg: "750px",
            xl: "850px",
          },
          "@media (min-width: 2560px)": {
            width: "36vw",
            maxWidth: "1400px",
          },
          "@media (min-width: 1024px) and (max-width: 1439.95px)": {
            maxWidth: "460px",
          },
          overflow: "hidden",
          direction: "ltr",
          display: { xs: "none", sm: "block" },
          pointerEvents: "none",
          userSelect: "none",
          "& .download-mockup-image": {
            height: "100%",
            width: "auto",
            maxWidth: "none",
            objectFit: "contain",
            objectPosition: "left center",
            "@media (min-width: 2560px)": {
              width: "100%",
              objectFit: "cover",
              objectPosition: "left center",
            },
          },
        }}
        aria-hidden="true"
      >
        <Image
          src={DownloadSectionImage}
          alt="اپلیکیشن سیگما بر روی تلفن همراه"
          priority={false}
          className="download-mockup-image"
        />
      </Box>
    </Box>
  );
}

