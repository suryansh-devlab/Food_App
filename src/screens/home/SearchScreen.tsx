import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>Discover</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={22} color="#999" />

        <TextInput
          placeholder="Biryani, Pizza, Burger...."
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.bottomContainer}
      >
        {/* Trending */}
        <Text style={styles.sectionTitle}>🔥 Trending Searches</Text>

        <View style={styles.tagContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}> 🍕 Pizza</Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}> 🍔 Burger</Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}> 🍵 Coffee</Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}> 🍜 Noodles</Text>
          </View>
        </View>

        <Text style={styles.cuisineHeading}>🍽️ Cuisines</Text>

        <View style={styles.cuisinesContainer}>
          <View style={[styles.cuisineCard, { backgroundColor: "#B74E42" }]}>
            <Text style={styles.cuisineEmoji}>🍕</Text>
            <Text style={styles.cuisineText}>Italian</Text>
          </View>

          <View style={[styles.cuisineCard, { backgroundColor: "#2D7C7A" }]}>
            <Text style={styles.cuisineEmoji}>🍣</Text>
            <Text style={styles.cuisineText}>Japanese</Text>
          </View>

          <View style={[styles.cuisineCard, { backgroundColor: "#5A8F2B" }]}>
            <Text style={styles.cuisineEmoji}>🍛</Text>
            <Text style={styles.cuisineText}>Indian</Text>
          </View>

          <View style={[styles.cuisineCard, { backgroundColor: "#6D3D91" }]}>
            <Text style={styles.cuisineEmoji}>🌮</Text>
            <Text style={styles.cuisineText}>Mexican</Text>
          </View>

          <View style={[styles.cuisineCard, { backgroundColor: "#C18A00" }]}>
            <Text style={styles.cuisineEmoji}>🥙</Text>
            <Text style={styles.cuisineText}>Middle East</Text>
          </View>

          <View style={[styles.cuisineCard, { backgroundColor: "#2F7DB8" }]}>
            <Text style={styles.cuisineEmoji}>🍜</Text>
            <Text style={styles.cuisineText}>Chinese</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  heading: {
    marginTop: 60,
    fontSize: 32,
    fontWeight: "700",
    color: "#222",
    paddingHorizontal: 20,
  },

  searchContainer: {
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 18,
    paddingHorizontal: 18,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  searchInput: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 10,
    fontSize: 16,
  },

  bottomContainer: {
    backgroundColor: "#f9f9f9",
    marginTop: 30,
  },

  sectionTitle: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },

  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },

  tag: {
    backgroundColor: "white",
    paddingHorizontal: 18,
    paddingVertical: 15,
    borderRadius: 20,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 12,
  },

  tagText: {
    color: "black",
    fontWeight: "600",
    fontSize: 18,
  },
  cuisineHeading: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: "700",
    color: "#222",
    marginLeft: 20,
  },

  cuisinesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    paddingBottom: 120,
  },

  cuisineCard: {
    width: "48%",
    height: 120,
    borderRadius: 22,
    padding: 15,
    marginBottom: 15,
    justifyContent: "space-between",
    marginLeft: 5,
    marginRight: 2,
  },

  cuisineEmoji: {
    fontSize: 42,
    alignSelf: "flex-end",
  },

  cuisineText: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
  },
});
