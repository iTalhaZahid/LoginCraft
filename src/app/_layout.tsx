import Feather from "@expo/vector-icons/Feather";
import { Stack } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home" }}
      />
      <Stack.Screen name="simpleLogin" options={{ headerShown: false }} />
      <Stack.Screen name="loginwithnumber" options={{ headerShown: false }} />

      <Stack.Screen
        name="setting"
        options={{
          title: "Settings",

        }} />
    </Stack>
  );
}
