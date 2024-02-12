import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const PersonChats = ({
  isPersonActive = false,
  isMessageSeen = false,
  isChatClicked = false,
  profileName,
}) => {
  const newProfileName =
    profileName.length > 14 ? `${profileName.slice(0, 14)}...` : profileName;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isChatClicked ? "" : "white" },
      ]}
    >
      <View style={styles.subContainer}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={require("../../assets/women1.png")}
          />
          <View
            style={[
              styles.activeDot,
              { backgroundColor: isPersonActive ? "#62cc7b" : "#BDBDBD" },
            ]}
          ></View>
        </View>
        <View>
          <Text style={styles.profileName}>{newProfileName}</Text>
          <Text
            style={{
              fontWeight: isMessageSeen ? "400" : "700",
              color: isMessageSeen ? "rgba(0, 0, 0, 0.7)" : "black",
            }}
          >
            Hey, I am here...
          </Text>
        </View>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.messageTime}>10:30 AM</Text>
        <View style={styles.messageNumberContainer}>
          {isMessageSeen ? <></> : <Text style={styles.messageNumber}>5</Text>}
        </View>
      </View>
    </View>
  );
};

export default PersonChats;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveWidth(4),
    borderRadius: responsiveWidth(2),
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveWidth(4),
  },
  profileImage: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(100),
    resizeMode: "cover",
    position: "relative",
  },
  activeDot: {
    width: responsiveWidth(2.8),
    height: responsiveWidth(2.8),
    borderRadius: responsiveWidth(100),

    position: "absolute",
    bottom: responsiveWidth(0.9),
    right: -2,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  profileName: {
    fontSize: responsiveWidth(5.3),
    fontWeight: "500",
    color: "black",
  },
  messageTime: {
    color: "rgba(111, 116, 124, 1)",
  },
  timeContainer: {
    alignItems: "flex-end",
    gap: responsiveHeight(1),
  },
  messageNumberContainer: {
    alignItems: "center",
  },
  messageNumber: {
    paddingHorizontal: responsiveWidth(1.2),
    backgroundColor: "#27ac1f",
    textAlign: "center",
    color: "#ffffff",
    borderRadius: responsiveWidth(100),
    fontSize: responsiveFontSize(1.4),
  },
});
