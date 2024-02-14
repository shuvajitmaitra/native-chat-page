import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import ThreadComments from "../Component/ThreadComments";

const Thread = () => {
  const threadData = [
    {
      profileName: "Priyanka Parvej",
      profileImage: require("../../assets/women2.png"),
      messageText: "Hello",
      messagingTime: "Just now",
      isPersonActive: false,
    },
    {
      profileName: "Priyanka Parvej",
      profileImage: require("../../assets/women2.png"),
      messageText: "Hello",
      messagingTime: "Yesterday",
      isPersonActive: false,
    },
    {
      profileName: "Priyanka Parvej",
      profileImage: require("../../assets/women2.png"),
      messageText: "Hello",
      messagingTime: "Jan 12, 2024",
      isPersonActive: false,
    },
    {
      profileName: "Priyanka Parvej",
      profileImage: require("../../assets/women2.png"),
      messageText: "Hello",
      messagingTime: "Jan 12, 2024",
      isPersonActive: false,
    },
    {
      profileName: "Priyanka Parvej",
      profileImage: require("../../assets/women2.png"),
      messageText: "Hello",
      messagingTime: "Jan 12, 2024",
      isPersonActive: false,
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.profileImageContainer}>
          {/* -------------------------- */}
          {/* ----------- Profile Image ----------- */}
          {/* -------------------------- */}
          <View>
            <Image
              style={styles.profileImage}
              source={require("../../assets/women2.png")}
            />

            <View
              style={[
                styles.activeDot,
                {
                  backgroundColor: "#BDBDBD",
                },
              ]}
            ></View>
          </View>
          <View>
            <Text style={styles.profileName}>Priyanka Parvej</Text>
            <Text style={styles.messageTime}>4 Nov, 2023</Text>
          </View>
        </View>
      </ScrollView>
      {/* -------------------------- */}
      {/* ----------- Thread Text ----------- */}
      {/* -------------------------- */}
      <View>
        <Text style={styles.threadText}>I miss you to much.</Text>
      </View>
      {/* -------------------------- */}
      {/* ----------- Replay Count ----------- */}
      {/* -------------------------- */}
      <View>
        <Text style={styles.replayCountText}>5 replies</Text>
      </View>
      {/* -------------------------- */}
      {/* ----------- All Thread Comments ----------- */}
      {/* -------------------------- */}
      <View>
        {threadData.map((item, index) => (
          <ThreadComments key={index} item={item} />
        ))}
      </View>
    </View>
  );
};

export default Thread;

const styles = StyleSheet.create({
  container: {
    paddingVertical: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(5),
  },
  profileImageContainer: {
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
    width: responsiveWidth(2.6),
    height: responsiveWidth(2.6),
    borderRadius: responsiveWidth(100),
    position: "absolute",
    bottom: responsiveWidth(0.9),
    right: -2,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  profileName: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "500",
    color: "black",
  },
  messageTime: {
    color: "rgba(111, 116, 124, 1)",
  },
  threadText: {
    fontSize: responsiveFontSize(2.1),
    color: "rgba(11, 42, 70, 1)",
    paddingVertical: responsiveHeight(2.8),
  },
  replayCountText: {
    color: "rgba(39, 172, 31, 1)",
    // fontSize: responsiveFontSize(1.6),
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    paddingBottom: responsiveHeight(2.5),
  },
});
