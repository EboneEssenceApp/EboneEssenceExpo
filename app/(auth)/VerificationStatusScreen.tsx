import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "../../styles/verify-id.styles";
import { router } from "expo-router";

export default function VerificationStatusScreen() {
  const [status, setStatus] = useState("Pending");
  const [loading, setLoading] = useState(false);

  const checkStatus = async () => {
    setLoading(true);
    // Simulate an API call to check verification status
    setTimeout(() => {
      setStatus("Verified"); // Update this based on actual API response
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    if (status === "Verified") {
      // Redirect to home screen if verified
      router.push("/(tabs)");
    }
  }, [status]);

  return (
    <View style={styles.container}>
      <Text style={styles.statusTitle}>Verification Status</Text>
      <Text style={styles.statusSubtitle}>Your current status: {status}</Text>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={
          status === "Verified" ? () => router.push("/(tabs)") : checkStatus
        }
      >
        <Text style={styles.submitText}>
          {status === "Verified" ? "Go Home" : "Check Status"}
        </Text>
      </TouchableOpacity>
      {loading && <ActivityIndicator size="large" color="#ffffff" />}
    </View>
  );
}
