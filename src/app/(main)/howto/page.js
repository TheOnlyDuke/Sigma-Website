import ResponsiveContainer from "@/components/ResponsiveContainer";
import { HowToContainer } from "@/components/HowTo";
import { howToSteps } from "@/utils/dummydatas";

export const metadata = {
  title: "آموزش نحوه استفاده | سیگما",
  description:
    "راهنمای جامع تعاملی استفاده از سامانه آموزشی سیگما، شرکت در چالش‌های مفهومی و دسترسی به ویدیوها و جزوات تخصصی ریاضی.",
};

export default function HowToPage() {
  return (
    <ResponsiveContainer
      component="main"
      sx={{
        py: { xs: "60px", sm: "80px", md: "110px" },
      }}
    >
      <HowToContainer steps={howToSteps} />
    </ResponsiveContainer>
  );
}

