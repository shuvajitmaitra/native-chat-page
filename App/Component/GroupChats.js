import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const GroupChats = ({
  isPersonActive = false, // isPersonActive means that the user is active or inactive if you pass "true" as props it will show you green state otherwise it will show gray status means inactive status means
  isMessageSeen = false, // isMessageSeen means if the seen the message text will normal and if it not clicked messages will be shown as bold text
  numberOfPendingMessage = 0, // numberOfPendingMessage means how many pending messages. I pass the number of pending messages from the props
  isChatClicked = false, // isChatClicked means it clicked or not if it was clicked its background will be white otherwise it will be gray
  groupName = "", // groupName means the group. We can the group name or chat name through the props.
  groupImage,
  messageText = "Hey, I am here...", //This props helps us to pass the chat message.
}) => {
  const newGroupName =
    groupName.length > 15 ? `${groupName.slice(0, 15)}...` : groupName;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isChatClicked ? "white" : "#F2F2F2" },
      ]}
    >
      <View style={styles.subContainer}>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profileImage} source={groupImage} />
          <View
            style={[
              styles.activeDot,
              { backgroundColor: isPersonActive ? "#62cc7b" : "#BDBDBD" },
            ]}
          ></View>
        </View>
        <View>
          <Text style={styles.groupName}>{newGroupName}</Text>
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
        <Text style={styles.messageTime}>10:30 AM</Text>
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

export default GroupChats;

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
  groupName: {
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
