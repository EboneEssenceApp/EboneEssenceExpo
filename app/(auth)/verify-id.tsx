import React from "react";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/verify-id.styles";

type VerificationStep = "selfie" | "id-front" | "id-back" | "complete";

const CompleteScreen = ({
  photos,
}: {
  photos: { selfie?: string; idFront?: string; idBack?: string };
}) => {
  return (
    <View style={styles.completeContainer}>
      <Ionicons name="checkmark-circle" size={80} color="#4CAF50" />
      <Text style={styles.title}>Verification Complete!</Text>
      <Text style={styles.subtitle}>
        Your photos have been submitted for verification
      </Text>

      <View style={styles.photoGrid}>
        {Object.entries(photos).map(([key, uri]) => (
          <Image key={key} source={{ uri }} style={styles.thumbnailImage} />
        ))}
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => router.push("/(tabs)")}
      >
        <Text style={styles.submitText}>Continue to App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function VerifyIdScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [type, setType] = useState<CameraType>("back");
  const [currentStep, setCurrentStep] = useState<VerificationStep>("selfie");
  const cameraRef = useRef<CameraView>(null);
  const [photos, setPhotos] = useState<{
    selfie?: string;
    idFront?: string;
    idBack?: string;
  }>({});

  const takePicture = async () => {
    if (!cameraRef.current) return;

    try {
      const photo = (await cameraRef.current.takePictureAsync({
        quality: 0.7,
        exif: false,
      })) as { uri: string };

      setPhotos((prev) => ({
        ...prev,
        [currentStep === "selfie"
          ? "selfie"
          : currentStep === "id-front"
          ? "idFront"
          : "idBack"]: photo.uri,
      }));

      // Move to next step
      setCurrentStep((prev) =>
        prev === "selfie"
          ? "id-front"
          : prev === "id-front"
          ? "id-back"
          : "complete",
      );
    } catch (error) {
      console.error("Error taking picture:", error);
    }
  };

  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Camera Permission Required</Text>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={requestPermission}
        >
          <Text style={styles.submitText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (currentStep === "complete") {
    return <CompleteScreen photos={photos} />;
  }

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

          <View
            style={[
              styles.cameraContainer,
              (currentStep === "id-front" || currentStep === "id-back") && {
                height: "85%",
                marginTop: 20,
              },
            ]}
          >
            <CameraView
              style={styles.camera}
              facing={currentStep === "selfie" ? "front" : "back"}
              ref={cameraRef}
            >
              <View style={styles.cameraOverlay}>
                {currentStep === "selfie" ? (
                  <View style={styles.selfieGuide}>
                    <View style={styles.selfieOutline} />
                  </View>
                ) : (
                  <View
                    style={[
                      styles.idGuide,
                      { transform: [{ rotate: "90deg" }] },
                    ]}
                  >
                    <View style={styles.idOutline} />
                  </View>
                )}
              </View>
            </CameraView>
          </View>

          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <View style={styles.captureButtonInner} />
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
}
