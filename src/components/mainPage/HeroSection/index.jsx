import { Box, Typography, Button } from "@mui/material";
import { heroStyles } from "./styles";
import HeroImage from "./HeroImage";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import Link from "next/link";

export default function HeroSection() {
  return (
    <ResponsiveContainer sx={heroStyles.container} id="hero-section">
      <Box sx={heroStyles.wrapper}>
        <HeroImage />

        <Box className="flexColumn" sx={heroStyles.content}>
          <Typography variant="display" sx={heroStyles.title}>
            یادگـیری مفـاهیم ریاضـی با بازی کـردن
          </Typography>

          <Typography variant="normalBody" sx={heroStyles.description}>
            مجموعه سیگما با استفاده از جدید‌ترین متد ها مباحث غیر قابل فهم ریاضی
            را در حین بازی کردن و حل مثال به شما آموزش می‌دهد.
          </Typography>
          <Link href="/dashboard#topics">
            <Button variant="contained" sx={heroStyles.button}>
              آموزش رو شروع كنيد
            </Button>
          </Link>
        </Box>
      </Box>
    </ResponsiveContainer>
  );
}
