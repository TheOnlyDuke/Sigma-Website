"use client";
import { SubmitButton, OTPInput, AuthForm } from "@/components/auth";
import { Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { apiClient } from "@/utils/api";

export default function VerifyView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { updateAuth } = useAuth();

  const handleOTPChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError("");
      setIsLoading(true);

      if (!phone) {
        setError("شماره تلفن نامعتبر است");
        setIsLoading(false);
        return;
      }

      try {
        const data = await apiClient.verify({
          otp,
          phone_number: phone,
        });
        const userInfo = await apiClient.getProfile(data.access_token);
        await updateAuth(data.access_token, data.refresh_token, userInfo);

        router.push(`/dashboard/`);
      } catch (error) {
        setError(error.message || "کد تایید نامعتبر است");
      } finally {
        setIsLoading(false);
      }
    },
    [otp, phone, updateAuth, router]
  );

  return (
    <AuthForm onSubmit={handleSubmit}>
      <Typography variant="title" sx={{ marginBottom: "25px" }}>
        ورود به سیگما
      </Typography>
      <Typography variant="normalBodyCap">
        کد تایید به شماره {phone} ارسال شد
      </Typography>
      <OTPInput length={4} onChange={handleOTPChange} />
      <SubmitButton
        isLoading={isLoading}
        animation={false}
        text="بررسی کد تایید"
      />
      {error && <Typography color="error">{error}</Typography>}
    </AuthForm>
  );
}

