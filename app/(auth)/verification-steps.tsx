import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { styles } from "../../styles/verify-id.styles";
import { useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

type MyComponentProps = {
  style?: object;
  source: any;
};

const MyComponent: React.FC<MyComponentProps> = ({ style, source }) => {
  return <Image style={style} source={source} />;
};

export default function VerificationStepsScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  const handleStartVerification = async () => {
    if (!permission || !permission.granted) {
      Alert.alert(
        "Camera Access Required",
        "We need access to your camera to proceed with verification.",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Grant Access",
            onPress: async () => {
              const { granted } = await requestPermission();
              if (granted) {
                router.push("/(auth)/verify-id");
              } else {
                Alert.alert(
                  "Permission Denied",
                  "Camera access is needed to proceed.",
                );
              }
            },
          },
        ],
      );
      return;
    }
    router.push("/(auth)/verify-id");
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1A1A40"
        translucent={true}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient
          colors={["#B32872", "#5A189A", "#1A1A40"]}
          style={styles.gradient}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Verification Steps</Text>

          <View style={styles.stepsContainer}>
            <View style={styles.stepItem}>
              <Ionicons name="camera" size={32} color="white" />
              <Text style={styles.stepText}>Take a selfie</Text>
            </View>
            <View style={styles.stepItem}>
              <Ionicons name="id-card" size={32} color="white" />
              <Text style={styles.stepText}>Capture front of ID</Text>
            </View>
            <View style={styles.stepItem}>
              <Ionicons name="id-card" size={32} color="white" />
              <Text style={styles.stepText}>Capture back of ID</Text>
            </View>
          </View>
          <View style={styles.whyInfoTextContainer}>
            <Text style={styles.infoText}>
              We prioritize safety, authenticity, and a premium user experience.
              To help create a secure community free from fake profiles and
              scams, we require all users to complete identity verification.
            </Text>
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={[styles.infoText, { marginBottom: 0 }]}>
              • Place your face in the circle
            </Text>
            <Text style={[styles.infoText, { marginBottom: 0 }]}>
              • Ensure good lighting
            </Text>
            <Text style={[styles.infoText, { marginBottom: 0 }]}>
              • Ensure all details are visible
            </Text>
            <Text style={[styles.infoText, { marginBottom: 0 }]}>
              • Take a photo of each side of your ID
            </Text>
          </View>

          <View style={styles.verificationSubmitContainer}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleStartVerification}
            >
              <Text style={styles.submitText}>Start Verification</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={require("../../assets/images/heart-icon.png")}
            style={styles.confirmDecorativeIcon}
          />
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
}
