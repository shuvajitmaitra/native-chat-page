import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ArrowLeft from "../../../assets/svgs/ArrowLeft";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import Modal from "react-native-modal";

const CrowdFromModal = ({ isCrowdFromVisible, toggleCrowdFromModal }) => {
  return (
    <Modal isVisible={isCrowdFromVisible}>
      <View style={styles.container}>
        {/* -------------------------- */}
        {/* ----------- Back Arrow button ----------- */}
        {/* -------------------------- */}
        <TouchableOpacity
          onPress={toggleCrowdFromModal}
          style={styles.modalArrowIcon}
        >
          <ArrowLeft />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.subContainer}>
            <Text>Hello</Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default CrowdFromModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(2.5),
    backgroundColor: "white",
    borderRadius: responsiveScreenWidth(2),
  },
  subContainer: {
    height: responsiveScreenHeight(30),
    width: responsiveScreenWidth(80),
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
});
