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
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
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
      status: "Voice",
    },
  ];

  const handleTabStatus = (status) => {
    setStatus(status);
  };

  return (
    <View
      style={[
        styles.container,
        status === "Files" && { height: responsiveHeight(53) } || status === "Members" && { height: responsiveHeight(65)},
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
                  fontSize: responsiveFontSize(1.8),
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
          (status === "Voice" && <VoiceFile />)}
      </View>
    </View>
  );
};

export default GroupTabView;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(57),
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: responsiveHeight(1),
  },
  tabActive: {
    color: "rgba(39, 172, 31, 1)",
    borderBottomColor: "rgba(39, 172, 31, 1)",
    borderBottomWidth: 2,
    paddingVertical: responsiveWidth(1),
  },
});
