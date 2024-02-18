import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ImageGallary from "./ImageGallary";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useFonts } from "expo-font";

const TabView = () => {
  const [status, setStatus] = useState("Images");
  const tabLists = [
    {
      status: "Images",
    },
    {
      status: "Files",
    },
    {
      status: "Voice",
    },
  ];

  const handleTabStatus = (status) => {
    setStatus(status);
  };

  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("../../../assets/Fonts/WorkSans-Regular.ttf"),
    "WorkSans-Bold": require("../../../assets/Fonts/WorkSans-Bold.ttf"),
    "WorkSans-Medium": require("../../../assets/Fonts/WorkSans-Medium.ttf"),
    "WorkSans-SemiBold": require("../../../assets/Fonts/WorkSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabLists.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTabStatus(tab.status)}
          >
            <Text
              style={[
                { fontFamily: "WorkSans-Medium" },
                status === tab.status && styles.tabActive,
              ]}
            >
              {tab.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{ borderBottomWidth: 1, borderColor: "rgba(0, 0, 0, 0.1)" }}
      ></View>
      <View>{status === "Images" && <ImageGallary />}</View>
    </View>
  );
};

export default TabView;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(50),
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  tabActive: {
    color: "rgba(39, 172, 31, 1)",
    borderBottomColor: "rgba(39, 172, 31, 1)",
    borderBottomWidth: 1,
    paddingVertical: responsiveWidth(1),
  },
});
