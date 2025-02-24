import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A40",
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
  header: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  titleImage: {
    width: 200,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginBottom: 12,
    marginTop: 70,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 40,
  },
  otpInput: {
    width: 45,
    height: 45,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    color: "white",
    fontSize: 20,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  submitButton: {
    backgroundColor: "#16A085",
    paddingVertical: 16,
    borderRadius: 100,
    width: "90%",
    alignItems: "center",
    marginTop: 24,
    borderWidth: 2,
    borderColor: "#E6B800",
    alignSelf: "center",
  },
  submitText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  resendText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 14,
  },
  resendButton: {
    color: "#FFD966",
    fontSize: 14,
    fontWeight: "600",
  },
  decorativeIcon: {
    width: 40,
    height: 40,
    position: "absolute",
    bottom: 15,
    alignSelf: "center",
  },
});
