"use client";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Typography, Autocomplete, TextField } from "@mui/material";
import {
  InputField,
  PasswordField,
  PhoneField,
  SubmitButton,
  ErrorMessage,
  AuthNeviLink,
  AuthForm,
} from "@/components/auth";
import { validatePassword } from "@/utils/validations";
import { universities } from "@/utils/dummydatas";
import { apiClient } from "@/utils/api";
import { useAuth } from "@/contexts/AuthContext";

export default function Page() {
  const router = useRouter();
  const { USER_INFO, isLoading: isAuthLoading } = useAuth();

  useEffect(() => {
    if (!isAuthLoading && USER_INFO) {
      router.replace("/dashboard");
    }
  }, [isAuthLoading, USER_INFO, router]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    university: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleUniversityChange = useCallback((event, newValue) => {
    setFormData((prev) => ({ ...prev, university: newValue }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setError("");

      const passwordValidation = validatePassword(formData.password);
      if (!passwordValidation.isValid) {
        setError("سطح امنیت گذرواژه منتخب کافی نمیباشد");
        setIsLoading(false);
        return;
      }

      try {
        const data = await apiClient.register({
          email: formData.email || null,
          full_name: formData.username,
          password: formData.password,
          phone_number: formData.phoneNumber,
        });
        alert(data.code);
        router.push(
          `/auth/verify?phone=${encodeURIComponent(formData.phoneNumber)}`
        );
      } catch (error) {
        setError(error.message || "ثبت نام موفقیت آمیز نبود");
      } finally {
        setIsLoading(false);
      }
    },
    [formData, router]
  );

  return (
    <>
      <AuthForm onSubmit={handleSubmit}>
        <Typography
          variant="title"
          sx={{
            mb: 3,
            fontSize: "40px",
            fontWeight: "1000",
            letterSpacing: "-0.25pt",
            marginBottom: "50px",
          }}
        >
          ثبت نام در سیگما
        </Typography>
        <InputField
          name="username"
          label="نام کاربری"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <InputField
          name="email"
          label="پست الکترونیک (اختیاری)"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <PhoneField value={formData.phoneNumber} onChange={handleChange} />
        <Autocomplete
          fullWidth
          options={universities}
          getOptionLabel={(option) => option.name}
          getOptionDisabled={(option) => !option.availablity}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => (
            <TextField {...params} label="دانشگاه" margin="normal" />
          )}
          value={formData.university}
          onChange={handleUniversityChange}
          renderOption={(props, option) => (
            <li {...props}>
              {option.name} {!option.availablity && " (غیر فعال)"}
            </li>
          )}
          sx={{
            my: "12px",
          }}
        />
        <PasswordField value={formData.password} onChange={handleChange} />
        <SubmitButton isLoading={isLoading} text="ثبت نام در وبسایت" />
        <AuthNeviLink text="اگر اکانت دارید، وارد شوید" des="/auth/login" />
        <ErrorMessage message={error} />
      </AuthForm>
    </>
  );
}
