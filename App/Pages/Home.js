import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import RoleAssignModal from "../Component/RoleAssignModal";
import ChatMuteModal from "../Component/ChatMuteModal";
import ViewProfile from "../Component/ViewProfileModal/ViewProfile";

const Home = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isMuteModalVisible, setMuteModalVisible] = useState(false);
  const [isProfileModalVisible, setProfileModalVisible] = useState(false);

  {
    /* -------------------------- */
  }
  {
    /* ----------- Here is the function for open and close the modal ----------- */
  }
  {
    /* -------------------------- */
  }
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleMuteModal = () => {
    setMuteModalVisible(!isMuteModalVisible);
  };
  const toggleViewProfileModal = () => {
    setProfileModalVisible(!isProfileModalVisible);
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
        toggleMuteModal={toggleViewProfileModal}
        isProfileModalVisible={isProfileModalVisible}
      />
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
    marginTop: responsiveHeight(2),
    backgroundColor: "#27ac1f",
    width: responsiveScreenWidth(50),
    alignItems: "center",
    borderRadius: 10,
    padding: responsiveScreenWidth(3),
  },
  navigationButtonText: {
    color: "white",
    fontSize: responsiveFontSize(2),
    fontWeight: "600",
  },
});
