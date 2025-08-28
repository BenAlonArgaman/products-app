import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
export const CardSkeleton = () => (
  <View className="flex-1 m-2 gap-2 rounded-lg border border-neutral-200 overflow-hidden p-2">
    <SkeletonPlaceholder borderRadius={8}>
      {/* Image skeleton - matches aspectRatio: 1 */}
      <SkeletonPlaceholder.Item
        width="100%"
        height={150} // Adjust based on your card width
        borderRadius={8}
      />

      {/* Text content skeleton */}
      <SkeletonPlaceholder.Item marginTop={8}>
        {/* Category name skeleton */}
        <SkeletonPlaceholder.Item width="80%" height={20} borderRadius={4} />

        {/* Product count skeleton */}
        <SkeletonPlaceholder.Item
          marginTop={6}
          width="60%"
          height={16}
          borderRadius={4}
        />

        {/* Stock info skeleton */}
        <SkeletonPlaceholder.Item
          marginTop={6}
          flexDirection="row"
          alignItems="center"
        >
          <SkeletonPlaceholder.Item width={4} height={4} borderRadius={2} />
          <SkeletonPlaceholder.Item
            marginLeft={8}
            width="50%"
            height={16}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  </View>
);
