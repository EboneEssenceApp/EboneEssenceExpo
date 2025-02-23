import { CameraView, CameraType } from "expo-camera";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "../../styles/verify-id.styles";

export default function VerifyIdScreen() {
  const [type, setType] = useState<CameraType>("back");

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={type}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setType(type === "back" ? "front" : "back");
            }}
          >
            <Text>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}
