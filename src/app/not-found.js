import Link from "next/link";
import { Button, Typography, Container } from "@mui/material";

export const metadata = {
  title: "صفحه مورد نظر یافت نشد (۴۰۴)",
  description:
    "صفحه‌ای که به دنبال آن بودید در سامانه سیگما یافت نشد یا ممکن است حذف شده باشد.",
};

const Custom404 = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography
        variant="display"
        component="h1"
        sx={{ fontSize: "4rem", mb: 2 }}
      >
        404
      </Typography>
      <Typography variant="title" component="h2" sx={{ mb: 4 }}>
        آمممم... شما اینجا چیکار میکنی؟
        <br /> مطمئنی آدرس رو درست وارد کردی؟
      </Typography>
      <Link href="/" passHref>
        <Button variant="text" color="primary" sx={{ mt: 2 }}>
          برگشت به صفحه نخست
        </Button>
      </Link>
    </Container>
  );
};

export default Custom404;
