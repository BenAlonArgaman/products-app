import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { CategorySummary } from "@/utils/categoryUtils";
import { blurhash } from "@/utils/imageBlurHash";
import StockIndicator from "./ui/StockIndicator";

type CategoryCardProps = {
  category: CategorySummary;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link href={`/category/${category.name}`} asChild>
      <Pressable className="flex-1 m-2 gap-2 rounded-lg border border-neutral-200  overflow-hidden p-2">
        {/* Product Image */}
        <View className="w-full bg-neutral-200 rounded-lg">
          <Image
            source={{ uri: category.thumbnail }}
            style={{ width: "100%", aspectRatio: 1 }}
            contentFit="cover"
            placeholder={blurhash}
            transition={1000}
          />
        </View>

        {/* Product Details */}
        <View>
          <Text className="text-lg font-semibold">
            {category.displayName} ({category.productCount})
          </Text>
          <StockIndicator stock={category.totalStock} />
        </View>
      </Pressable>
    </Link>
  );
};

export default CategoryCard;
