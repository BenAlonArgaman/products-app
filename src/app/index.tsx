import React from "react";
import { FlashList } from "@shopify/flash-list";
import { useCategories } from "@/hooks/queries/useCategories";
import CategoryCard from "@/components/CategoryCard";
import { Pressable, SafeAreaView, Text } from "react-native";
import { CardSkeleton } from "@/components/ui/CardSkeleton";

export default function Page() {
  const { categories, refetch, isLoading, error } = useCategories();

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <FlashList
          data={Array(6).fill(null)} // Create 6 skeleton items
          numColumns={2}
          renderItem={() => <CardSkeleton />}
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
        />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Something Went Wrong</Text>
        <Pressable
          onPress={() => {
            refetch();
          }}
        >
          <Text className="text-blue-500 mt-2">Tap to retry</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <FlashList
      style={{ backgroundColor: "white" }}
      data={categories}
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
      numColumns={2}
      renderItem={({ item: category }) => <CategoryCard category={category} />}
    />
  );
}
