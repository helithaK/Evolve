import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://10.8.100.245/api/v1", // API base URL from environment variables
  timeout: 5000, // Optional: Timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      alert("Session expired. Please log in again.");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
