import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.topContainer}>
        <View style={styles.headerRow}>
          {/* Left Side */}
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={28} color="white" />

            <View>
              <Text style={styles.deliveryText}>DELIVERING TO</Text>

              <Text style={styles.locationText}>Kanpur, UP</Text>
            </View>
          </View>

          {/* Right Side */}
          <View style={styles.rightRow}>
            {/* Notification */}
            <View style={styles.notificationContainer}>
              <Ionicons name="notifications-outline" size={28} color="white" />

              <View style={styles.notificationBadge} />
            </View>

            {/* Profile */}
            <View style={styles.profileContainer}>
              <Text style={styles.profileText}>SK</Text>
            </View>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={22} color="#999" />

          <TextInput
            placeholder="Biryani, Pizza, Burger...."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 140,
        }}
      >
        {/* Categories */}
        <View style={styles.section}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {/* Pizza */}
            <View style={styles.categoryWrapper}>
              <View style={[styles.categoryCard, styles.activeCategory]}>
                <Text style={styles.categoryEmoji}>🍕</Text>
              </View>

              <Text style={styles.categoryLabel}>Pizza</Text>
            </View>

            {/* Burger */}
            <View style={styles.categoryWrapper}>
              <View style={styles.categoryCard}>
                <Text style={styles.categoryEmoji}>🍔</Text>
              </View>

              <Text style={styles.categoryLabel}>Burger</Text>
            </View>

            {/* Noodles */}
            <View style={styles.categoryWrapper}>
              <View style={styles.categoryCard}>
                <Text style={styles.categoryEmoji}>🍜</Text>
              </View>

              <Text style={styles.categoryLabel}>Noodles</Text>
            </View>

            {/* Mexican */}
            <View style={styles.categoryWrapper}>
              <View style={styles.categoryCard}>
                <Text style={styles.categoryEmoji}>🌮</Text>
              </View>

              <Text style={styles.categoryLabel}>Mexican</Text>
            </View>

            {/* Sushi */}
            <View style={styles.categoryWrapper}>
              <View style={styles.categoryCard}>
                <Text style={styles.categoryEmoji}>🍣</Text>
              </View>

              <Text style={styles.categoryLabel}>Sushi</Text>
            </View>
          </ScrollView>
        </View>
        {/* Offer Banner */}
        <View style={styles.bannerContainer}>
          {/* Left Side */}
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}> 50% OFF{"\n"} First Order!</Text>
            <Text style={styles.bannerSubtitle}>Use code at checkout</Text>
            <View style={styles.couponButton}>
              <Text style={styles.couponText}>FEAST50</Text>
            </View>
          </View>
          {/* Right Side */}
          <View style={styles.bannerCircle}>
            <Text style={styles.bannerEmoji}>🎉</Text>
          </View>
        </View>
        <View>
          <Text style={styles.heading}>🔥 Popular Near You</Text>
        </View>
        {/* Restaurant Card */}
        <TouchableOpacity
          style={styles.restaurantCard}
          onPress={() =>
            router.push({
              pathname: "/restaurant/[id]",
              params: {
                id: 1,
                name: "Burger King",
                price: "499",
                emoji: "🍔",
              },
            })
          }
        >
          {/* Top Image Area */}
          <View style={styles.restaurantImageContainer}>
            {/* Offer Badge */}
            <View style={styles.offerBadge}>
              <Text style={styles.offerText}>20% OFF</Text>
            </View>

            {/* Food Emoji */}
            <Text style={styles.foodImage}>🍔</Text>
          </View>

          {/* Bottom Content */}
          <View style={styles.restaurantContent}>
            <Text style={styles.restaurantName}>Burger King</Text>

            <View style={styles.restaurantInfoRow}>
              <Text style={styles.rating}>⭐ 4.8</Text>

              <Text style={styles.dot}>•</Text>

              <Text style={styles.time}>25–35 min</Text>

              <Text style={styles.dot}>•</Text>

              <Text style={styles.delivery}>Free delivery</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.restaurantCard}
          onPress={() =>
            router.push({
              pathname: "/restaurant/[id]",
              params: {
                id: 2,
                name: "Pizza Hut",
                price: "499",
                emoji: "🍕",
              },
            })
          }
        >
          {/* Top Image Area */}
          <View style={styles.restaurantImageContainer}>
            {/* Offer Badge */}
            <View style={styles.offerBadge}>
              <Text style={styles.offerText}>25% OFF</Text>
            </View>

            {/* Food Emoji */}
            <Text style={styles.foodImage}>🍕</Text>
          </View>

          {/* Bottom Content */}
          <View style={styles.restaurantContent}>
            <Text style={styles.restaurantName}>Pizza Hut</Text>

            <View style={styles.restaurantInfoRow}>
              <Text style={styles.rating}>⭐ 4.8</Text>

              <Text style={styles.dot}>•</Text>

              <Text style={styles.time}>25–35 min</Text>

              <Text style={styles.dot}>•</Text>

              <Text style={styles.delivery}>Free delivery</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.restaurantCard}
          onPress={() =>
            router.push({
              pathname: "/restaurant/[id]",
              params: {
                id: 3,
                name: "Hazenault Factory",
                price: "499",
                emoji: "🥮",
              },
            })
          }
        >
          {/* Top Image Area */}
          <View style={styles.restaurantImageContainer}>
            {/* Food Emoji */}
            <Text style={styles.foodImage}>🥮</Text>
          </View>

          {/* Bottom Content */}
          <View style={styles.restaurantContent}>
            <Text style={styles.restaurantName}>Hazenault Factory</Text>

            <View style={styles.restaurantInfoRow}>
              <Text style={styles.rating}>⭐ 4.8</Text>

              <Text style={styles.dot}>•</Text>

              <Text style={styles.time}>15–25 min</Text>

              <Text style={styles.dot}>•</Text>

              <Text style={styles.delivery}> Free delivery</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  topContainer: {
    backgroundColor: "#FF5A3D",
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  deliveryText: {
    color: "#FFD4CC",
    fontSize: 12,
    marginLeft: 10,
  },

  locationText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 10,
  },

  rightRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  notificationContainer: {
    position: "relative",
    marginRight: 18,
  },

  notificationBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FFD700",
    position: "absolute",
    top: 2,
    right: 2,
  },

  profileContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },

  profileText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  searchContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 25,
  },

  searchInput: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 10,
    fontSize: 16,
  },

  section: {
    padding: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#222",
  },

  categoriesContainer: {
    paddingRight: 20,
  },

  categoryWrapper: {
    alignItems: "center",
    marginRight: 18,
  },

  categoryCard: {
    width: 85,
    height: 85,
    borderRadius: 22,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  activeCategory: {
    borderWidth: 3,
    borderColor: "#FF5A3D",
  },

  categoryEmoji: {
    fontSize: 34,
  },

  categoryLabel: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
  },
  bannerContainer: {
    backgroundColor: "#1D1B4B",
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 30,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },

  bannerContent: {
    zIndex: 2,
  },

  bannerTitle: {
    color: "white",
    fontSize: 32,
    fontWeight: "900",
    lineHeight: 38,
  },

  bannerSubtitle: {
    color: "#D6D6E7",
    fontSize: 16,
    marginTop: 10,
  },

  couponButton: {
    backgroundColor: "#FF5A3D",
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 14,
    marginTop: 18,
  },

  couponText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },

  bannerCircle: {
    width: 200,
    height: 210,
    borderRadius: 100,
    backgroundColor: "#6B2D4D",
    position: "absolute",
    right: -40,
    top: -20,
    justifyContent: "center",
    alignItems: "center",
  },

  bannerEmoji: {
    fontSize: 65,
    marginRight: 35,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    padding: 15,
  },
  restaurantCard: {
    backgroundColor: "white",
    borderRadius: 28,
    overflow: "hidden",
    marginHorizontal: 20,
    marginBottom: 25,
    elevation: 3,
  },

  restaurantImageContainer: {
    height: 170,
    backgroundColor: "#F4C7B5",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  offerBadge: {
    position: "absolute",
    top: 14,
    left: 14,
    backgroundColor: "#FF5A3D",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },

  offerText: {
    color: "white",
    fontWeight: "800",
    fontSize: 16,
  },

  foodImage: {
    fontSize: 80,
  },

  restaurantContent: {
    padding: 18,
  },

  restaurantName: {
    fontSize: 30,
    fontWeight: "800",
    color: "#222",
  },

  restaurantInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  rating: {
    color: "#444",
    fontSize: 18,
    fontWeight: "600",
  },

  dot: {
    marginHorizontal: 8,
    color: "#AAA",
    fontSize: 18,
  },

  time: {
    color: "#8C8CA1",
    fontSize: 18,
  },

  delivery: {
    color: "#33C15D",
    fontSize: 18,
    fontWeight: "700",
  },
});
