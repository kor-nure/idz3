import { ENV } from "../constants";
import axios from "axios";

export const Api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

Api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${ENV.githubAccessToken}`;

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);
