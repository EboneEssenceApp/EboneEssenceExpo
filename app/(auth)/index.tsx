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
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/images/couples-icon.png")}
              style={styles.logoImage}
            />
          </View>

          <Image
            source={require("../../assets/images/ebone-essence-title.png")}
            style={styles.titleImage}
          />

          <Text style={styles.tagline}>Vibe. Love. Thrive.</Text>

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
