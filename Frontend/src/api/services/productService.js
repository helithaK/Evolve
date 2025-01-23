import axiosInstance from "../axioInstance";
import { API_ENDPOINTS } from "../endPoints";

export const fetchProducts = async () => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.PRODUCTS);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const fetchProductsPerPage = async (page, limit) => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.PRODUCTS + `?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};
