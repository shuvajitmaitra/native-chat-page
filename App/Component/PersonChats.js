import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";

const PersonChats = ({ active = false }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={require("../../assets/women1.png")}
          />
          <View style={styles.activeDot}></View>
        </View>
        <View>
          <Text style={styles.profileName}>Anamika Rahman</Text>
          <Text style={styles.chatMessage}>Hey, I am here...</Text>
        </View>
      </View>
      <View>
        <Text style={styles.messageTime}>10:30 AM</Text>
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
    paddingHorizontal: responsiveWidth(6),
    paddingVertical: responsiveWidth(4),
    backgroundColor: "white",
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
    // width: 34,
    // height: 34,
    borderRadius: responsiveWidth(25),
    resizeMode: "cover",
    position: "relative",
  },
  activeDot: {
    width: responsiveWidth(2.8),
    height: responsiveWidth(2.8),
    borderRadius: responsiveWidth(100),
    backgroundColor: active ? "#62cc7b" : "gray",
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
  chatMessage: {
    color: "rgba(0, 0, 0, 0.7)",
  },
  messageTime: {
    color: "rgba(111, 116, 124, 1)",
  },
});
