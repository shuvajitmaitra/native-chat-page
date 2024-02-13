import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const CustomModalButton = ({
  textColor,
  backgroundColor,
  buttonText,
  toggleModal,
}) => {
  return (
    <TouchableOpacity
      onPress={toggleModal}
      style={[styles.button, { backgroundColor: backgroundColor }]}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomModalButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#27ac1f",
    width: responsiveWidth(35),
    alignItems: "center",
    borderRadius: 10,
    padding: responsiveWidth(3),
  },
  buttonText: {
    color: "white",
    fontSize: responsiveFontSize(2.2),
  },
});
