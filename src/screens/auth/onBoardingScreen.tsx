import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const FoodRushScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Top Section */}
      <View style={styles.topContainer}>
        {/* Big Circle */}
        <View style={styles.bigCircle}>
          <View style={styles.dashedCircle} />

          {/* Floating Food Icons */}
          <View style={[styles.foodBubble, styles.pizzaTop]}>
            <Text style={styles.foodEmoji}>🍕</Text>
          </View>

          <View style={[styles.foodBubble, styles.pizzaLeft]}>
            <Text style={styles.foodEmoji}>🍕</Text>
          </View>

          <View style={[styles.foodBubble, styles.tacoRight]}>
            <Text style={styles.foodEmoji}>🌮</Text>
          </View>

          <View style={[styles.foodBubble, styles.noodleBottom]}>
            <Text style={styles.foodEmoji}>🍜</Text>
          </View>

          {/* Burger */}
          <Text style={styles.burger}>🍔</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>FoodRush</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>Delicious food, delivered fast 🚀</Text>
      </View>

      {/* Bottom Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Hungry? We’ve got you</Text>

        <Text style={styles.cardText}>
          Order from 500+ restaurants{"\n"}
          in your city in minutes
        </Text>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/SignUpScreen")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        {/* Sign In */}
        <Text style={styles.signInText}>
          Already have an account?
          <Text
            style={styles.signIn}
            onPress={() => router.push("/auth/LoginScreen")}
          >
            {" "}
            Sign In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default FoodRushScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF5A3D",
    justifyContent: "center",
    alignItems: "center",
  },

  topContainer: {
    width: "100%",
    height: "65%",
    backgroundColor: "#FF5A3D",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    paddingTop: 40,
  },

  bigCircle: {
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "#FF7358",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 20,
  },

  dashedCircle: {
    position: "absolute",
    width: 320,
    height: 320,
    borderRadius: 160,
    borderWidth: 2,
    borderColor: "#FFB19E",
    borderStyle: "dashed",
    marginTop: 10,
  },

  burger: {
    fontSize: 80,
  },

  foodBubble: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FF8B74",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },

  foodEmoji: {
    fontSize: 28,
  },

  pizzaTop: {
    top: -10,
    right: 20,
  },

  pizzaLeft: {
    left: -20,
    top: 90,
  },

  tacoRight: {
    right: -20,
    top: 110,
  },

  noodleBottom: {
    left: -10,
    bottom: 10,
  },

  title: {
    fontSize: 52,
    fontWeight: "900",
    color: "white",
    marginTop: 30,
  },

  subtitle: {
    fontSize: 20,
    color: "white",
    marginTop: 10,
  },

  card: {
    width: "100%",
    backgroundColor: "#F3E8E6",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 40,
    paddingHorizontal: 25,
    alignItems: "center",
    marginBottom: 0,
  },

  cardTitle: {
    fontSize: 34,
    fontWeight: "900",
    textAlign: "center",
    color: "#1B1734",
  },

  cardText: {
    fontSize: 20,
    color: "#8B87A8",
    textAlign: "center",
    marginTop: 20,
    lineHeight: 30,
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

  signInText: {
    marginTop: 20,
    fontSize: 16,
    color: "#6B6885",
  },

  signIn: {
    color: "#FF5A3D",
    fontWeight: "700",
    marginBottom: 10,
  },
});
