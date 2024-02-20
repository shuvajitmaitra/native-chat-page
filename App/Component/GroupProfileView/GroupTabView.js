import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ImageGallary from "../SharedComponent/ImageGallary";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import Fonts from "../../../assets/Fonts/Fonts";
import UploadedFile from "../SharedComponent/UploadedFile";
import VoiceFile from "../SharedComponent/VoiceFile";
import GroupMembers from "./GroupMembers";

const GroupTabView = () => {
  const [status, setStatus] = useState("Members");
  const tabLists = [
    {
      status: "Members",
    },
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
        styles.container,
        (status === "Files" && { minHeight: responsiveScreenHeight(10) }) ||
          (status === "Members" && { minHeight: responsiveScreenHeight(10) }),
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
        {(status === "Members" && <GroupMembers />) ||
          (status === "Images" && <ImageGallary />) ||
          (status === "Files" && <UploadedFile />) ||
          (status === "Voices" && <VoiceFile />)}
      </View>
    </View>
  );
};

export default GroupTabView;

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "red",
  //   minHeight: responsiveScreenHeight(15),
  // },
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
