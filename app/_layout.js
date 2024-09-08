// app/_layout.js
import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Login" }}
      />
      <Stack.Screen
        name="register"
        options={{ headerShown: false, title: "Register" }}
      />
    </Stack>
  );
}
