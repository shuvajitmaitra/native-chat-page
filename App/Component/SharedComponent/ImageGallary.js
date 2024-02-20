import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { FontAwesome6 } from "@expo/vector-icons";
import ArrowRight from "../../../assets/svgs/ArrowRight";

const ImageGallary = () => {
  const data = [
    {
      image: require("../../../assets/women6.png"),
    },
    {
      image: require("../../../assets/man1.png"),
    },
    {
      image: require("../../../assets/women4.png"),
    },
    {
      image: require("../../../assets/man2.png"),
    },
    {
      image: require("../../../assets/women7.png"),
    },
    {
      image: require("../../../assets/women8.png"),
    },
    {
      image: require("../../../assets/women5.png"),
    },
    {
      image: require("../../../assets/women9.png"),
    },
    {
      image: require("../../../assets/man3.png"),
    },
  ];
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: responsiveScreenWidth(2.5),
        paddingTop: responsiveScreenHeight(2),
        borderTopColor: "rgba(0, 0, 0, 0.1)",
        borderTopWidth: 1,
      }}
    >
      {data.map((item, index) => (
        <Image
          key={index}
          style={{
            height: responsiveScreenWidth(28),
            width: responsiveScreenWidth(25),
            resizeMode: "cover",
          }}
          source={item.image}
        />
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
  );
};

export default ImageGallary;

const styles = StyleSheet.create({
  modalArrowIcon: {
    fontSize: responsiveScreenFontSize(2.5),
    paddingBottom: responsiveScreenHeight(0.8),
    color: "rgba(71, 71, 72, 1)",
  },
});
