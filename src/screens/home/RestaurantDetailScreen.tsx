import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

/* Different Foods For Different Restaurants */

const restaurantFoods: any = {
  1: [
    {
      id: 1,
      emoji: "🍔",
      name: "Cheese Burger",
      desc: "Cheddar cheese, onion, lettuce",
      price: "₹399",
    },
    {
      id: 2,
      emoji: "🍟",
      name: "French Fries",
      desc: "Crispy salted fries",
      price: "₹149",
    },
    {
      id: 3,
      emoji: "🥤",
      name: "Cold Drink",
      desc: "Chilled coca cola",
      price: "₹99",
    },
  ],

  2: [
    {
      id: 1,
      emoji: "🍕",
      name: "Margherita Pizza",
      desc: "Fresh mozzarella, basil",
      price: "₹299",
    },
    {
      id: 2,
      emoji: "🍕",
      name: "Farmhouse Pizza",
      desc: "Onion, capsicum, mushroom",
      price: "₹499",
    },
    {
      id: 3,
      emoji: "🧄",
      name: "Garlic Bread",
      desc: "Cheesy garlic bread",
      price: "₹199",
    },
  ],

  3: [
    {
      id: 1,
      emoji: "🥮",
      name: "Chocolate Pastry",
      desc: "Soft creamy pastry",
      price: "₹149",
    },
    {
      id: 2,
      emoji: "🍰",
      name: "Red Velvet Cake",
      desc: "Premium creamy cake",
      price: "₹399",
    },
    {
      id: 3,
      emoji: "☕",
      name: "Cold Coffee",
      desc: "Iced creamy coffee",
      price: "₹179",
    },
  ],
};

const RestaurantDetailScreen = () => {
  const { id, name, emoji } = useLocalSearchParams();

  const foods = restaurantFoods[id as keyof typeof restaurantFoods] || [];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 140,
        }}
      >
        {/* Top Image */}
        <View style={styles.imageContainer}>
          <Text style={styles.foodEmoji}>{emoji}</Text>
        </View>

        {/* Restaurant Details */}
        <View style={styles.content}>
          <Text style={styles.restaurantName}>{name}</Text>

          <View style={styles.ratingRow}>
            <Text style={styles.rating}>⭐ 4.8</Text>

            <Text style={styles.dot}>•</Text>

            <Text style={styles.time}>25-35 mins</Text>

            <Text style={styles.dot}>•</Text>

            <Text style={styles.delivery}>🚴 Free Delivery</Text>
          </View>

          <Text style={styles.description}>
            Delicious food made with fresh ingredients and delivered fast to
            your doorstep.
          </Text>

          {/* Best Sellers */}
          <Text style={styles.title}>🔥 BESTSELLERS</Text>

          {foods.map((item: any) => (
            <View key={item.id} style={styles.card}>
              {/* Food Image */}
              <View style={styles.imageBox}>
                <Text style={styles.emoji}>{item.emoji}</Text>
              </View>

              {/* Details */}
              <View style={styles.details}>
                <Text style={styles.foodName}>{item.name}</Text>

                <Text style={styles.desc}>{item.desc}</Text>

                <Text style={styles.price}>{item.price}</Text>
              </View>

              {/* Add Button */}
              <TouchableOpacity
                style={styles.addButton}
                onPress={() =>
                  router.push({
                    pathname: "/cart",
                    params: {
                      name: item.name,
                      price: item.price.replace("₹", ""),
                      emoji: item.emoji,
                    },
                  })
                }
              >
                <Text style={styles.addText}>+</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Sticky Bottom Cart */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() =>
            router.push({
              pathname: "/cart",
              params: {
                name: foods[0]?.name,
                price: foods[0]?.price.replace("₹", ""),
                emoji: foods[0]?.emoji,
              },
            })
          }
        >
          <View style={styles.cartCount}>
            <Text style={styles.cartCountText}>{foods.length}</Text>
          </View>

          <Text style={styles.cartButtonText}>View Cart</Text>

          <Text style={styles.cartPrice}>→</Text>
        </TouchableOpacity>

        {/* Back */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RestaurantDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  imageContainer: {
    height: 320,
    backgroundColor: "#F4C7B5",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  foodEmoji: {
    fontSize: 120,
  },

  content: {
    padding: 25,
  },

  restaurantName: {
    fontSize: 38,
    fontWeight: "800",
    color: "#151533",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    flexWrap: "wrap",
  },

  rating: {
    fontSize: 18,
    fontWeight: "700",
  },

  dot: {
    marginHorizontal: 8,
    color: "#999",
    fontSize: 18,
  },

  time: {
    color: "#777",
    fontSize: 16,
  },

  delivery: {
    color: "#33C15D",
    fontSize: 16,
    fontWeight: "700",
  },

  description: {
    marginTop: 25,
    fontSize: 18,
    lineHeight: 30,
    color: "#666",
  },

  title: {
    marginTop: 30,
    marginBottom: 15,
    fontSize: 26,
    fontWeight: "800",
    color: "#555",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  imageBox: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },

  emoji: {
    fontSize: 36,
  },

  details: {
    flex: 1,
    marginLeft: 16,
  },

  foodName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1D1D35",
    marginBottom: 6,
  },

  desc: {
    fontSize: 15,
    color: "#7A7A9D",
    lineHeight: 22,
  },

  price: {
    fontSize: 24,
    fontWeight: "800",
    color: "#FF5A3C",
    marginTop: 10,
  },

  addButton: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: "#FF5A3C",
    alignItems: "center",
    justifyContent: "center",
  },

  addText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
  },

  bottomContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },

  cartButton: {
    backgroundColor: "#FF5A3D",
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cartCount: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#FF7A61",
    justifyContent: "center",
    alignItems: "center",
  },

  cartCountText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  cartButtonText: {
    flex: 1,
    marginLeft: 16,
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  cartPrice: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "800",
  },

  backButton: {
    marginTop: 18,
    alignItems: "center",
  },

  backText: {
    fontSize: 17,
    color: "#151533",
    fontWeight: "700",
  },
});
