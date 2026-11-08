"use client";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Typography,
  Autocomplete,
  TextField,
  Box,
  Checkbox,
} from "@mui/material";
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

export default function RegisterView() {
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
  const [agreedToTerms, setAgreedToTerms] = useState(false);
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

      if (!agreedToTerms) {
        setError(
          "لطفاً پیش از ثبت‌نام، با قوانین و مقررات و سیاست‌نامه حریم خصوصی موافقت نمایید."
        );
        setIsLoading(false);
        return;
      }

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
    [formData, agreedToTerms, router]
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

        {/* Required Registration Consent Checkbox (Clause 1.3 enforcement) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            my: 2,
            direction: "rtl",
            textAlign: "right",
          }}
        >
          <Checkbox
            id="terms-consent"
            name="termsConsent"
            checked={agreedToTerms}
            onChange={(e) => {
              setAgreedToTerms(e.target.checked);
              if (error) setError("");
            }}
            required
            aria-required="true"
            sx={{
              p: 0,
              mt: "3px",
              color: "var(--secondary-text)",
              "&.Mui-checked": {
                color: "var(--activeBG)",
              },
            }}
          />
          <Typography
            component="label"
            htmlFor="terms-consent"
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: { xs: "12px", sm: "13px" },
              color: "var(--secondary-text)",
              lineHeight: 1.75,
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            من تمامی مفاد سند{" "}
            <Link
              href="/privacy&rules"
              target="_blank"
              style={{
                color: "var(--activeBG)",
                textDecoration: "underline",
                fontWeight: 700,
              }}
            >
              قوانین و مقررات و سیاست‌نامه حریم خصوصی
            </Link>{" "}
            را مطالعه کرده و التزام قطعی به آن را می‌پذیرم.
          </Typography>
        </Box>

        <SubmitButton isLoading={isLoading} text="ثبت نام در وبسایت" />
        <AuthNeviLink text="اگر اکانت دارید، وارد شوید" des="/auth/login" />
        <ErrorMessage message={error} />
      </AuthForm>
    </>
  );
}
