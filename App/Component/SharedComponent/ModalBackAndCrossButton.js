import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import ArrowLeft from "../../../assets/svgs/ArrowLeft";
import CrossIcon from "../../../assets/svgs/CrossIcon";

export const ModalBackAndCrossButton = ({ toggleModal }) => {
  return (
    <View style={backAndCrossStyles.topBarContainer}>
      <TouchableOpacity
        onPress={toggleModal}
        style={backAndCrossStyles.modalArrowIcon}
      >
        <ArrowLeft />
        <Text style={backAndCrossStyles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={backAndCrossStyles.cancelButton}
        onPress={toggleModal}
      >
        <CrossIcon />
      </TouchableOpacity>
    </View>
  );
};

const backAndCrossStyles = StyleSheet.create({
  topBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: "100%",
    paddingTop: responsiveScreenHeight(1.5),
    paddingBottom: responsiveScreenHeight(2),
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.15)",
  },
  modalArrowIcon: {
    paddingBottom: responsiveScreenHeight(0.8),
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(2),
    color: "rgba(71, 71, 72, 1)",
  },
  backButtonText: {
    color: "rgba(84, 106, 126, 1)",
    fontFamily: "Inter-Medium",
    fontSize: responsiveScreenFontSize(1.8),
  },
  cancelButton: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: responsiveScreenWidth(2.5),
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
