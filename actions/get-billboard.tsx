import axios from "axios";
import { Billboard } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BASE_URL = `${API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export default getBillboard;
