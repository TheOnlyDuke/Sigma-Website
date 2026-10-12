"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { apiClient } from "@/utils/api";
import { cookieStorage } from "@/utils/cookies";
import { mockUserData } from "@/utils/dummydatas";

const AuthContext = createContext();

const DEV_BYPASS_AUTH = process.env.NEXT_PUBLIC_DEV_BYPASS_AUTH === "true";

export const AuthProvider = ({ children }) => {
  const [USER_INFO, SET_USER_INFO] = useState(null);
  const [ACCESS_TOKEN, SET_ACCESS_TOKEN] = useState(null);
  const [REFRESH_TOKEN, SET_REFRESH_TOKEN] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const updateAuth = (token, refreshToken, userInfo) => {
    SET_ACCESS_TOKEN(token);
    SET_REFRESH_TOKEN(refreshToken);
    SET_USER_INFO(userInfo);
    if (token) cookieStorage.setAccessToken(token);
    if (refreshToken) cookieStorage.setRefreshToken(refreshToken);
    if (userInfo) cookieStorage.setUserInfo(userInfo);
  };

  const clearAuth = () => {
    SET_ACCESS_TOKEN(null);
    SET_REFRESH_TOKEN(null);
    SET_USER_INFO(null);
    cookieStorage.clearAuth();
  };

  const refreshAccessToken = async () => {
    const refreshToken = cookieStorage.getRefreshToken();
    if (!refreshToken) return null;
    try {
      const data = await apiClient.refreshToken(refreshToken);
      if (data && data.access) {
        SET_ACCESS_TOKEN(data.access);
        cookieStorage.setAccessToken(data.access);
        if (data.refresh) cookieStorage.setRefreshToken(data.refresh);
        return data.access;
      }
    } catch (error) {
      clearAuth();
      return null;
    }
  };

  useEffect(() => {
    // Dev Mode: Bypass authentication and use mock data
    if (DEV_BYPASS_AUTH) {
      SET_USER_INFO(mockUserData);
      SET_ACCESS_TOKEN("dev-mock-token");
      SET_REFRESH_TOKEN("dev-mock-refresh-token");
      setIsLoading(false);
      return;
    }

    const token = cookieStorage.getAccessToken();
    const userInfo = cookieStorage.getUserInfo();

    if (token && userInfo) {
      // Set initial state from cookies
      SET_ACCESS_TOKEN(token);
      SET_USER_INFO(userInfo);

      // Verify token in background
      apiClient
        .getProfile(token)
        .catch(() => {
          clearAuth();
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        USER_INFO,
        SET_USER_INFO: (userInfo) => {
          SET_USER_INFO(userInfo);
          if (userInfo) {
            cookieStorage.setUserInfo(userInfo);
          }
        },
        ACCESS_TOKEN,
        SET_ACCESS_TOKEN: (token) => {
          SET_ACCESS_TOKEN(token);
          if (token) {
            cookieStorage.setAccessToken(token);
          }
        },
        updateAuth,
        clearAuth,
        refreshAccessToken,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
