import { useMemo } from "react";
import { useProducts } from "./useProducts";
import { processProductsToCategories } from "@/utils/categoryUtils";

export const useCategories = () => {
  const { data: productsResponse, isLoading, error } = useProducts();

  const categories = useMemo(() => {
    if (!productsResponse?.products) return [];
    return processProductsToCategories(productsResponse.products);
  }, [productsResponse]);

  return {
    categories,
    isLoading,
    error,
    totalProducts: productsResponse?.total,
  };
};
