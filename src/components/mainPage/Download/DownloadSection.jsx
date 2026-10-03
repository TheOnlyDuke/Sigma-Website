import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DownloadSectionImage from "../../../../public/images/Download/DownloadSection.png";
import DownloadFeaturesList from "./DownloadFeaturesList";
import DownloadOptions from "./DownloadOptions";
import DownloadAppsRatings from "./DownloadAppsRatings";

export default function DownloadSection({}) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "1080px" },
        py: { xs: "60px", md: 0 },
        backgroundColor: "var(--activeBG)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "flex-start" },
        direction: "rtl",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "500px", md: "600px" },
          px: { xs: "20px", sm: "40px", md: "60px" },
          zIndex: 1,
        }}
      >
        <Typography variant="title" sx={{ color: "var(--activeText)" }}>
          با اپلیکیشن سیگما،
          <span style={{ display: "block", color: "inherit" }}>
            {" "}
            هر روز ریاضی تمرین کنید
          </span>
        </Typography>
        <DownloadFeaturesList />
        <DownloadAppsRatings />
        <DownloadOptions />
      </Box>
      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          top: 0,
          left: 0,
          display: { xs: "none", md: "block" },
          mt: { xs: "40px", md: 0 },
        }}
      >
        <Image
          src={DownloadSectionImage}
          alt="Android sample picture"
          width={800}
          height={1080}
          style={{ width: "100%", height: "auto", maxWidth: "800px" }}
        />
      </Box>
    </Box>
  );
}
