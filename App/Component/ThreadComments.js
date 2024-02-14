import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const ThreadComments = ({ item }) => {
  return (
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
  );
};

export default ThreadComments;

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
});
