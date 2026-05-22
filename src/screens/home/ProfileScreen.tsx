import { router } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProfileScreen = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>SK</Text>
        </View>

        <Text style={styles.name}>Suryansh Kushwaha</Text>
        <Text style={styles.email}>suryansh.kushwaha@.com</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.menuContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.menuCard}>
          <View style={[styles.iconContainer, { backgroundColor: "#F7E8E3" }]}>
            <Text style={styles.icon}>📦</Text>
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>My Orders</Text>
            <Text style={styles.menuSubtitle}>Track & reorder</Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </View>
        <View style={styles.menuCard}>
          <View style={[styles.iconContainer, { backgroundColor: "#e6f5f7" }]}>
            <Text style={styles.icon}>💳</Text>
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Payment Methods</Text>
            <Text style={styles.menuSubtitle}>Cards, UPI, Wallets</Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </View>
        <View style={styles.menuCard}>
          <View style={[styles.iconContainer, { backgroundColor: "#e2f3d5" }]}>
            <Text style={styles.icon}>📍</Text>
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Saved Addresses</Text>
            <Text style={styles.menuSubtitle}>Home, Office</Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </View>
        <View style={styles.menuCard}>
          <View style={[styles.iconContainer, { backgroundColor: "#f6f4cc" }]}>
            <Text style={styles.icon}>⚙️</Text>
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Settings</Text>
            <Text style={styles.menuSubtitle}>Notifications, Privacy</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </View>
        {/* Drawer Button */}
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => setShowDrawer(true)}
        >
          <Text style={styles.drawerIcon}>☰</Text>
          <Text style={styles.drawerText}>Open Drawer</Text>
        </TouchableOpacity>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/onBoarding")}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
      {showDrawer && (
        <View style={styles.drawerOverlay}>
          <View style={styles.drawerMenu}>
            <Text style={styles.drawerTitle}>Menu</Text>

            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => router.push("/order")}
            >
              <Text style={styles.drawerItemText}>📦 My Orders</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => router.push("/home")}
            >
              <Text style={styles.drawerItemText}>🏡 Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => router.replace("/onBoarding")}
            >
              <Text style={styles.drawerItemText}>🚪 Logout</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowDrawer(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  topContainer: {
    backgroundColor: "#FF5A3D",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,

    backgroundColor: "#FFA500",

    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "white",
    fontSize: 42,
    fontWeight: "800",
  },
  name: {
    color: "white",
    marginTop: 25,
    fontSize: 30,
    fontWeight: "800",
  },
  email: {
    color: "#FFE5DF",
    marginTop: 10,
    fontSize: 18,
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 40,
    width: "85%",
    justifyContent: "space-between",
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    color: "white",
    fontSize: 38,
    fontWeight: "800",
  },
  statLabel: {
    color: "#FFE5DF",
    fontSize: 18,
    marginTop: 5,
  },
  menuContainer: {
    marginTop: 25,
    paddingHorizontal: 20,
    paddingBottom: 120,
    marginBottom: 100,
  },
  menuCard: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 24,
    marginBottom: 16,
    elevation: 2,
  },
  iconContainer: {
    width: 58,
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  icon: {
    fontSize: 30,
  },

  menuTextContainer: {
    flex: 1,
  },

  menuTitle: {
    marginLeft: 15,
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
  },

  menuSubtitle: {
    marginLeft: 15,
    marginTop: 5,
    fontSize: 16,
    color: "#8C8CA1",
  },

  arrow: {
    fontSize: 30,
    color: "#999",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#FF5A3D",
    width: "100%",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  drawerButton: {
    backgroundColor: "#151533",
    width: "100%",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
  },

  drawerIcon: {
    color: "white",
    fontSize: 24,
    marginRight: 10,
  },

  drawerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  drawerOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-start",
  },

  drawerMenu: {
    width: 280,
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  drawerTitle: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 30,
  },

  drawerItem: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },

  drawerItemText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
  },

  closeButton: {
    marginTop: 40,
    backgroundColor: "#FF5A3D",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },

  closeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
