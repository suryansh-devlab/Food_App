import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topContainer}>
        {/* Heading */}
        <Text style={styles.heading}>My Orders</Text>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <View style={styles.activeTab}>
            <Text style={styles.activeTabText}>Active</Text>
          </View>

          <View style={styles.tab}>
            <Text style={styles.tabText}>Past Orders</Text>
          </View>
        </View>

        {/* Active Line */}
        <View style={styles.activeLine} />
      </View>

      {/* Orders List */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        {/* Order Card 1 */}
        <View style={styles.orderCard}>
          {/* Top Row */}
          <View style={styles.orderTopRow}>
            <View style={styles.restaurantInfo}>
              <Text style={styles.foodEmoji}>🍔</Text>

              <View>
                <Text style={styles.restaurantName}>Burger Palace</Text>

                <Text style={styles.orderDate}>Today • 2:45 PM</Text>
              </View>
            </View>

            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>On The Way</Text>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Bottom Row */}
          <View style={styles.bottomRow}>
            <Text style={styles.price}>₹420</Text>

            <Text style={styles.items}>2 Burgers • Fries • Coke</Text>
          </View>
        </View>

        {/* Order Card 2 */}
        <View style={styles.orderCard}>
          <View style={styles.orderTopRow}>
            <View style={styles.restaurantInfo}>
              <Text style={styles.foodEmoji}>🍕</Text>

              <View>
                <Text style={styles.restaurantName}>Pizza Hut</Text>

                <Text style={styles.orderDate}>Today • 1:10 PM</Text>
              </View>
            </View>

            <View style={[styles.statusBadge, { backgroundColor: "#FFF4E5" }]}>
              <Text style={[styles.statusText, { color: "#F59E0B" }]}>
                Preparing
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.bottomRow}>
            <Text style={styles.price}>₹699</Text>

            <Text style={styles.items}>Farmhouse Pizza • Garlic Bread</Text>
          </View>
        </View>

        {/* Order Card 3 */}
        <View style={styles.orderCard}>
          <View style={styles.orderTopRow}>
            <View style={styles.restaurantInfo}>
              <Text style={styles.foodEmoji}>🥮</Text>

              <View>
                <Text style={styles.restaurantName}>Hazenault Factory </Text>

                <Text style={styles.orderDate}>Yesterday • 8:20 PM</Text>
              </View>
            </View>

            <View style={[styles.statusBadge, { backgroundColor: "#E7F8EC" }]}>
              <Text style={[styles.statusText, { color: "#22C55E" }]}>
                Delivered
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.bottomRow}>
            <Text style={styles.price}>₹350</Text>

            <Text style={styles.items}>Cake • Fresh Fruit Pastry</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  topContainer: {
    backgroundColor: "white",
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  heading: {
    fontSize: 42,
    fontWeight: "800",
    color: "#151533",
  },

  tabsContainer: {
    flexDirection: "row",
    marginTop: 30,
  },

  activeTab: {
    marginRight: 40,
  },

  tab: {
    marginRight: 40,
  },

  activeTabText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FF5A3D",
  },

  tabText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#8C8CA1",
  },

  activeLine: {
    width: 90,
    height: 4,
    backgroundColor: "#FF5A3D",
    borderRadius: 10,
    marginTop: 12,
  },

  orderCard: {
    backgroundColor: "white",

    marginHorizontal: 20,
    marginTop: 20,

    borderRadius: 26,

    padding: 20,

    elevation: 2,
  },

  orderTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  restaurantInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  foodEmoji: {
    fontSize: 42,
    marginRight: 14,
  },

  restaurantName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },

  orderDate: {
    marginTop: 5,
    color: "#8C8CA1",
    fontSize: 15,
  },

  statusBadge: {
    backgroundColor: "#FFE8E3",

    paddingHorizontal: 14,
    paddingVertical: 8,

    borderRadius: 16,
  },

  statusText: {
    color: "#FF5A3D",
    fontWeight: "700",
    fontSize: 14,
  },

  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginVertical: 18,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    fontSize: 22,
    fontWeight: "800",
    color: "#151533",
  },

  items: {
    color: "#777",
    fontSize: 15,
  },
});
