import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
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
            <Image style={styles.profileImage} source={item.profileImage} />

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
    paddingVertical: responsiveScreenHeight(1),
  },
  profileImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(4),
  },
  profileImage: {
    width: responsiveScreenWidth(10),
    height: responsiveScreenWidth(10),
    borderRadius: responsiveScreenWidth(100),
    resizeMode: "cover",
    position: "relative",
  },
  activeDot: {
    width: responsiveScreenWidth(2.7),
    height: responsiveScreenWidth(2.7),
    borderRadius: responsiveScreenWidth(100),
    position: "absolute",
    bottom: responsiveScreenWidth(0.9),
    right: -2,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  profileName: {
    fontSize: responsiveScreenFontSize(2.5),
    fontWeight: "500",
    color: "black",
  },
  comments: {
    color: "rgba(11, 42, 70, 1)",
    fontSize: responsiveScreenFontSize(1.9),
    paddingVertical: responsiveScreenHeight(0.2),
  },
  commentsTime: {
    color: "rgba(111, 116, 124, 1)",
    fontSize: responsiveScreenFontSize(1.9),
  },
});
