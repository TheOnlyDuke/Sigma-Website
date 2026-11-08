import Link from "next/link";
import { Suspense } from "react";
import { Box, Container } from "@mui/material";

export const metadata = {
  title: "احراز هویت",
  description: "ورود یا ثبت‌نام در سامانه آموزش تعاملی ریاضی و علوم سیگما.",
};

export default function AuthLayout({ children }) {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100vw",
        height: "100dvh",
      }}
    >
      <Link
        href="/"
        style={{
          position: "absolute",
          top: "15px",
          left: "30px",
          fontSize: "40px",
          cursor: "pointer",
        }}
      >
        &larr;
      </Link>
      <Container
        sx={{
          my: "150px",
          width: {
            xs: "370px",
            md: "380px",
          },
        }}
        disableGutters
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </Container>
    </Box>
  );
}
