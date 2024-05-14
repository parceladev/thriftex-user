import axios from "axios";
import { getAccessToken } from "./token-utilities";

const API_BASE_URL = "http://localhost/rest.thriftex/api";

export const fetchBrands = async (page, limit, search = "") => {
  const token = getAccessToken();
  try {
    const response = await axios.get(`${API_BASE_URL}/brand/list`, {
      params: { page, limit, search },
      headers: { Authorization: `${token}` },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching brands:", error);
    return null;
  }
};

export const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/kategori/list`);
        console.log("Response data categories:", response.data.data); 
        return response.data.data; // Mengembalikan data kategori dari response
      } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
      }
    };
    