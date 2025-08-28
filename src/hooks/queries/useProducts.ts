import { fetchProducts } from "@/services/fetchProducts";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  console.log("Fetching products...");

  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
