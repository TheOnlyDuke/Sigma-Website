import { Box } from "@mui/material";
import {
  DownloadSection,
  SubjectIntro,
  QuestionBankPreview,
  IntroductionMenu,
  HeroSection,
} from "@/components/mainPage";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import { IntroMenuDatas } from "@/utils/dummydatas";

export default function Home() {
  const mainPageStyles = {
    "::before": {
      content: `""`,
      width: "100%",
      height: "auto",
      aspectRatio: "1920 / 756",
      position: "absolute",
      top: "200px",
      zIndex: "-1",
      backgroundImage: "url(/svg/herosection.svg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      filter: {
        xs: "blur(7.5vw)",
        md: "blur(5vw)",
      },
    },
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "125px",
  };

  return (
    <Box component="main" sx={mainPageStyles}>
      <ResponsiveContainer
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "100px", sm: "150px" },
          marginBottom: "150px",
        }}
      >
        <HeroSection />
        <IntroductionMenu data={IntroMenuDatas} />
        <SubjectIntro />
        <QuestionBankPreview />
      </ResponsiveContainer>
      <DownloadSection />
    </Box>
  );
}
