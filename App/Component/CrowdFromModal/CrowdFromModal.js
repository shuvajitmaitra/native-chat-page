import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ArrowLeft from "../../../assets/svgs/ArrowLeft";
import CrossIcon from "../../../assets/svgs/CrossIcon";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Modal from "react-native-modal";
import CrowdIcon from "../../../assets/svgs/CrowdIcon";

const CrowdFromModal = ({ isCrowdFromVisible, toggleCrowdFromModal }) => {
  const width = Dimensions.get("window").width;
  console.log("width", width);
  const height = Dimensions.get("window").height;
  console.log("height", height);

  return (
    <Modal isVisible={isCrowdFromVisible}>
      <View style={styles.container}>
        {/* -------------------------- */}
        {/* ----------- Back Arrow button ----------- */}
        {/* -------------------------- */}
        <View style={styles.topBarContainer}>
          <TouchableOpacity
            onPress={toggleCrowdFromModal}
            style={styles.modalArrowIcon}
          >
            <ArrowLeft />
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={toggleCrowdFromModal}
          >
            <CrossIcon />
          </TouchableOpacity>
        </View>
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
            <View style={styles.crowdNameContainer}>
              <Text style={styles.crowdNameText}>Crowd Name*</Text>
              <TextInput style={styles.inputField} placeholder="Group Name" />
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default CrowdFromModal;

const styles = StyleSheet.create({
  // --------------------------
  // ----------- Crowd Name Container -----------
  // --------------------------
  crowdNameContainer: {},
  crowdNameText: {
    fontFamily: "Inter-Medium",
    fontSize: responsiveScreenFontSize(2),
    fontSize: responsiveScreenFontSize(2.5),
    color: "rgba(11, 42, 70, 1)",
    marginBottom: responsiveScreenHeight(1),
  },
  inputField: {
    backgroundColor: "rgba(238, 238, 238, 1)",
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
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
  cancelButton: {
    backgroundColor: "#D0D0D0",
    padding: responsiveScreenWidth(2.5),
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
