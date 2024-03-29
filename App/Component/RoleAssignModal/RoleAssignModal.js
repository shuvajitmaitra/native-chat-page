import { StyleSheet, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import React from "react";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { FontAwesome6 } from "@expo/vector-icons";
import Fonts from "../../../assets/Fonts/Fonts";
import { RadioButton, Text } from "react-native-paper";
import CustomButton from "../CustomButton";
import ArrowLeft from "../../../assets/svgs/ArrowLeft";
import CrossIcon from "../../../assets/svgs/CrossIcon";

const ModalBackAndCrossButton = ({ toggleModal }) => {
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
    paddingVertical: responsiveScreenHeight(1.5),
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

const RoleAssignModal = ({ toggleModal, isModalVisible }) => {
  const [value, setValue] = React.useState("admin");

  return (
    <Modal isVisible={isModalVisible}>
      <View style={roleAssignModalStyles.modalContainer}>
        <View style={roleAssignModalStyles.modalChild}>
          <ModalBackAndCrossButton toggleModal={toggleModal} />
          <View style={roleAssignModalStyles.modalHeading}>
            <Text style={roleAssignModalStyles.modalHeadingText}>
              Role Options for Srijan Mondol
            </Text>
            <Text style={roleAssignModalStyles.headingDescription}>
              Choose the role you wish to give to Srijan Mandal.
            </Text>
          </View>

          <View style={roleAssignModalStyles.buttonGroup}>
            <RadioButton.Group
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
            >
              <View style={roleAssignModalStyles.radioButton}>
                <RadioButton
                  value="admin"
                  color="#27ac1f"
                  uncheckedColor="rgba(0, 0, 0, 0.2)"
                />
                <Text
                  style={[
                    roleAssignModalStyles.radioText,
                    {
                      color: value === "admin" ? "black" : "rgba(0, 0, 0, 0.6)",
                    },
                  ]}
                >
                  Admin
                </Text>
              </View>
              <View style={roleAssignModalStyles.radioButton}>
                <RadioButton
                  color="#27ac1f"
                  value="moderator"
                  uncheckedColor="rgba(0, 0, 0, 0.2)"
                />
                <Text
                  style={[
                    roleAssignModalStyles.radioText,
                    {
                      color:
                        value === "moderator" ? "black" : "rgba(0, 0, 0, 0.6)",
                    },
                  ]}
                >
                  Moderator
                </Text>
              </View>
              <View style={roleAssignModalStyles.radioButton}>
                <RadioButton
                  color="#27ac1f"
                  value="member"
                  uncheckedColor="rgba(0, 0, 0, 0.2)"
                />
                <Text
                  style={[
                    roleAssignModalStyles.radioText,
                    {
                      color:
                        value === "member" ? "black" : "rgba(0, 0, 0, 0.6)",
                    },
                  ]}
                >
                  Member
                </Text>
              </View>
            </RadioButton.Group>
          </View>
          <View style={roleAssignModalStyles.buttonContainer}>
            <CustomButton
              toggleModal={toggleModal}
              textColor="#27ac1f"
              backgroundColor="rgba(39, 172, 31, 0.1)"
              buttonText="Cancel"
            />
            <CustomButton
              toggleModal={toggleModal}
              textColor="white"
              backgroundColor="#27ac1f"
              buttonText="Save"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RoleAssignModal;

const roleAssignModalStyles = StyleSheet.create({
  modalContainer: {
    height: responsiveScreenHeight(100),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalChild: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: responsiveScreenWidth(4.5),
    paddingBottom: responsiveScreenHeight(0),
  },
  modalHeading: {
    // flexDirection: "row",
    justifyContent: "flex-start",
    // alignItems: "center",
    paddingTop: responsiveScreenHeight(1.7),
    gap: responsiveScreenWidth(2),
  },
  modalArrowIcon: {
    fontSize: responsiveScreenFontSize(2.5),
    color: "rgba(71, 71, 72, 1)",
  },
  modalHeadingText: {
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    fontSize: responsiveScreenFontSize(2.3),
    color: "rgba(11, 42, 70, 1)",
    fontFamily: "Inter-Medium",
  },
  headingDescription: {
    color: "rgba(84, 106, 126, 1)",
    width: "80%",
  },
  radioButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonGroup: {
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.15)",
    paddingTop: responsiveScreenHeight(2),
    paddingBottom: responsiveScreenHeight(2.5),
  },
  radioText: {
    fontSize: responsiveScreenFontSize(2.2),
  },
  buttonContainer: {
    flexDirection: "row",
    gap: responsiveScreenWidth(2.5),
    justifyContent: "center",
    paddingVertical: responsiveScreenHeight(2.5),
  },
});
