import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="auth" />
      <Stack.Screen name="verify" />
      <Stack.Screen name="verify-id" />
      <Stack.Screen name="verification-steps" />
      <Stack.Screen name="VerificationStatusScreen" />
    </Stack>
  );
}
