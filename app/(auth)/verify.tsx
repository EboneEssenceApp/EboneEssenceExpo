import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/verify.styles";
export default function VerifyScreen() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<TextInput[]>([]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Move to previous input on backspace if current input is empty
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

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

          <Text style={styles.title}>Enter Verification Code</Text>
          <Text style={styles.subtitle}>
            We've sent a 6-digit code to your email
          </Text>

          <View style={styles.otpContainer}>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref as TextInput)}
                  style={styles.otpInput}
                  maxLength={1}
                  keyboardType="number-pad"
                  onChangeText={(value) => handleOtpChange(value, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  value={otp[index]}
                />
              ))}
          </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => router.push("/(auth)/verify-id")}
          >
            <Text style={styles.submitText}>Verify Email</Text>
          </TouchableOpacity>

          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't receive the code? </Text>
            <TouchableOpacity>
              <Text style={styles.resendButton}>Resend</Text>
            </TouchableOpacity>
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
