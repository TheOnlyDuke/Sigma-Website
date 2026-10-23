"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function ViewAllButton() {
  const router = useRouter();
  return (
    <Button
      sx={{
        position: { sm: "absolute" },
        bottom: { sm: "25px" },
        left: { sm: 0 },
        right: { sm: 0 },
        margin: { xs: " 30px auto 0 auto", sm: undefined },
        width: "235px",
        zIndex: 999,
      }}
      onClick={() => {
        router.push("/dashboard#topics");
      }}
    >
      مشاهده همه سوالات
    </Button>
  );
}
