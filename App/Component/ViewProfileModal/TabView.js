import {
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


  return (
    <View
      style={[
        styles.tabViewcontainer,
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
  tabViewcontainer: {
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
