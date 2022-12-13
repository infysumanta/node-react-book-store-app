import axios from "axios";
import { Constant } from "./util/Constant";
const baseURL =
  process.env.NODE_ENV !== "production" ? "http://localhost:5000/api" : "/api";

const apiClient = axios.create({
  baseURL: baseURL,
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem(Constant.ECOM_USER_TOKEN));

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("/auth/register", data);
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

export const authVerifyUser = async () => {
  try {
    const { data } = await apiClient.post("/auth/auth-verify");
    if (!data.success) {
      logout();
    }
    return;
  } catch (error) {
    logout();
  }
};

export const logout = async () => {
  localStorage.removeItem(Constant.ECOM_USER_DETAILS);
  localStorage.removeItem(Constant.ECOM_USER_TOKEN);
  window.location.href = "/login";
};
