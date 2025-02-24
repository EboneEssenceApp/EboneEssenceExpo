import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  Pressable,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { styles } from "../../styles/welcome.styles";

export default function WelcomeScreen() {
  const [isLoginPressed, setIsLoginPressed] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#E6A530"
        translucent={true}
      />
      <SafeAreaView style={[{ flex: 1 }, { backgroundColor: "#1A1A40" }]}>
        <LinearGradient
          colors={["#E6B800", "#E69E40", "#B32872", "#5A189A", "#1A1A40"]}
          // locations={[0, 0.3, 0.6, 1, 1]} // adjust gradient color locations
          style={[
            styles.gradient,
            Platform.OS === "android" && {
              paddingTop: StatusBar.currentHeight,
            },
          ]}
        >
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/images/social-love2.png")}
              style={styles.logoImage}
            />
          </View>

          <Image
            source={require("../../assets/images/ebone-essence-title.png")}
            style={styles.titleImage}
          />

          <Text style={styles.tagline}>Vibe. Love. Culture.</Text>

          <Text style={styles.subtitle}>
            A premier space for social connections,{"\n"}meaningful love, and a
            thriving community.
          </Text>

          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={() =>
              router.push({
                pathname: "/(auth)/auth",
                params: { initialMode: "register" },
              })
            }
          >
            <Text style={styles.getStartedText}>GET STARTED</Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <Pressable
              onPressIn={() => setIsLoginPressed(true)}
              onPressOut={() => setIsLoginPressed(false)}
              onPress={() =>
                router.push({
                  pathname: "/(auth)/auth",
                  params: { initialMode: "login" },
                })
              }
            >
              <Text
                style={[
                  styles.loginHighlight,
                  isLoginPressed && styles.loginHighlightPressed,
                ]}
              >
                Log In
              </Text>
            </Pressable>
          </View>

          <Image
            source={require("../../assets/images/heart-icon.png")}
            style={styles.decorativeIcon}
          />
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
}
