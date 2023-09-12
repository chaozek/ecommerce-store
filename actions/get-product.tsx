import axios from "axios";
import { Billboard, Product } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BASE_URL = `${API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export default getProduct;
