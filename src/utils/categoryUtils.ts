import type { Product, ProductsResponse } from "@/types/product";

export const formatCategoryName = (categoryName: string): string => {
  return categoryName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const processProductsToCategories = (
  products: Product[]
): CategorySummary[] => {
  if (!products || products.length === 0) return [];

  const categoryGroups = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return Object.entries(categoryGroups).map(
    ([categoryName, categoryProducts]) => ({
      name: categoryName,
      displayName: formatCategoryName(categoryName),
      slug: categoryName.toLowerCase().replace(/\s+/g, "-"),
      thumbnail: categoryProducts[0].thumbnail,
      productCount: categoryProducts.length,
      totalStock: categoryProducts.reduce(
        (sum, product) => sum + product.stock,
        0
      ),
    })
  );
};

export interface CategorySummary {
  name: string;
  displayName: string;
  slug: string;
  thumbnail: string;
  productCount: number;
  totalStock: number;
}
