// src/services/fetchProducts.ts
import axios from "axios";
import type { ProductsResponse } from "../types/product";

export async function fetchProducts(): Promise<ProductsResponse> {
  const { data } = await axios.get<ProductsResponse>(
    "https://dummyjson.com/products?limit=100"
  );
  return data;
}
