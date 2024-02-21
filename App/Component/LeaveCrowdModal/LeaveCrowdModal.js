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


const LeaveCrowdModal = ({ toggleLeaveCrowdModal, isLeaveCrowdModalVisible }) => {
  const [value, setValue] = React.useState("admin");

  return (
    <Modal isVisible={isLeaveCrowdModalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalChild}>
            {/* Modal Back Button */}
<View style={styles.topBarContainer}>
          <TouchableOpacity
            onPress={toggleLeaveCrowdModal}
            style={styles.arrow}
          >
            <ArrowLeft />
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={toggleLeaveCrowdModal}
          >
            <CrossIcon />
          </TouchableOpacity>
        </View>
                    <View style={styles.bottomBorder}></View>
                    {/* Main Content */}
                    <View style={styles.mainContent}>
                      <Text style={styles.mainContentText}>Leave This Crowds?</Text>
                      <View>

<Text style={styles.mainContentDescription}>Only Crowds admin will be notified </Text>
<Text style={styles.mainContentDescription}>that you left the Crowds.</Text>
                      </View>
                    </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              toggleModal={toggleLeaveCrowdModal}
              textColor="#27ac1f"
              backgroundColor="rgba(39, 172, 31, 0.1)"
              buttonText="Cancel"
            />
            <CustomButton
              toggleModal={toggleLeaveCrowdModal}
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
  // Main Content
  mainContentText:{
    fontFamily: "Inter-SemiBold",
    color: "rgba(11, 42, 70, 1)",
    fontSize: responsiveScreenFontSize(2.5)
  },
  mainContentDescription:{
    alignSelf: "center",
    color: "rgba(84, 106, 126, 1)",
    fontSize: responsiveScreenFontSize(2),
    marginHorizontal: responsiveScreenWidth(5)
  },
  mainContent:{
    alignItems: "center",
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
    marginBottom: responsiveScreenHeight(2)
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
    paddingTop: responsiveScreenHeight(2)
  },

  buttonContainer: {
    flexDirection: "row",
    gap: responsiveScreenWidth(2.5),
    justifyContent: "center",
    paddingVertical: responsiveScreenHeight(2.5),
  },
});
