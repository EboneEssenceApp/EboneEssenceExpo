import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D0845",
  },
  gradient: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) + 20 : 20,
    left: 20,
    zIndex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
    marginBottom: 40,
  },
  requirementsList: {
    width: "100%",
    marginBottom: 40,
  },
  requirementItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  requirementText: {
    color: "white",
    fontSize: 16,
    marginLeft: 12,
  },
  cameraContainer: {
    width: "100%",
    height: "70%",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 40,
  },
  camera: {
    flex: 1,
  },
  cameraOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  selfieGuide: {
    width: width * 0.75,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selfieOutline: {
    width: "100%",
    height: "100%",
    borderRadius: width * 0.325,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  idGuide: {
    width: width * 0.9,
    aspectRatio: 1.3,
    justifyContent: "center",
    alignItems: "center",
  },
  idOutline: {
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 8,
  },
  captureButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  captureButtonInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "white",
  },
  submitButton: {
    backgroundColor: "#9C27B0",
    paddingVertical: 16,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#FFD966",
  },
  submitText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  completeContainer: {
    alignItems: "center",
    gap: 20,
    marginBottom: 40,
  },
  decorativeIcon: {
    width: 40,
    height: 40,
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
  },
  photoGrid: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 20,
    justifyContent: "center",
  },
  thumbnailImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
});
