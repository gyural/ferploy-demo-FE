import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
