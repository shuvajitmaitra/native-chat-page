import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { useFonts } from "expo-font";
import ArrowRight from "../../../assets/svgs/ArrowRight";
import ArrowDown from "../../../assets/svgs/ArrowDown";

const UploadedFile = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/Fonts/Inter-Black.ttf"),
    "Inter-Regular": require("../../../assets/Fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../../../assets/Fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("../../../assets/Fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../../../assets/Fonts/Inter-SemiBold.ttf"),
    "KodeMono-Regular": require("../../../assets/Fonts/KodeMono-Regular.ttf"),
    "KodeMono-Bold": require("../../../assets/Fonts/KodeMono-Bold.ttf"),
    "KodeMono-Medium": require("../../../assets/Fonts/KodeMono-Medium.ttf"),
    "KodeMono-SemiBold": require("../../../assets/Fonts/KodeMono-SemiBold.ttf"),
    "WorkSans-Regular": require("../../../assets/Fonts/WorkSans-Regular.ttf"),
    "WorkSans-Bold": require("../../../assets/Fonts/WorkSans-Bold.ttf"),
    "WorkSans-Medium": require("../../../assets/Fonts/WorkSans-Medium.ttf"),
    "WorkSans-SemiBold": require("../../../assets/Fonts/WorkSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  const data = [
    {
      fileName: "Group 20.jpg",
      fileURL: require("../../../assets/Images/file.png"),
      fileSize: "199.4KB",
      dateTime: "30.11.23 at 12:30 PM",
    },
    {
      fileName: "Group 20.jpg",
      fileURL: require("../../../assets/Images/file.png"),
      fileSize: "199.4KB",
      dateTime: "30.11.23 at 12:30 PM",
    },
    {
      fileName: "Group 20.jpg",
      fileURL: require("../../../assets/Images/file.png"),
      fileSize: "199.4KB",
      dateTime: "30.11.23 at 12:30 PM",
    },
    {
      fileName: "Group 20.jpg",
      fileURL: require("../../../assets/Images/file.png"),
      fileSize: "199.4KB",
      dateTime: "30.11.23 at 12:30 PM",
    },
  ];
  return (
    <View>
      <View style={styles.container}>
        {data.map((item, index) => (
          <View key={index} style={styles.subContainer}>
            <Image source={item.fileURL} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.fileName}>{item.fileName}</Text>
              <View style={styles.sizeAndDateContainer}>
                <ArrowDown />
                <Text style={styles.sizeTimeText}>{item.fileSize}</Text>
                <Text style={styles.sizeTimeText}>{item.dateTime}</Text>
              </View>
            </View>
          </View>
        ))}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: responsiveScreenWidth(2),
            paddingVertical: responsiveScreenHeight(1),
          }}
        >
          <Text
            style={{
              color: "rgba(39, 172, 31, 1)",
              fontFamily: "Inter-SemiBold",
              fontSize: responsiveScreenFontSize(1.8),
            }}
          >
            See More
          </Text>
          <ArrowRight />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadedFile;

const styles = StyleSheet.create({
  sizeTimeText: {
    color: "rgba(102, 102, 102, 1)",
    fontFamily: "WorkSans-Regular",
    fontSize: responsiveScreenFontSize(1.8),
  },
  fileName: {
    fontFamily: "WorkSans-SemiBold",
    fontSize: responsiveScreenFontSize(1.9),
  },
  textContainer: {
    gap: responsiveScreenHeight(1),
  },
  subContainer: {
    flexDirection: "row",
    gap: responsiveScreenWidth(3),
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.1)",
    paddingVertical: responsiveScreenHeight(2.1),
  },
  sizeAndDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(1),
  },
  container: {
    // gap: responsiveScreenHeight(3),
    // backgroundColor: "red",
  },
});
