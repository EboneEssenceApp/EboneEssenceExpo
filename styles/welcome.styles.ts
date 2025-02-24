import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6A530",
  },
  gradient: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  logoContainer: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 10,
    overflow: "hidden",
  },
  titleImage: {
    width: width * 0.9,
    height: 60,
    resizeMode: "contain",
    marginBottom: 12,
  },
  logoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    marginTop: -15,
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
    marginBottom: 38,
    lineHeight: 24,
    paddingHorizontal: 20,
    marginTop: 16,
  },
  getStartedButton: {
    backgroundColor: "#16A085",
    paddingVertical: 16,
    borderRadius: 50,
    width: "90%",
    alignItems: "center",
    marginTop: 5,
    borderWidth: 2,
    borderColor: "#E6B800",
    alignSelf: "center",
  },
  getStartedText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
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
    marginTop: 40,
  },
});
