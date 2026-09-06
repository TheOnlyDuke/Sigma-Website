import "./fontiran.css";
import "./globals.css";
import { ThemeProvider } from "./theme/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata = {
  title: "Sigma",
  description: "Where Science meets excietment!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" nighteye="disabled">
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
