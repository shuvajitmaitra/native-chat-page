import { useFonts } from "expo-font";

import { View, Text } from "react-native";
import React from "react";

const Fonts = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./Inter-Black.ttf"),
    "Inter-Regular": require("./Inter-Regular.ttf"),
    "Inter-Bold": require("./Inter-Bold.ttf"),
    "Inter-Medium": require("./Inter-Medium.ttf"),
    "Inter-SemiBold": require("./Inter-SemiBold.ttf"),
    "KodeMono-Regular": require("./KodeMono-Regular.ttf"),
    "KodeMono-Bold": require("./KodeMono-Bold.ttf"),
    "KodeMono-Medium": require("./KodeMono-Medium.ttf"),
    "KodeMono-SemiBold": require("./KodeMono-SemiBold.ttf"),
    "WorkSans-Regular": require("./WorkSans-Regular.ttf"),
    "WorkSans-Bold": require("./WorkSans-Bold.ttf"),
    "WorkSans-Medium": require("./WorkSans-Medium.ttf"),
    "WorkSans-SemiBold": require("./WorkSans-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return fontsLoaded;
};

export default Fonts;
