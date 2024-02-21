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


const LeaveCrowdModal = ({ toggleLeaveCrowdModal, isLeaveCrowdModalVisible }) => {
  const [value, setValue] = React.useState("admin");

  return (
    <Modal isVisible={isLeaveCrowdModalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalChild}>
          <View style={styles.modalHeading}>
            <TouchableOpacity onPress={toggleLeaveCrowdModal}>
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
            <CustomButton
              toggleLeaveCrowdModal={toggleLeaveCrowdModal}
              textColor="#27ac1f"
              backgroundColor="rgba(39, 172, 31, 0.1)"
              buttonText="Cancel"
            />
            <CustomButton
              toggleLeaveCrowdModal={toggleLeaveCrowdModal}
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

export default LeaveCrowdModal;

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
    paddingHorizontal: responsiveScreenWidth(4.5),
    paddingBottom: responsiveScreenHeight(0),
    paddingTop: responsiveScreenHeight(2)
  },
  modalHeading: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: responsiveScreenHeight(2),
    marginHorizontal: responsiveScreenWidth(1),
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.15)",
    gap: responsiveScreenWidth(2),
  },
  modalArrowIcon: {
    fontSize: responsiveScreenFontSize(2.5),
    color: "rgba(71, 71, 72, 1)",
  },
  modalHeadingText: {
    fontSize: responsiveScreenFontSize(2.3),
    color: "rgba(71, 71, 72, 1)",
    fontFamily: 'Inter-Medium'
  },
  radioButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonGroup: {
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.15)",
    paddingVertical: responsiveScreenHeight(2.5),
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
