import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import ArrowLeft from "../../../assets/svgs/ArrowLeft";
import CrossIcon from "../../../assets/svgs/CrossIcon";
import CrowdIcon from "../../../assets/svgs/CrowdIcon";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import CustomButton from "../CustomButton";
import Fonts from "../../../assets/Fonts/Fonts";
import UpArrowIcon from "../../../assets/svgs/UpArrowIcon";
import DownArroIcon from "../../../assets/svgs/DownArrowIcon";

// --------------------------
// ----------- Custom dropdown components -----------
// --------------------------
export const CustomDropDown = ({ options }) => {
  const [clicked, setClicked] = useState(false);
  const [item, setItem] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(238, 238, 238, 1)",
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderRadius: 10,
            paddingHorizontal: responsiveScreenWidth(4),
            fontFamily: "Inter-Regular",
            paddingVertical: responsiveScreenHeight(1),
            position: "relative",
          },
          { borderBottomLeftRadius: clicked ? 0 : 10 },
          { borderBottomRightRadius: clicked ? 0 : 10 },
        ]}
        onPress={() => {
          setClicked(!clicked);
        }}
      >
        <Text
          style={{
            paddingVertical: responsiveScreenHeight(0.5),
            color: "rgba(84, 106, 126, 1)",
          }}
        >
          {item == "" ? "Select event type" : item}
        </Text>
        {clicked ? <UpArrowIcon /> : <DownArroIcon />}
      </TouchableOpacity>
      {clicked ? (
        <View
          style={{
            backgroundColor: "rgba(248, 248, 248, 1)",
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            position: "absolute",
            width: "100%",
            top: responsiveScreenHeight(5.3),
            zIndex: 1,
          }}
        >
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setItem(item.type);
                setClicked(!clicked);
              }}
            >
              <Text
                style={{
                  fontFamily: "Inter-Regular",
                  fontSize: responsiveScreenFontSize(1.5),
                  color: "rgba(0, 0, 0, 0.5)",
                  paddingHorizontal: responsiveScreenWidth(4),
                  paddingVertical: responsiveScreenHeight(1),
                }}
              >
                {item.type}
              </Text>
              <View
                style={{
                  borderBottomWidth: options.length == index + 1 ? 0 : 0.5,
                  borderBottomColor: "rgba(0, 0, 0, 0.3)",
                }}
              ></View>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </View>
  );
};

// --------------------------
// ----------- Main content start form here -----------
// --------------------------

const AddNewEventModal = ({ toggleAddNewEventModal, addNewEventVisiable }) => {
  const options = [{ type: "One-on-One" }, { type: "Group" }];
  return (
    <Modal isVisible={addNewEventVisiable}>
      <View>
        <View style={styles.container}>
          {/* -------------------------- */}
          {/* ----------- Back Arrow button ----------- */}
          {/* -------------------------- */}
          <View style={styles.topBarContainer}>
            <TouchableOpacity
              onPress={toggleAddNewEventModal}
              style={styles.modalArrowIcon}
            >
              <ArrowLeft />
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={toggleAddNewEventModal}
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
                <Text style={styles.headerText}>Add New Event</Text>
              </View>
              {/* -------------------------- */}
              {/* ----------- Header Description ----------- */}
              {/* -------------------------- */}
              <View>
                <Text style={styles.headerDescriptonText}>
                  Kindly complete the form to initiate the creation of a new
                  event.
                </Text>
              </View>
              {/* -------------------------- */}
              {/* ----------- Event Title Container ----------- */}
              {/* -------------------------- */}
              <View style={styles.fieldContainer}>
                <Text style={styles.Text}>Event Title *</Text>
                <TextInput
                  placeholderTextColor={"rgba(84, 106, 126, 1)"}
                  style={styles.inputField}
                  placeholder="Enter event name"
                />
              </View>
              {/* -------------------------- */}
              {/* ----------- Event Type container ----------- */}
              {/* -------------------------- */}
              <View style={styles.fieldContainer}>
                <Text style={styles.Text}>Event Type *</Text>
                <CustomDropDown options={options} />
              </View>

              {/* -------------------------- */}
              {/* ----------- Add meeting aganda ----------- */}
              {/* -------------------------- */}
              <View style={styles.fieldContainer}>
                <Text style={styles.Text}>Add Meeting Agenda</Text>
                <TextInput
                  placeholderTextColor={"rgba(84, 106, 126, 1)"}
                  style={[
                    styles.inputField,
                    { paddingBottom: responsiveScreenHeight(8) },
                  ]}
                  placeholder="Event Agenda"
                />
              </View>

              {/* -------------------------- */}
              {/* ----------- Add follow up message ----------- */}
              {/* -------------------------- */}
              <View style={styles.fieldContainer}>
                <Text style={styles.Text}>Add Follow Up Message</Text>
                <TextInput
                  placeholderTextColor={"rgba(84, 106, 126, 1)"}
                  style={[
                    styles.inputField,
                    { paddingBottom: responsiveScreenHeight(8) },
                  ]}
                  placeholder="Follow up message"
                />
              </View>

              {/* -------------------------- */}
              {/* ----------- Add Action Item  ----------- */}
              {/* -------------------------- */}

              <View style={styles.fieldContainer}>
                <Text style={styles.Text}>Add Action Item</Text>
                <TextInput
                  placeholderTextColor={"rgba(84, 106, 126, 1)"}
                  style={[
                    styles.inputField,
                    { paddingBottom: responsiveScreenHeight(8) },
                  ]}
                  placeholder="Action item"
                />
              </View>

              {/* -------------------------- */}
              {/* ----------- Add Meeting link ----------- */}
              {/* -------------------------- */}
              <View style={styles.fieldContainer}>
                <Text style={styles.Text}>Add Meeting Link</Text>
                <TextInput
                  placeholderTextColor={"rgba(84, 106, 126, 1)"}
                  style={styles.inputField}
                  placeholder="Meeting link"
                />
              </View>
              <View style={styles.buttonContainer}>
                <CustomButton
                  toggleModal={toggleAddNewEventModal}
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

export default AddNewEventModal;

const styles = StyleSheet.create({
  // --------------------------
  // ----------- Header description Text -----------
  // --------------------------
  headerDescriptonText: {
    fontFamily: "WorkSans-Regular",
    color: "rgba(84, 106, 126, 1)",
    marginBottom: responsiveScreenHeight(2),
  },
  buttonContainer: {
    flexDirection: "row",
    gap: responsiveScreenWidth(2.5),
    justifyContent: "center",
    paddingBottom: responsiveScreenHeight(2.5),
  },
  bottomBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  },
  // --------------------------
  // ----------- Crowd Name Container -----------
  // --------------------------
  fieldContainer: {
    marginBottom: responsiveScreenHeight(3),
    // backgroundColor: "red",
  },
  Text: {
    fontFamily: "Inter-Medium",
    fontSize: responsiveScreenFontSize(1.8),
    marginBottom: responsiveScreenHeight(1),
    color: "rgba(11, 42, 70, 1)",
  },
  inputField: {
    backgroundColor: "rgba(238, 238, 238, 1)",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    paddingHorizontal: responsiveScreenWidth(4),
    fontFamily: "Inter-Regular",
    paddingVertical: responsiveScreenHeight(1),
  },
  // --------------------------
  // ----------- Header Container -----------
  // --------------------------
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(2),
    paddingTop: responsiveScreenHeight(1.5),
    marginTop: responsiveScreenHeight(2),
    marginBottom: responsiveScreenHeight(0.3),
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
