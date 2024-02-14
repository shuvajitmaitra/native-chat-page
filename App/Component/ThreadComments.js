import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const ThreadComments = ({ item }) => {
  return (
    <View>
      <View style={styles.subContainer}>
        {/* -------------------------- */}
        {/* ----------- Profile Image ----------- */}
        {/* -------------------------- */}
        <View style={styles.profileImageContainer}>
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
            <Text style={styles.comments}>{item.comments}</Text>
          </View>
        </View>
        {/* -------------------------- */}
        {/* ----------- Comment time ----------- */}
        {/* -------------------------- */}
        <View>
          <Text style={styles.commentsTime}>{item.commentsTimes}</Text>
        </View>
      </View>
    </View>
  );
};

export default ThreadComments;

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: responsiveHeight(1.3),
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
  comments: {
    color: "rgba(11, 42, 70, 1)",
    fontSize: responsiveFontSize(1.9),
    paddingVertical: responsiveHeight(0.2),
  },
  commentsTime: {
    color: "rgba(111, 116, 124, 1)",
    fontSize: responsiveFontSize(1.9),
  },
});
