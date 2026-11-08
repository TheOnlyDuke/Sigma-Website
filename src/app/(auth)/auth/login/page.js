import LoginView from "@/components/auth/LoginView";

export const metadata = {
  title: "ورود به حساب کاربری",
  description:
    "ورود به حساب کاربری در سیگما با شماره تلفن و کلمه عبور برای ادامه حل چالش‌ها و دسترسی به داشبورد تحصیلی.",
};

export default function LoginPage() {
  return <LoginView />;
}
