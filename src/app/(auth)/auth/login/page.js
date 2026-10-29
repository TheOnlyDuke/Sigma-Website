"use client";

import { TextField, Typography } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import {
  SubmitButton,
  PhoneField,
  AuthNeviLink,
  AuthForm,
} from "@/components/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { apiClient } from "@/utils/api";

function LoginPage() {
  const router = useRouter();
  const { updateAuth, USER_INFO, isLoading: isAuthLoading } = useAuth();

  useEffect(() => {
    if (!isAuthLoading && USER_INFO) {
      router.replace("/dashboard");
    }
  }, [isAuthLoading, USER_INFO, router]);
  const [error, setError] = useState("");
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    phoneNumber: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError("");
      setIsLoadingLogin(true);

      try {
        const data = await apiClient.login({
          phone_number: formData.phoneNumber,
          password: formData.password,
        });

        const userInfo = await apiClient.getProfile(data.access_token);
        await updateAuth(data.access_token, data.refresh_token, userInfo);

        router.push("/dashboard/");
      } catch (error) {
        setError(error.message || "ورود موفقیت آمیز نبود");
      } finally {
        setIsLoadingLogin(false);
      }
    },
    [formData, router, updateAuth]
  );

  return (
    <AuthForm onSubmit={handleSubmit}>
      <Typography
        variant="title"
        sx={{
          mb: 3,
          marginBottom: "50px",
        }}
      >
        ورود به سیگما
      </Typography>
      <PhoneField value={formData.phoneNumber} onChange={handleChange} />
      <TextField
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
        label="گذرواژه"
      />
      <SubmitButton isLoading={isLoadingLogin} text="ورود به وبسایت" />
      <AuthNeviLink
        text="رمزت یادت نیست ؟ با یه بار مصرف وارد شو"
        des="/auth/otp"
      />
      <AuthNeviLink text="اکانت نداری ؟ ثبت نام کن" des="/auth" />
    </AuthForm>
  );
}

export default LoginPage;
