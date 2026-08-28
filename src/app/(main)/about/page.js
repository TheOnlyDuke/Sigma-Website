import { Box, Stack, Typography } from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import TeamContainer from "@/components/About/TeamContainer";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import { staffData } from "@/utils/dummydatas";

export const metadata = {
  title: "درباره ما | سیگما",
  description:
    "با تیم توسعه‌دهندگان و طراحان بانک سوال سیگما آشنا شوید. تیمی متشکل از دانشجویان و متخصصان ریاضی که در مسیر ساخت آینده‌ای بهتر برای آموزش ریاضی تلاش می‌کنند.",
};

export default function AboutUsPage() {
  return (
    <ResponsiveContainer
      component="main"
      maxWidth={1600}
      sx={{ marginTop: "130px" }}
    >
      <Stack spacing={1} sx={{ mb: { xs: 4, lg: 6 }, direction: "rtl" }}>
        <Typography
          variant="title"
          sx={{ fontSize: { xs: "28px", sm: "32px", lg: "40px" } }}
        >
          درباره{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            سیگما
          </Box>
        </Typography>
        <Typography
          variant="normalBody"
          sx={{ color: "text.secondary", maxWidth: "720px" }}
        >
          سیگما حاصل تلاش جمعی از دانشجویان و علاقه‌مندان ریاضی است که با هدف
          ساده‌سازی یادگیری و ایجاد یک بستر رقابتی سالم گرد هم آمده‌اند. در
          ادامه با تیم ما بیشتر آشنا شوید.
        </Typography>
      </Stack>

      <TeamContainer
        teamTitle="توسعه‌دهندگان"
        subtitle="کسانی که سیگما را می‌سازند و توسعه می‌دهند"
        icon={<CodeRoundedIcon fontSize="small" />}
        data={staffData.devs}
        teamType="devs"
      />

      <TeamContainer
        teamTitle="طراحان بانک سوال"
        subtitle="کارشناسانی که محتوای آموزشی را طراحی می‌کنند"
        icon={<EditNoteRoundedIcon fontSize="small" />}
        data={staffData.question}
        teamType="question"
      />
    </ResponsiveContainer>
  );
}
