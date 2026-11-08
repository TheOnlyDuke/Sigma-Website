"use client";
import {
  SubmitButton,
  OTPInput,
  AuthNeviLink,
  AuthForm,
} from "@/components/auth";
import { Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { apiClient } from "@/utils/api";

export default function OTPView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const { updateAuth } = useAuth();

  const handleOTPChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError("");

      if (!phone) {
        setError("شماره تلفن نامعتبر است");
        return;
      }

      try {
        const data = await apiClient.verify({
          otp,
          phone_number: phone,
        });

        const userInfo = await apiClient.getProfile(data.token);
        await updateAuth(data.token, userInfo);

        router.push(`/dashboard/`);
      } catch (error) {
        setError(error.message || "کد تایید نامعتبر است");
      }
    },
    [otp, phone, updateAuth, router]
  );

  return (
    <AuthForm onSubmit={handleSubmit}>
      <Typography variant="title" sx={{ marginBottom: "25px" }}>
        کد تایید ارسال شد
      </Typography>
      <Typography variant="normalBodyCap">
        کد ارسال شده به شماره {phone} وارد کنید
      </Typography>
      <OTPInput length={4} onChange={handleOTPChange} />
      <SubmitButton
        isLoading={otp.length !== 4}
        text="ورود به وبسایت"
        animation={false}
      />
      <AuthNeviLink text="ورود با رمز عبور" des="/auth/login" />
    </AuthForm>
  );
}

