import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useProductsByCategory } from "@/hooks/queries/useProductsByCategories";
import { FlashList } from "@shopify/flash-list";
import ProductCard from "@/components/ProductCard";
import { useNavigation } from "expo-router";
import { useLayoutEffect, useMemo } from "react";
import { formatCategoryName } from "@/utils/categoryUtils";

const category = () => {
  const { name } = useLocalSearchParams<{ name: string }>();
  const { products } = useProductsByCategory(name);
  const navigation = useNavigation();

  const formattedTitle = useMemo(
    () => formatCategoryName(name as string),
    [name]
  );

  useLayoutEffect(() => {
    navigation.setOptions({ title: formattedTitle });
  }, [navigation, formattedTitle]);

  return (
    <FlashList
      data={products}
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
      numColumns={2}
      renderItem={({ item: product }) => <ProductCard product={product} />}
      style={{ backgroundColor: "white" }}
    />
  );
};

export default category;
