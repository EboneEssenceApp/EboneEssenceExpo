import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/auth.styles";

export default function AuthScreen() {
  const { initialMode } = useLocalSearchParams<{
    initialMode: "login" | "register";
  }>();
  const [mode, setMode] = useState<"login" | "register">(
    initialMode || "login",
  );
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#2D0845"
        translucent={true}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "#8C2AC2",
            "#7526B6",
            "#5B089D",
            "#3A0055",
            "#220033",
            "#100019",
          ]}
          style={[
            styles.gradient,
            Platform.OS === "android" && {
              paddingTop: StatusBar.currentHeight,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          <View style={styles.header}>
            <Image
              source={require("../../assets/images/ebone-essence-title.png")}
              style={styles.titleImage}
            />
          </View>

          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                mode === "login" && styles.toggleButtonActive,
              ]}
              onPress={() => setMode("login")}
            >
              <Text style={styles.toggleText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                mode === "register" && styles.toggleButtonActive,
              ]}
              onPress={() => setMode("register")}
            >
              <Text style={styles.toggleText}>Register</Text>
            </TouchableOpacity>
          </View>

          {mode === "login" ? (
            <>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                secureTextEntry
              />
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setKeepLoggedIn(!keepLoggedIn)}
              >
                <View
                  style={[
                    styles.customCheckbox,
                    keepLoggedIn && styles.customCheckboxChecked,
                  ]}
                >
                  {keepLoggedIn && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.checkboxLabel}>Keep me logged in</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                secureTextEntry
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                secureTextEntry
              />
              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => {
                  // Handle registration logic here
                  router.push("/(auth)/verify");
                }}
              >
                <Text style={styles.submitText}>Register</Text>
              </TouchableOpacity>
            </>
          )}

          <Image
            source={require("../../assets/images/heart-icon.png")}
            style={styles.decorativeIcon}
          />
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
}
