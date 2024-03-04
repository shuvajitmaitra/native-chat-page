import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ArrowLeft from "../../../assets/svgs/ArrowLeft";
import CrossIcon from "../../../assets/svgs/CrossIcon";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import Modal from "react-native-modal";
import CrowdIcon from "../../../assets/svgs/CrowdIcon";
import CustomButton from "../CustomButton";
import CustomDropDown from "../SharedComponent/CustomDropDown";
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
  },
  modalArrowIcon: {
    paddingBottom: responsiveScreenHeight(0.8),
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(2),
    color: "rgba(71, 71, 72, 1)",
  },
  backButtonText: {
    color: "rgba(71, 71, 72, 1)",
    fontFamily: "Inter-Regular",
    fontSize: responsiveScreenFontSize(1.8),
  },
  cancelButton: {
    backgroundColor: "#D0D0D0",
    padding: responsiveScreenWidth(2.5),
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

const CrowdFromModal = ({ isCrowdFromVisible, toggleCrowdFromModal }) => {
  const options = [{ type: "Private" }, { type: "Public" }];

  return (
    <Modal isVisible={isCrowdFromVisible}>
      <View>
        <View style={styles.container}>
          {/* -------------------------- */}
          {/* ----------- Back Arrow button ----------- */}
          {/* -------------------------- */}
          <ModalBackAndCrossButton toggleModal={toggleCrowdFromModal} />
          {/* <View style={styles.bottomBorder}></View> */}
          {/* -------------------------- */}
          {/* ----------- Main View Start form here ----------- */}
          {/* -------------------------- */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.subContainer}>
              {/* -------------------------- */}
              {/* ----------- Header container ----------- */}
              {/* -------------------------- */}
              <View style={styles.headerContainer}>
                <CrowdIcon />
                <Text style={styles.headerText}>Update Crowd</Text>
              </View>
              {/* -------------------------- */}
              {/* ----------- Crowd Name Container ----------- */}
              {/* -------------------------- */}
              <View style={styles.fieldContainer}>
                <Text style={styles.Text}>Crowd Name *</Text>
                <TextInput
                  placeholderTextColor={"rgba(84, 106, 126, 1)"}
                  style={styles.inputField}
                  placeholder="Group Name"
                />
              </View>
              <View style={styles.fieldContainer}>
                <Text style={styles.Text}>Crowd Description</Text>
                <TextInput
                  placeholderTextColor={"rgba(84, 106, 126, 1)"}
                  style={[
                    styles.inputField,
                    { paddingBottom: responsiveScreenHeight(8) },
                  ]}
                  placeholder="Enter Crowd Description"
                />
              </View>
              {/* -------------------------- */}
              {/* ----------- Custom dropdown menu ----------- */}
              {/* -------------------------- */}
              <View style={styles.fieldContainer}>
                <Text style={styles.Text}>Crowd Type</Text>
                <CustomDropDown options={options} />
              </View>
              <View style={styles.fieldContainer}>
                <Text style={styles.Text}>Read Only</Text>
                <TextInput
                  placeholderTextColor={"rgba(84, 106, 126, 1)"}
                  style={styles.inputField}
                  placeholder="No"
                />
              </View>
              <View
                style={{
                  borderBottomWidth: 0.5,
                  borderBottomColor: "rgba(0, 0, 0, 0.3)",
                }}
              ></View>
              <View style={styles.buttonContainer}>
                <CustomButton
                  toggleModal={toggleCrowdFromModal}
                  textColor="#27ac1f"
                  backgroundColor="rgba(39, 172, 31, 0.1)"
                  buttonText="Cancel"
                />
                <CustomButton
                  toggleModal={toggleCrowdFromModal}
                  textColor="white"
                  backgroundColor="#27ac1f"
                  buttonText="Update"
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default CrowdFromModal;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    gap: responsiveScreenWidth(2.5),
    justifyContent: "center",
    paddingVertical: responsiveScreenHeight(2.5),
  },
  bottomBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  },
  // --------------------------
  // ----------- Crowd Name Container -----------
  // --------------------------
  fieldContainer: {
    marginBottom: responsiveScreenHeight(2),
    // backgroundColor: "red",
  },
  Text: {
    fontFamily: "Inter-Medium",
    fontSize: responsiveScreenFontSize(1.8),
    marginBottom: responsiveScreenHeight(1),
    color: "rgba(11, 42, 70, 1)",
  },
  inputField: {
    backgroundColor: "#f8f8f8",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    paddingHorizontal: responsiveScreenWidth(4),
    fontFamily: "Inter-Regular",
    paddingVertical: responsiveScreenHeight(1),
    marginBottom: responsiveScreenHeight(3),
  },
  // --------------------------
  // ----------- Header Container -----------
  // --------------------------
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(1.5),
    marginTop: responsiveScreenHeight(2),
    borderTopWidth: 0.5,
    borderTopColor: "rgba(0, 0, 0, 0.3)",
  },
  headerText: {
    fontFamily: "Inter-SemiBold",
    fontSize: responsiveScreenFontSize(2.5),
    color: "rgba(11, 42, 70, 1)",
  },
  // --------------------------
  // ----------- Main Container -----------
  // --------------------------
  container: {
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(2.5),
    backgroundColor: "white",
    borderRadius: responsiveScreenWidth(2),
  },
  topBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: "100%",
  },
  subContainer: {
    minHeight: responsiveScreenHeight(30),
    minWidth: responsiveScreenWidth(80),
  },
  modalArrowIcon: {
    paddingBottom: responsiveScreenHeight(0.8),
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(2),
    color: "rgba(71, 71, 72, 1)",
  },
  backButtonText: {
    color: "rgba(71, 71, 72, 1)",
    fontFamily: "Inter-Regular",
    fontSize: responsiveScreenFontSize(1.8),
  },
  cancelButton: {
    backgroundColor: "#D0D0D0",
    padding: responsiveScreenWidth(2.5),
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
