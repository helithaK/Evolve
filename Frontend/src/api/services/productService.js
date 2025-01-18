import axiosInstance from "../axioInstance";
import { API_ENDPOINTS } from "../endPoints";

export const fetchProducts= async () => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.PRODUCTS);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

