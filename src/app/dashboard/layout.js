import ResponsiveContainer from "@/components/ResponsiveContainer";

export const metadata = {
  title: "داشبورد کاربری",
  description:
    "مشاهده وضعیت پیشرفت تحصیلی، سرفصل‌های فعال، تاریخچه حل سوالات و اعلانات کاربری در سامانه سیگما.",
};

export default function DashBoardLayout({ children }) {
  return (
    <ResponsiveContainer
      component="main"
      maxWidth={1400}
      disableGutters
      dir="rtl"
      sx={{
        py: { xs: "20px", md: "40px" },
        px: { xs: "16px", sm: "24px", md: "30px", lg: "0px" },
        minHeight: "100dvh",
        direction: "rtl",
      }}
    >
      {children}
    </ResponsiveContainer>
  );
}
