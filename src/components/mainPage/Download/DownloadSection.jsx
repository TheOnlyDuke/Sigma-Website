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
        height: { xs: "780px", sm: "1080px" },
        backgroundColor: "var(--activeBG)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        direction: "rtl",
      }}
    >
      <Box sx={{ width: { sx: "350px", sm: "100%" }, p: "25px" }}>
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
          position: "absolute",
          top: 0,
          left: 0,
          display: { xs: "none", sm: "block" },
        }}
      >
        <Image
          src={DownloadSectionImage}
          alt="َAndroid sample picture"
          width={800}
          height={1080}
        />
      </Box>
    </Box>
  );
}
