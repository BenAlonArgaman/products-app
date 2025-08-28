import { useMemo } from "react";
import { useProducts } from "./useProducts";

export const useProductsByCategory = (categorySlug: string) => {
  const { data: productsResponse, isLoading, error } = useProducts();

  // Filter products by category using useMemo for optimization
  const categoryProducts = useMemo(() => {
    if (!productsResponse?.products) return [];

    return productsResponse.products.filter(
      (product) => product.category.toLowerCase() === categorySlug.toLowerCase()
    );
  }, [productsResponse, categorySlug]);

  return {
    products: categoryProducts,
    categorySlug,
    isLoading,
    error,
    totalProducts: categoryProducts.length,
  };
};
