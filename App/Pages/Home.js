import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import ChatMuteModal from "../Component/ChatMuteModal";
import ViewProfile from "../Component/ViewProfileModal/ViewProfile";
import ThreeDotPopUp from "../Component/ThreeDotPopUp/ThreeDotPopUp";
import GroupProfileModal from "../Component/GroupProfileView/GroupProfileModal";
import CrowdFromModal from "../Component/CrowdFromModal/CrowdFromModal";
import LeaveCrowdModal from "../Component/LeaveCrowdModal/LeaveCrowdModal";
import ReportModal from "../Component/ReportModal/ReportModal";
import AddNewEventModal from "../Component/AddNewEventModal/AddNewEventModal";
import RoleAssignModal from "../Component/RoleAssignModal/RoleAssignModal";

const Home = ({ navigation }) => {
  const [isMuteModalVisible, setMuteModalVisible] = useState(false);
  const [isProfileModalVisible, setProfileModalVisible] = useState(false);
  const [isGroupProfileModalVisible, setGroupProfileModalVisible] =
    useState(false);
  const [isCrowdFromVisible, setCrowdFromVisible] = useState(false);

  const [isLeaveCrowdModalVisible, setLeaveCrowdModalVisible] = useState(false);
  const [isReportModalVisible, setReportModalVisible] = useState(false);
  const [addNewEventVisible, setAddNewEventVisible] = useState(false);
  {
    /* -------------------------- */
  }
  {
    /* ----------- Here is the function for open and close the modal ----------- */
  }
  {
    /* -------------------------- */
  }
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleMuteModal = () => {
    setMuteModalVisible(!isMuteModalVisible);
  };
  const toggleViewProfileModal = () => {
    setProfileModalVisible(!isProfileModalVisible);
  };
  const toggleGroupProfileModal = () => {
    setGroupProfileModalVisible(!isGroupProfileModalVisible);
  };
  const toggleCrowdFromModal = () => {
    setCrowdFromVisible(!isCrowdFromVisible);
  };
  const toggleLeaveCrowdModal = () => {
    setLeaveCrowdModalVisible(!isLeaveCrowdModalVisible);
  };
  const toggleReportModal = () => {
    setReportModalVisible(!isReportModalVisible);
  };
  const toggleAddNewEventModal = () => {
    setAddNewEventVisible(!addNewEventVisible);
  };

  return (
    <View style={styles.container}>
      {/* -------------------------- */}
      {/* ----------- Here is the status bar Color defined ----------- */}
      {/* -------------------------- */}
      <StatusBar
        backgroundColor={
          isModalVisible || isMuteModalVisible
            ? "rgb(74, 76, 76)"
            : "rgb(0, 0, 0)"
        }
      />

      {/* -------------------------- */}
      {/* ----------- All Chat Navigation Here ----------- */}
      {/* -------------------------- */}
      <TouchableOpacity
        onPress={() => navigation.navigate("TotalChats")}
        style={styles.navigationButton}
      >
        <Text style={styles.navigationButtonText}>Chat</Text>
      </TouchableOpacity>

      {/* -------------------------- */}
      {/* ----------- Role assign modal ----------- */}
      {/* -------------------------- */}
      <TouchableOpacity style={styles.navigationButton} onPress={toggleModal}>
        <Text style={styles.navigationButtonText}>Role Assign Modal</Text>
      </TouchableOpacity>

      <RoleAssignModal
        toggleModal={toggleModal}
        isModalVisible={isModalVisible}
      />

      {/* -------------------------- */}
      {/* ----------- Chat Mute Modal  ----------- */}
      {/* -------------------------- */}
      <TouchableOpacity
        style={styles.navigationButton}
        onPress={toggleMuteModal}
      >
        <Text style={styles.navigationButtonText}>Chat Mute Modal</Text>
      </TouchableOpacity>
      <ChatMuteModal
        toggleMuteModal={toggleMuteModal}
        isMuteModalVisible={isMuteModalVisible}
      />
      {/* -------------------------- */}
      {/* ----------- Thead Component Navigation Here ----------- */}
      {/* -------------------------- */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Thread")}
        style={styles.navigationButton}
      >
        <Text style={styles.navigationButtonText}>Thread</Text>
      </TouchableOpacity>

      {/* -------------------------- */}
      {/* ----------- Profile View Modal ----------- */}
      {/* -------------------------- */}

      <TouchableOpacity
        style={styles.navigationButton}
        onPress={toggleViewProfileModal}
      >
        <Text style={styles.navigationButtonText}>View Profile</Text>
      </TouchableOpacity>
      <ViewProfile
        toggleViewProfileModal={toggleViewProfileModal}
        isProfileModalVisible={isProfileModalVisible}
      />

      {/* -------------------------- */}
      {/* ----------- Popup Modal ----------- */}
      {/* -------------------------- */}
      <View style={[styles.navigationButton]}>
        <ThreeDotPopUp />
      </View>
      {/* -------------------------- */}
      {/* ----------- Group Profile View Modal ----------- */}
      {/* -------------------------- */}
      <TouchableOpacity
        style={styles.navigationButton}
        onPress={toggleGroupProfileModal}
      >
        <Text style={styles.navigationButtonText}>Group Profile</Text>
      </TouchableOpacity>
      <GroupProfileModal
        toggleGroupProfileModal={toggleGroupProfileModal}
        isGroupProfileModalVisible={isGroupProfileModalVisible}
      />
      {/* -------------------------- */}
      {/* ----------- Crowd From ----------- */}
      {/* -------------------------- */}
      <TouchableOpacity
        style={styles.navigationButton}
        onPress={toggleCrowdFromModal}
      >
        <Text style={styles.navigationButtonText}>Crowd From</Text>
      </TouchableOpacity>
      <CrowdFromModal
        toggleCrowdFromModal={toggleCrowdFromModal}
        isCrowdFromVisible={isCrowdFromVisible}
      />
      {/* -------------------------- */}
      {/* ----------- Leave Crowd Modal ----------- */}
      {/* -------------------------- */}
      <TouchableOpacity
        style={styles.navigationButton}
        onPress={toggleLeaveCrowdModal}
      >
        <Text style={styles.navigationButtonText}>Leave Crowd Modal</Text>
      </TouchableOpacity>

      <LeaveCrowdModal
        toggleLeaveCrowdModal={toggleLeaveCrowdModal}
        isLeaveCrowdModalVisible={isLeaveCrowdModalVisible}
      />
      {/* -------------------------- */}
      {/* ----------- Report Modal ----------- */}
      {/* -------------------------- */}
      <TouchableOpacity
        style={styles.navigationButton}
        onPress={toggleReportModal}
      >
        <Text style={styles.navigationButtonText}>Report Modal</Text>
      </TouchableOpacity>

      <ReportModal
        toggleReportModal={toggleReportModal}
        isReportModalVisible={isReportModalVisible}
      />
      {/* -------------------------- */}
      {/* ----------- Add New Event Modal ----------- */}
      {/* -------------------------- */}
      <TouchableOpacity
        style={styles.navigationButton}
        onPress={toggleAddNewEventModal}
      >
        <Text style={styles.navigationButtonText}>Add New Event</Text>
      </TouchableOpacity>

      <AddNewEventModal
        toggleAddNewEventModal={toggleAddNewEventModal}
        addNewEventVisible={addNewEventVisible}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("Calendar")}
        style={styles.navigationButton}
      >
        <Text style={styles.navigationButtonText}>My Calendar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  navigationButton: {
    marginTop: responsiveScreenHeight(2),
    backgroundColor: "#27ac1f",
    width: responsiveScreenWidth(50),
    alignItems: "center",
    borderRadius: 10,
    padding: responsiveScreenWidth(3),
  },
  navigationButtonText: {
    color: "white",
    fontSize: responsiveScreenFontSize(2),
    fontWeight: "600",
  },
});
