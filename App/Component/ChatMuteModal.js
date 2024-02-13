import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { FontAwesome6 } from "@expo/vector-icons";
import { RadioButton, Text } from "react-native-paper";
import CustomModalButton from "./CustomButton";

const ChatMuteModal = ({ toggleMuteModal, isMuteModalVisible }) => {
  const [value, setValue] = React.useState("first");

  return (
    <Modal isVisible={isMuteModalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalChild}>
          {/* --------------------- */}
          {/* Modal Heading */}
          {/* --------------------- */}

          <View style={styles.modalHeading}>
            <TouchableOpacity onPress={toggleMuteModal}>
              <FontAwesome6
                name="arrow-left-long"
                style={styles.modalArrowIcon}
              />
            </TouchableOpacity>
            <Text style={styles.modalHeadingText}>
              Mute Options for Srijan Mondol
            </Text>
          </View>

          {/* --------------------- */}
          {/* Modal Descriptions */}
          {/* --------------------- */}

          <View style={styles.modalDescription}>
            <Text style={styles.modalDescriptionText}>
              Muted members can&apos;t send message in this channel but he/she
              can read message
            </Text>
          </View>

          {/* --------------------- */}
          {/* Modal radio button */}
          {/* --------------------- */}

          <View style={styles.buttonGroup}>
            <RadioButton.Group
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
            >
              <View style={styles.radioButton}>
                <RadioButton
                  value="hour"
                  color="#27ac1f"
                  uncheckedColor="rgba(0, 0, 0, 0.2)"
                />
                <Text
                  style={[
                    styles.radioText,
                    {
                      color: value === "hour" ? "black" : "rgba(0, 0, 0, 0.6)",
                    },
                  ]}
                >
                  For 1 hour
                </Text>
              </View>
              <View style={styles.radioButton}>
                <RadioButton
                  color="#27ac1f"
                  value="day"
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
                  For 1 day
                </Text>
              </View>
              <View style={styles.radioButton}>
                <RadioButton
                  color="#27ac1f"
                  value="always"
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
                  Mute until I turn back on
                </Text>
              </View>
              <View style={styles.radioButton}>
                <RadioButton
                  color="#27ac1f"
                  value="custom"
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
                  Custom time
                </Text>
              </View>
            </RadioButton.Group>
          </View>

          {/* -------------------------- */}
          {/* ------- Add note Box ------- */}
          {/* --------------------------- */}
          <View style={styles.noteContainer}>
            <Text style={styles.noteTitle}>Add a note (optional)</Text>
            <TextInput
              placeholder="Describe the reason"
              style={styles.noteTextArea}
            />
          </View>
          {/* --------------------- */}
          {/* Modal Button Container */}
          {/* --------------------- */}

          <View style={styles.buttonContainer}>
            <CustomModalButton
              toggleModal={toggleMuteModal}
              textColor="#27ac1f"
              backgroundColor="rgba(39, 172, 31, 0.1)"
              buttonText="Cancel"
            />
            <CustomModalButton
              toggleModal={toggleMuteModal}
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

export default ChatMuteModal;

const styles = StyleSheet.create({
  modalContainer: {
    // height: responsiveScreenHeight(100),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalChild: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: responsiveWidth(5.3),
    paddingVertical: responsiveHeight(0.8),
  },
  modalHeading: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: responsiveHeight(2),
    // marginHorizontal: responsiveWidth(1),
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.15)",
    gap: responsiveWidth(2),
  },
  modalArrowIcon: {
    fontSize: responsiveFontSize(2.5),
    color: "rgba(71, 71, 72, 1)",
  },
  modalHeadingText: {
    fontSize: responsiveFontSize(2.4),
    fontWeight: "600",
    color: "rgba(71, 71, 72, 1)",
  },
  //  -------------------------------------------------------------
  // Modal description
  // -------------------------------------------------------------
  modalDescriptionText: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: responsiveFontSize(1.9),
    fontWeight: "600",
    paddingVertical: responsiveHeight(2),
  },

  //  -------------------------------------------------------------
  // Modal radio button
  // -------------------------------------------------------------
  radioButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonGroup: {
    marginHorizontal: responsiveWidth(-1),
  },
  radioText: {
    fontSize: responsiveFontSize(1.9),
  },

  //  -------------------------------------------------------------
  // Modal Note area
  // -------------------------------------------------------------
  noteContainer: {},
  noteTitle: {
    fontWeight: "600",
    fontSize: responsiveFontSize(1.9),
    paddingVertical: responsiveWidth(4),
  },
  noteTextArea: {
    backgroundColor: "rgba(248, 248, 248, 1)",
    paddingHorizontal: responsiveWidth(4),
    paddingTop: responsiveHeight(0.6),
    paddingBottom: responsiveHeight(7),
    marginBottom: responsiveHeight(1.4),
    borderRadius: responsiveWidth(3),
    borderWidth: 1,
    borderColor: "rgba(238, 238, 238, 1)",
    fontSize: responsiveFontSize(1.9),
  },
  //  -------------------------------------------------------------
  // Modal Button area
  // -------------------------------------------------------------
  buttonContainer: {
    flexDirection: "row",
    gap: responsiveWidth(2.5),
    justifyContent: "center",
    paddingVertical: responsiveHeight(2.5),
  },
});
