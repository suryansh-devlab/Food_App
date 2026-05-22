import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CartScreen = () => {
  const { name, price, emoji } = useLocalSearchParams();

  const total = Number(price ?? 0);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 180,
        }}
      >
        {/* Header */}
        <Text style={styles.heading}>🛒 Your Cart</Text>

        <Text style={styles.subHeading}>Delicious food waiting for you</Text>

        {/* Cart Item */}
        <View style={styles.cartCard}>
          {/* Food Image */}
          <View style={styles.imageBox}>
            <Text style={styles.foodEmoji}>{emoji}</Text>
          </View>

          {/* Info */}
          <View style={styles.itemInfo}>
            <Text style={styles.foodName}>{name}</Text>

            <Text style={styles.foodDesc}>
              Fresh & tasty food prepared with premium ingredients
            </Text>

            <Text style={styles.foodPrice}>₹{price}</Text>

            {/* Quantity */}
            <View style={styles.quantityRow}>
              <TouchableOpacity style={styles.qtyButton}>
                <Text style={styles.qtyText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantity}>3</Text>

              <TouchableOpacity style={styles.qtyButton}>
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Bill Summary */}
        <View style={styles.billContainer}>
          <Text style={styles.billHeading}>Bill Summary</Text>

          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Item Total</Text>

            <Text style={styles.billValue}>₹{price}</Text>
          </View>

          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Delivery Fee</Text>

            <Text style={styles.freeText}>FREE</Text>
          </View>

          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Taxes & Charges</Text>

            <Text style={styles.billValue}>₹20</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.billRow}>
            <Text style={styles.totalText}>Grand Total</Text>

            <Text style={styles.totalPrice}>₹{total + 20}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Bottom */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => router.replace("/(tabs)/order")}
        >
          <Text style={styles.orderButtonText}>Place Order</Text>

          <Text style={styles.orderPrice}>₹{total + 20}</Text>
        </TouchableOpacity>

        {/* Back */}
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  heading: {
    marginTop: 60,
    marginHorizontal: 20,
    fontSize: 38,
    fontWeight: "800",
    color: "#151533",
  },

  subHeading: {
    marginTop: 10,
    marginHorizontal: 20,
    fontSize: 18,
    color: "#777",
  },

  cartCard: {
    backgroundColor: "#fff",
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 28,
    padding: 20,
    flexDirection: "row",
  },

  imageBox: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },

  foodEmoji: {
    fontSize: 55,
  },

  itemInfo: {
    flex: 1,
    marginLeft: 18,
  },

  foodName: {
    fontSize: 24,
    fontWeight: "800",
    color: "#222",
  },

  foodDesc: {
    marginTop: 6,
    fontSize: 15,
    lineHeight: 22,
    color: "#777",
  },

  foodPrice: {
    marginTop: 12,
    fontSize: 24,
    color: "#FF5A3D",
    fontWeight: "800",
  },

  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },

  qtyButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#FF5A3D",
    justifyContent: "center",
    alignItems: "center",
  },

  qtyText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },

  quantity: {
    marginHorizontal: 18,
    fontSize: 22,
    fontWeight: "700",
  },

  billContainer: {
    backgroundColor: "#fff",
    marginTop: 25,
    marginHorizontal: 20,
    borderRadius: 28,
    padding: 22,
  },

  billHeading: {
    fontSize: 24,
    fontWeight: "800",
    color: "#151533",
    marginBottom: 20,
  },

  billRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  billLabel: {
    fontSize: 18,
    color: "#666",
  },

  billValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  freeText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#33C15D",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginVertical: 14,
  },

  totalText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#151533",
  },

  totalPrice: {
    fontSize: 28,
    fontWeight: "900",
    color: "#FF5A3D",
  },

  /* Sticky Bottom */

  bottomContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },

  orderButton: {
    backgroundColor: "#FF5A3D",
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  orderButtonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
  },

  orderPrice: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
  },

  backText: {
    marginTop: 18,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
    color: "#151533",
  },
});
