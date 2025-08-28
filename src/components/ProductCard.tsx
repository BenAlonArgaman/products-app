import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Product } from "@/types/product";
import { blurhash } from "@/utils/imageBlurHash";
import StockIndicator from "./ui/StockIndicator";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <View className="flex-1 m-2 gap-2 rounded-lg border border-neutral-200  overflow-hidden p-2">
      <View className="w-full bg-neutral-200 rounded-lg">
        <Image
          source={{ uri: product.thumbnail }}
          style={{ width: "100%", aspectRatio: 1 }}
          contentFit="cover"
          placeholder={blurhash}
          transition={1000}
        />
      </View>

      <View className="justify-between flex-1 gap-2 p-2">
        <View>
          <Text className="text-base font-light">{product.title}</Text>
          <Text className="font-semibold text-base">{product.price}$</Text>
        </View>
        <StockIndicator stock={product.stock} />
      </View>
    </View>
  );
};

export default ProductCard;
