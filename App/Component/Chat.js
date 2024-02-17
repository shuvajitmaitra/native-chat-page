import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useFonts } from "expo-font";

const PersonChats = ({
  isPersonActive = false, // isPersonActive means that the user is active or inactive if you pass "true" as props it will show you green state otherwise it will show gray status means inactive status means
  numberOfPendingMessage = 0, // numberOfPendingMessage means how many pending messages. I pass the number of pending messages from the props
  isMessageSeen = false, // isMessageSeen means if the seen the message text will normal and if it not clicked messages will be shown as bold text
  isChatClicked = false, // isChatClicked means it clicked or not if it was clicked its background will be white otherwise it will be gray
  profileName = "", // profileName means the name of person. We can the group name or chat name through the props.
  profileImage,
  messageText = "Hey, I am here...",
  messagingTime,
}) => {
  const words = profileName.split(" ");
  const sortName = words.map((word) => word.charAt(0)).join("");
  const newProfileName =
    profileName.length > 15 ? `${profileName.slice(0, 15)}...` : profileName;

  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../assets/Fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../../assets/Fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("../../assets/Fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../../assets/Fonts/Inter-SemiBold.ttf"),
    "KodeMono-Regular": require("../../assets/Fonts/KodeMono-Regular.ttf"),
    "KodeMono-Bold": require("../../assets/Fonts/KodeMono-Bold.ttf"),
    "KodeMono-Medium": require("../../assets/Fonts/KodeMono-Medium.ttf"),
    "KodeMono-SemiBold": require("../../assets/Fonts/KodeMono-SemiBold.ttf"),
    "WorkSans-Regular": require("../../assets/Fonts/WorkSans-Regular.ttf"),
    "WorkSans-Bold": require("../../assets/Fonts/WorkSans-Bold.ttf"),
    "WorkSans-Medium": require("../../assets/Fonts/WorkSans-Medium.ttf"),
    "WorkSans-SemiBold": require("../../assets/Fonts/WorkSans-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isChatClicked ? "white" : "#F8F8F8" },
      ]}
    >
      <View style={styles.subContainer}>
        <View style={styles.profileImageContainer}>
          <>
            {profileImage ? (
              <Image style={styles.profileImage} source={profileImage} />
            ) : (
              <View style={styles.altOfProfileImage}>
                <Text style={styles.sortName}>{sortName}</Text>
              </View>
            )}
          </>

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
            {messageText}
          </Text>
        </View>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.messageTime}>{messagingTime}</Text>
        <View style={styles.messageNumberContainer}>
          {numberOfPendingMessage ? (
            <Text style={styles.messageNumber}>{numberOfPendingMessage}</Text>
          ) : (
            <></>
          )}
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
    paddingVertical: responsiveWidth(3.3),
    borderRadius: responsiveWidth(2),
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveWidth(4),
  },
  altOfProfileImage: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(100),
    position: "relative",
    backgroundColor: "rgba(35, 67, 56, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
  sortName: {
    color: "white",
    fontSize: responsiveFontSize(2),
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
    fontSize: responsiveFontSize(2.4),
    fontFamily: "WorkSans-Medium",
    // fontWeight: "500",
    color: "black",
  },
  messageTime: {
    color: "rgba(111, 116, 124, 1)",
  },
  timeContainer: {
    alignItems: "flex-end",
    gap: responsiveHeight(1.2),
  },
  messageNumberContainer: {
    alignItems: "center",
  },
  messageNumber: {
    paddingHorizontal: responsiveWidth(1.3),
    paddingVertical: responsiveWidth(0.1),
    backgroundColor: "#27ac1f",
    textAlign: "center",
    color: "#ffffff",
    borderRadius: responsiveWidth(100),
    fontSize: responsiveFontSize(1.5),
  },
});
