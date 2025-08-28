import { Stack } from "expo-router";
import "../global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            headerLargeTitle: true,
            title: "Categories",
          }}
        />
        <Stack.Screen
          name="category/[name]"
          options={{
            headerLargeTitle: true,
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
