import { ENV } from "../constants";
import axios from "axios";

export const Api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

Api.interceptors.request.use(
  (config) => {
    const { githubAccessToken } = ENV;

    if (githubAccessToken) {
      config.headers["Authorization"] = `Bearer ${githubAccessToken}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);
