import { Box } from "@mui/material";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import { LegalContainer } from "@/components/Legal";
import { legalSections } from "@/utils/legalData";
import { PageBackground } from "@/components/common/PageBackground";

export const metadata = {
  title: "قوانین و حریم خصوصی",
  description:
    "نظام‌نامه حقوقی، شرایط و مقررات استفاده، و منشور صیانت از حریم خصوصی و امنیت داده‌ها در پلتفرم آموزشی سیگما.",
};

export default function PrivacyRulesPage() {
  return (
    <Box
      component="main"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Full-bleed thematic page background extending across entire viewport width */}
      <PageBackground preset="legal" />

      {/* Centered Content Container */}
      <ResponsiveContainer
        sx={{
          position: "relative",
          zIndex: 1,
          pt: { xs: "150px", sm: "200px", md: "275px" },
          pb: { xs: "60px", sm: "80px", md: "125px" },
        }}
      >
        <LegalContainer sections={legalSections} />
      </ResponsiveContainer>
    </Box>
  );
}
