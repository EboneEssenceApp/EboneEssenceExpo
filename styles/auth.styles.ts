import { StyleSheet, Platform, StatusBar } from "react-native";

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
  toggleContainer: {
    flexDirection: "row",
    marginBottom: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    overflow: "hidden",
  },
  toggleButton: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
  toggleButtonActive: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  toggleText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 25,
    padding: 15,
    marginBottom: 35,
    color: "white",
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -20,
  },
  customCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  customCheckboxChecked: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  checkmark: {
    color: "white",
    fontSize: 16,
  },
  checkboxLabel: {
    color: "white",
    fontSize: 14,
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
  forgotPasswordButton: {
    alignItems: "center",
    marginTop: 20,
  },
  forgotPasswordText: {
    color: "white",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  decorativeIcon: {
    width: 40,
    height: 40,
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
  },
});
