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

const ReportModal = ({ toggleReportModal, isReportModalVisiable }) => {
  const [value, setValue] = React.useState("Harassment");

  return (
    <Modal isVisible={isReportModalVisiable}>
      <View style={styles.modalContainer}>
        <View style={styles.modalChild}>
          {/* Modal Back Button */}
          <View style={styles.topBarContainer}>
            <TouchableOpacity onPress={toggleReportModal} style={styles.arrow}>
              <ArrowLeft />
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={toggleReportModal}
            >
              <CrossIcon />
            </TouchableOpacity>
          </View>
          {/* -------------------------- */}
          {/* ----------- Bottom border ----------- */}
          {/* -------------------------- */}
          <View style={styles.bottomBorder}></View>
          {/* -------------------------- */}
          {/* ----------- Main Content ----------- */}
          {/* -------------------------- */}
          <View style={styles.mainContent}>
            <Text style={styles.mainContentText}>Report</Text>
            <View>
              <Text style={styles.mainContentDescription}>
                Select appropriate reason for report
              </Text>
            </View>
            {/* -------------------------- */}
            {/* ----------- Radio button are start from here ----------- */}
            {/* -------------------------- */}
            <View style={styles.buttonGroup}>
              <RadioButton.Group
                onValueChange={(newValue) => setValue(newValue)}
                value={value}
              >
                <View style={styles.radioButton}>
                  <RadioButton
                    value="Harassment"
                    color="#27ac1f"
                    uncheckedColor="rgba(0, 0, 0, 0.2)"
                  />
                  <Text
                    style={[
                      styles.radioText,
                      {
                        color:
                          value === "hour" ? "black" : "rgba(0, 0, 0, 0.6)",
                      },
                    ]}
                  >
                    Harassment
                  </Text>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton
                    color="#27ac1f"
                    value="Sharing inappropriate things"
                    uncheckedColor="rgba(0, 0, 0, 0.2)"
                  />
                  <Text
                    style={[
                      styles.radioText,
                      {
                        color: value === "day" ? "black" : "rgba(0, 0, 0, 0.6)",
                      },
                    ]}
                  >
                    Sharing inappropriate things
                  </Text>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton
                    color="#27ac1f"
                    value="Hate speech"
                    uncheckedColor="rgba(0, 0, 0, 0.2)"
                  />
                  <Text
                    style={[
                      styles.radioText,
                      {
                        color:
                          value === "always" ? "black" : "rgba(0, 0, 0, 0.6)",
                      },
                    ]}
                  >
                    Hate speech
                  </Text>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton
                    color="#27ac1f"
                    value="Scams"
                    uncheckedColor="rgba(0, 0, 0, 0.2)"
                  />
                  <Text
                    style={[
                      styles.radioText,
                      {
                        color:
                          value === "custom" ? "black" : "rgba(0, 0, 0, 0.6)",
                      },
                    ]}
                  >
                    Scams
                  </Text>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton
                    color="#27ac1f"
                    value="Others"
                    uncheckedColor="rgba(0, 0, 0, 0.2)"
                  />
                  <Text
                    style={[
                      styles.radioText,
                      {
                        color:
                          value === "custom" ? "black" : "rgba(0, 0, 0, 0.6)",
                      },
                    ]}
                  >
                    Others
                  </Text>
                </View>
              </RadioButton.Group>
            </View>
            {/* -------------------------- */}
            {/* ----------- Border Bottom ----------- */}
            {/* -------------------------- */}
            <View style={styles.bottomBorder}></View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              toggleModal={toggleReportModal}
              textColor="#27ac1f"
              backgroundColor="rgba(39, 172, 31, 0.1)"
              buttonText="Cancel"
            />
            <CustomButton
              toggleModal={toggleReportModal}
              textColor="white"
              backgroundColor="#27ac1f"
              buttonText="Report"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ReportModal;

const styles = StyleSheet.create({
  //  -------------------------------------------------------------
  // Modal radio button
  // -------------------------------------------------------------
  radioButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonGroup: {
    marginHorizontal: responsiveScreenWidth(-1),
  },
  radioText: {
    fontSize: responsiveScreenFontSize(1.9),
  },
  // Main Content
  mainContentText: {
    fontFamily: "Inter-SemiBold",
    color: "rgba(11, 42, 70, 1)",
    fontSize: responsiveScreenFontSize(2.5),
  },
  mainContentDescription: {
    color: "rgba(84, 106, 126, 1)",
    fontSize: responsiveScreenFontSize(2),
  },
  mainContent: {
    gap: responsiveScreenHeight(1.5),
    paddingTop: responsiveScreenHeight(2.5),
  },
  // bottom border
  bottomBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  },
  // Cancel and the back button.................
  topBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: "100%",
    marginBottom: responsiveScreenHeight(2),
  },
  arrow: {
    paddingBottom: responsiveScreenHeight(0.8),
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(2),
    color: "red",
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

  //   Main container...............
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
    paddingTop: responsiveScreenHeight(2),
  },

  buttonContainer: {
    flexDirection: "row",
    gap: responsiveScreenWidth(2.5),
    justifyContent: "center",
    paddingVertical: responsiveScreenHeight(2.5),
  },
});
