import { getCookie } from "@/utils/cookie";
import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:3001",
});

const HEADER_NAME = "auth";

http.interceptors.request.use((config) => {
  const Token = getCookie("token");

  return {
    ...config,
    headers: {
      [HEADER_NAME]: Token,
    },
  } as any;
});

export {};
