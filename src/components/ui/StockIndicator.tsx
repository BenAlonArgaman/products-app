import { View, Text } from "react-native";
import React from "react";

const StockIndicator = ({ stock }: { stock: number }) => {
  return (
    <View className="gap-2 flex-row items-center">
      <View
        className={`w-2 h-2 rounded-full ${
          stock === 0
            ? "bg-red-500"
            : stock <= 5
            ? "bg-orange-500"
            : "bg-lime-300"
        }`}
      />
      <Text className="text-neutral-500 text-sm">{stock} in stock</Text>
    </View>
  );
};

export default StockIndicator;
