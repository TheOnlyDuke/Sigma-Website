import { Box } from "@mui/material";
import Image from "next/image";
import { heroStyles } from "./styles";

export default function HeroImage() {
  return (
    <Box sx={heroStyles.imageContainer}>
      <Image
        src="/images/herosection.png"
        fill
        sizes="(max-width: 600px) 100vw, 550px"
        alt="ارشمیدس، پدر علم ریاضی"
        priority
      />
    </Box>
  );
}
