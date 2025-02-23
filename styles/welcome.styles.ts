import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D0845",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  logoContainer: {
    width: width * 0.6,
    height: width * 0.6,
    marginTop: 20,
    marginBottom: 25,
    overflow: "hidden",
  },
  titleImage: {
    width: width * 0.8,
    height: 60,
    resizeMode: "contain",
    marginBottom: 12,
  },
  logoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  tagline: {
    fontSize: 24,
    color: "white",
    fontFamily: "Marcellus-Regular",
    textAlign: "center",
    marginBottom: 16,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
    marginBottom: 48,
    lineHeight: 24,
    paddingHorizontal: 20,
    marginTop: 16,
  },
  getStartedButton: {
    backgroundColor: "#9C27B0",
    paddingVertical: 16,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#FFD966",
  },
  getStartedText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  loginText: {
    color: "white",
    fontSize: 16,
  },
  loginHighlight: {
    color: "#FFD966",
    fontSize: 16,
    fontWeight: "600",
  },
  loginHighlightPressed: {
    opacity: 0.7,
  },
  decorativeIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginTop: 30,
  },
});
