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
                  color="green"
                  style={{ backgroundColor: "green" }}
                />
                <Text style={styles.radioText}>Admin</Text>
              </View>
              <View style={styles.radioButton}>
                <RadioButton color="green" value="moderator" />
                <Text style={styles.radioText}>Moderator</Text>
              </View>
              <View style={styles.radioButton}>
                <RadioButton color="green" value="member" />
                <Text style={styles.radioText}>Member</Text>
              </View>
            </RadioButton.Group>
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
    height: responsiveScreenHeight(40),
    width: responsiveScreenWidth(90),
    borderRadius: 10,
    padding: responsiveScreenWidth(3),
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
});
