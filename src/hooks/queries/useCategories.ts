import { useMemo } from "react";
import { useProducts } from "./useProducts";
import { processProductsToCategories } from "@/utils/categoryUtils";

// Hook to fetch and process categories from products
export const useCategories = () => {
  const { data: productsResponse, refetch, isLoading, error } = useProducts();

  // Process products into categories using useMemo for optimization
  const categories = useMemo(() => {
    if (!productsResponse?.products) return [];
    return processProductsToCategories(productsResponse.products);
  }, [productsResponse]);

  return {
    categories,
    refetch,
    isLoading,
    error,
    totalProducts: productsResponse?.total,
  };
};
