import { redirect } from "next/navigation";

export const metadata = {
  title: "بانک سوالات تعاملی",
  description:
    "حل چالش‌های مفهومی و چندمرحله‌ای، آزمون‌های تعاملی و ثبت امتیاز در سامانه سیگما.",
};

export default function QuestionsLandingPage() {
  redirect("/dashboard#topics");
}
