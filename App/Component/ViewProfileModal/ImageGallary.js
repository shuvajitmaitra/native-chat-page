import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";

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
        gap: responsiveWidth(3),
      }}
    >
      {data.map((item, index) => (
        <Image
          key={index}
          style={{
            height: responsiveWidth(24.6),
            width: responsiveWidth(24.6),
            resizeMode: "cover",
          }}
          source={item.image}
        />
      ))}
    </View>
  );
};

export default ImageGallary;

const styles = StyleSheet.create({});
