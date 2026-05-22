import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignupScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* Top Section */}
          <View style={styles.topContainer}>
            <Text style={styles.logo}>🍔</Text>

            <Text style={styles.title}>Create Account</Text>

            <Text style={styles.subtitle}>
              Join FeastRush and order delicious food
            </Text>
          </View>

          {/* Bottom Section */}
          <View style={styles.bottomContainer}>
            {/* Full Name */}
            <Text style={styles.label}>FULL NAME</Text>

            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={22} color="#999" />

              <TextInput
                placeholder="John Doe"
                placeholderTextColor="#999"
                style={styles.input}
              />
            </View>

            {/* Email */}
            <Text style={styles.label}>EMAIL ADDRESS</Text>

            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={22} color="#999" />

              <TextInput
                placeholder="john@example.com"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>

            {/* Phone */}
            <Text style={styles.label}>PHONE NUMBER</Text>

            <View style={styles.inputContainer}>
              <Ionicons name="call-outline" size={22} color="#999" />

              <TextInput
                placeholder="+91 9876543210"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                style={styles.input}
              />
            </View>

            {/* Password */}
            <Text style={styles.label}>PASSWORD</Text>

            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={22} color="#999" />

              <TextInput
                placeholder="••••••••"
                placeholderTextColor="#999"
                secureTextEntry
                style={styles.input}
              />
            </View>

            {/* Confirm Password */}
            <Text style={styles.label}>CONFIRM PASSWORD</Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="shield-checkmark-outline"
                size={22}
                color="#999"
              />

              <TextInput
                placeholder="••••••••"
                placeholderTextColor="#999"
                secureTextEntry
                style={styles.input}
              />
            </View>

            {/* Signup Button */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />

              <Text style={styles.orText}>OR</Text>

              <View style={styles.divider} />
            </View>

            {/* Google Button */}
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-google" size={22} color="#DB4437" />

              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            {/* Apple Button */}
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-apple" size={22} color="black" />

              <Text style={styles.socialButtonText}>Continue with Apple</Text>
            </TouchableOpacity>

            {/* Footer */}
            <Text style={styles.footerText}>
              Already have an account?
              <Text
                style={styles.login}
                onPress={() => router.push("/auth/LoginScreen")}
              >
                {" "}
                Sign In
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "#FF5A3D",
  },

  topContainer: {
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    fontSize: 72,
  },

  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    marginTop: 10,
  },

  subtitle: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
  },

  bottomContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 25,
    paddingTop: 35,
    paddingBottom: 40,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#555",
    marginBottom: 10,
    marginTop: 15,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    paddingHorizontal: 15,
  },

  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 16,
    fontSize: 16,
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

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#DDD",
  },

  orText: {
    marginHorizontal: 10,
    color: "#777",
    fontWeight: "600",
  },

  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 15,
  },

  socialButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  footerText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },

  login: {
    color: "#FF5A3D",
    fontWeight: "700",
  },
});
