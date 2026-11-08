import "./fontiran.css";
import "./globals.css";
import { ThemeProvider } from "./theme/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sigma.ir"),
  title: {
    default: "سیگما | پلتفرم یادگیری تعاملی ریاضی و علوم",
    template: "%s | سیگما",
  },
  description:
    "سیگما؛ سامانه تعاملی آموزش و حل چالش‌های مفهومی ریاضی، ویدیوهای تدریس مباحث دانشگاهی و بانک سوالات چندمرحله‌ای.",
  keywords: [
    "آموزش ریاضی",
    "انتگرال",
    "مشتق",
    "حسابان",
    "سیگما",
    "یادگیری تعاملی",
    "بانک سوالات ریاضی",
    "دانشگاه",
  ],
  authors: [{ name: "تیم سیگما" }],
  creator: "سیگما",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "سیگما",
    title: "سیگما | پلتفرم یادگیری تعاملی ریاضی و علوم",
    description:
      "سیگما؛ سامانه تعاملی آموزش و حل چالش‌های مفهومی ریاضی، ویدیوهای تدریس مباحث دانشگاهی و بانک سوالات چندمرحله‌ای.",
  },
  twitter: {
    card: "summary_large_image",
    title: "سیگما | پلتفرم یادگیری تعاملی ریاضی و علوم",
    description:
      "سیگما؛ سامانه تعاملی آموزش و حل چالش‌های مفهومی ریاضی و ویدیوهای تدریس.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" nighteye="disabled">
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
