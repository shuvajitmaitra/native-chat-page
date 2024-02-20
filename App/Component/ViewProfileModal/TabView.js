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
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { useFonts } from "expo-font";
import UploadedFile from "./UploadedFile";
import VoiceFile from "./VoiceFile";

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
      status: "Voices",
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
    <View
      style={[
        styles.container,
        //  { minHeight: status === "Files" && responsiveScreenHeight(53) || status ==="Voices" },
      ]}
    >
      <View style={styles.tabContainer}>
        {tabLists.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTabStatus(tab.status)}
          >
            <Text
              style={[
                {
                  fontFamily: "WorkSans-Medium",
                  fontSize: responsiveScreenFontSize(1.8),
                },
                status === tab.status && styles.tabActive,
              ]}
            >
              {tab.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        {(status === "Images" && <ImageGallary />) ||
          (status === "Files" && <UploadedFile />) ||
          (status === "Voices" && <VoiceFile />)}
      </View>
    </View>
  );
};

export default TabView;

const styles = StyleSheet.create({
  container: {
    minHeight: responsiveScreenHeight(10),
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: responsiveScreenHeight(1),
  },
  tabActive: {
    color: "rgba(39, 172, 31, 1)",
    borderBottomColor: "rgba(39, 172, 31, 1)",
    borderBottomWidth: 2,
    paddingVertical: responsiveScreenWidth(1),
  },
});
