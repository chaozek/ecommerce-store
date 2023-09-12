import axios from "axios";
import { Billboard, Category, Product } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BASE_URL = `${API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export default getCategory;
