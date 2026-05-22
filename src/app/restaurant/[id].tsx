import { Stack } from "expo-router";
import RestaurantDetailScreen from "../../screens/home/RestaurantDetailScreen";

export default function RestaurantDetail() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Restaurant",
          headerStyle: {
            backgroundColor: "#FF5A3D",
          },
          headerTintColor: "white",
          headerBackTitle: "Back",
        }}
      />

      <RestaurantDetailScreen />
    </>
  );
}
