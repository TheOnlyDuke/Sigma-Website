import OTPView from "@/components/auth/OTPView";

export const metadata = {
  title: "ورود با رمز یک‌بار مصرف",
  description:
    "تایید شماره تلفن و دریافت رمز عبور یک‌بار مصرف (OTP) برای ورود سریع و امن به سیگما.",
};

export default function OTPPage() {
  return <OTPView />;
}
