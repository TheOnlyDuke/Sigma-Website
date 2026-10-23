"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Box, CircularProgress } from "@mui/material";

export default function AuthGuard({ children }) {
  const { USER_INFO, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !USER_INFO) {
      router.replace("/auth/login");
    }
  }, [isLoading, USER_INFO, router]);

  if (isLoading || !USER_INFO) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          width: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return children;
}
