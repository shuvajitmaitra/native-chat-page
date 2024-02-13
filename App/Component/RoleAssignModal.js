import { StyleSheet, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { FontAwesome6 } from "@expo/vector-icons";
import { RadioButton, Text } from "react-native-paper";
import CustomModalButton from "./CustomButton";

const RoleAssignModal = ({ toggleModal, isModalVisible }) => {
  const [value, setValue] = React.useState("first");

  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalChild}>
          <View style={styles.modalHeading}>
            <TouchableOpacity onPress={toggleModal}>
              <FontAwesome6
                name="arrow-left-long"
                style={styles.modalArrowIcon}
              />
            </TouchableOpacity>
            <Text style={styles.modalHeadingText}>
              Role Options for Srijan Mondol
            </Text>
          </View>
          <View style={styles.buttonGroup}>
            <RadioButton.Group
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
            >
              <View style={styles.radioButton}>
                <RadioButton
                  value="admin"
                  color="#27ac1f"
                  uncheckedColor="rgba(0, 0, 0, 0.2)"
                />
                <Text
                  style={[
                    styles.radioText,
                    {
                      color: value === "admin" ? "black" : "rgba(0, 0, 0, 0.6)",
                    },
                  ]}
                >
                  Admin
                </Text>
              </View>
              <View style={styles.radioButton}>
                <RadioButton
                  color="#27ac1f"
                  value="moderator"
                  uncheckedColor="rgba(0, 0, 0, 0.2)"
                />
                <Text
                  style={[
                    styles.radioText,
                    {
                      color:
                        value === "moderator" ? "black" : "rgba(0, 0, 0, 0.6)",
                    },
                  ]}
                >
                  Moderator
                </Text>
              </View>
              <View style={styles.radioButton}>
                <RadioButton
                  color="#27ac1f"
                  value="member"
                  uncheckedColor="rgba(0, 0, 0, 0.2)"
                />
                <Text
                  style={[
                    styles.radioText,
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
          <View style={styles.buttonContainer}>
            <CustomModalButton
              textColor="#27ac1f"
              backgroundColor="rgba(39, 172, 31, 0.1)"
              buttonText="Cancel"
            />
            <CustomModalButton
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

const styles = StyleSheet.create({
  modalContainer: {
    height: responsiveScreenHeight(100),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalChild: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: responsiveWidth(4.5),
    paddingVertical: responsiveHeight(0.8),
  },
  modalHeading: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: responsiveHeight(2),
    marginHorizontal: responsiveWidth(1),
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.15)",
    gap: responsiveWidth(2),
  },
  modalArrowIcon: {
    fontSize: responsiveFontSize(2.5),
    color: "rgba(71, 71, 72, 1)",
  },
  modalHeadingText: {
    fontSize: responsiveFontSize(2.5),
    color: "rgba(71, 71, 72, 1)",
  },
  radioButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonGroup: {
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.15)",
    paddingVertical: responsiveHeight(2.5),
  },
  radioText: {
    fontSize: responsiveFontSize(2.2),
  },
  buttonContainer: {
    flexDirection: "row",
    gap: responsiveWidth(2.5),
    justifyContent: "center",
    paddingVertical: responsiveHeight(2.5),
  },
});
