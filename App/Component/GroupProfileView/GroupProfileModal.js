import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Fonts from "../../../assets/Fonts/Fonts";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import Modal from "react-native-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import NotifyBell from "../../../assets/svgs/NotifyBell";
import ArrowLeft from "../../../assets/svgs/ArrowLeft";
import SwitchButton from "../SharedComponent/SwitchButton";
import CameraIcon from "../../../assets/svgs/CameraIcon";
import EditIcons from "../../../assets/svgs/EditIcons";
import PlusCircle from "../../../assets/svgs/PlusCircle";
import MembersIcon from "../../../assets/svgs/MembersIcon";
import LinkIcon from "../../../assets/svgs/LinkIcon";
import GroupTabView from "./GroupTabView";
const GroupProfileModal = ({
  toggleGroupProfileModal,
  isGroupProfileModalVisible,
  isPersonActive = true,
}) => {
  return (
    <Modal isVisible={isGroupProfileModalVisible}>
      <View style={styles.container}>
        {/* -------------------------- */}
        {/* ----------- Back Arrow button ----------- */}
        {/* -------------------------- */}
        <TouchableOpacity
          onPress={toggleGroupProfileModal}
          style={styles.modalArrowIcon}
        >
          <ArrowLeft />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {/* -------------------------- */}
            {/* ----------- Image Profile Container ----------- */}
            {/* -------------------------- */}
            <View style={styles.profileImageContainer}>
              <Image
                style={{
                  width: responsiveScreenWidth(40),
                  height: responsiveScreenHeight(20),
                  resizeMode: "cover",
                }}
                source={require("../../../assets/Images/peopleGroup.png")}
              />
              <TouchableOpacity style={styles.cameraIcon}>
                <CameraIcon />
              </TouchableOpacity>
              <TouchableOpacity style={styles.editIcon}>
                <EditIcons />
              </TouchableOpacity>
            </View>
            {/* -------------------------- */}
            {/* ----------- Profile Name Container ----------- */}
            {/* -------------------------- */}
            <View style={styles.profileNameContainer}>
              <Text style={styles.profileName}>Engineer's Group</Text>
              <View style={styles.activeStatusContainer}>
                <View
                  style={[
                    styles.activeDot,
                    { backgroundColor: isPersonActive ? "#62cc7b" : "#BDBDBD" },
                  ]}
                ></View>
                <Text style={{ color: "rgba(99, 99, 99, 1)" }}>Online</Text>
              </View>
            </View>
            {/* -------------------------- */}
            {/* ----------- Add Member container ----------- */}
            {/* -------------------------- */}
            <View style={styles.memberContainer}>
              <View style={styles.memberNumberContainer}>
                <MembersIcon />
                <Text style={styles.memberNumberText}> 100 members</Text>
              </View>
              <View style={styles.addMemberContainer}>
                <PlusCircle />
                <Text style={styles.addMemberText}>Add member</Text>
              </View>
            </View>
            {/* -------------------------- */}
            {/* ----------- Copy Invitation link container ----------- */}
            {/* -------------------------- */}
            <TouchableOpacity style={styles.invitationLinkContainer}>
              <LinkIcon />
              <Text style={styles.invitationLinkText}>
                {" "}
                Click to copy invitation link
              </Text>
            </TouchableOpacity>
            {/* -------------------------- */}
            {/* ----------- Notification Container ----------- */}
            {/* -------------------------- */}
            <View style={styles.notificationContainer}>
              <View style={styles.notificationSubContainer}>
                <NotifyBell />
                <Text
                  style={{
                    color: "rgba(99, 99, 99, 1)",
                    fontFamily: "Inter-Regular",
                    fontSize: responsiveScreenFontSize(2.2),
                  }}
                >
                  Notification
                </Text>
              </View>
              {/* -------------------------- */}
              {/* ----------- Toggle Button Component ----------- */}
              {/* -------------------------- */}
              <SwitchButton />
            </View>
            {/* -------------------------- */}
            {/* -----------Group Description Container ----------- */}
            {/* -------------------------- */}
            <View style={styles.descriptionContainer}>
              <Text
                style={{
                  fontSize: responsiveScreenFontSize(2.1),
                  fontFamily: "Inter-SemiBold",
                  paddingTop: responsiveScreenHeight(2),
                  paddingBottom: responsiveScreenHeight(1.7),
                }}
              >
                Group Description
              </Text>
              <Text
                style={{
                  color: "rgba(99, 99, 99, 1)",
                  fontFamily: "Inter-Regular",
                  fontSize: responsiveScreenFontSize(1.8),
                }}
              >
                This group all member are engineers. They are very friendly and
                open minded.
              </Text>
              <View
                style={{
                  borderBottomWidth: 0.5,
                  borderColor: "rgba(0, 0, 0, 0.2)",
                  marginTop: responsiveScreenHeight(2.7),
                  marginBottom: responsiveScreenHeight(1.5),
                }}
              ></View>
            </View>
            {/* -------------------------- */}
            {/* ----------- Tab View ----------- */}
            {/* -------------------------- */}
            <GroupTabView />
            {/* -------------------------- */}
            {/* ----------- Bottom Container(Block, Report, Archive Chat) ----------- */}
            {/* -------------------------- */}
            <View>
              <View style={styles.blockContainer}>
                <MaterialCommunityIcons
                  name="block-helper"
                  size={20}
                  color="rgba(244, 42, 65, 1)"
                />
                <Text
                  style={[
                    styles.ContainerText,
                    { color: "rgba(244, 42, 65, 1)" },
                  ]}
                >
                  Block Anamika
                </Text>
              </View>
              <View style={styles.blockContainer}>
                <Feather name="archive" size={24} color="rgba(99, 99, 99, 1)" />
                <Text style={styles.ContainerText}>Report</Text>
              </View>
              <View style={styles.blockContainer}>
                <Feather
                  name="alert-triangle"
                  size={24}
                  color="rgba(99, 99, 99, 1)"
                />
                <Text style={styles.ContainerText}>Archive Chat</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default GroupProfileModal;

const styles = StyleSheet.create({
  // --------------------------
  // ----------- Invitation Link Container -----------
  // --------------------------
  invitationLinkText: {
    fontFamily: "Inter-Regular",
    fontSize: responsiveScreenFontSize(2),
    color: "#17855F",
  },
  invitationLinkContainer: {
    flexDirection: "row",
    gap: responsiveScreenWidth(1),
    alignItems: "center",
    paddingBottom: responsiveScreenHeight(2),
  },
  // --------------------------
  // ----------- Member Container -----------
  // --------------------------
  memberNumberText: {
    fontFamily: "Inter-Regular",
    fontSize: responsiveScreenFontSize(2),
    color: "#666",
  },
  addMemberText: {
    fontFamily: "Inter-Regular",
    fontSize: responsiveScreenFontSize(1.8),
    color: "#17855F",
  },
  memberNumberContainer: {
    flexDirection: "row",
    gap: responsiveScreenWidth(1),
    alignItems: "center",
  },
  addMemberContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: responsiveScreenWidth(1),
  },
  memberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: responsiveScreenHeight(2.5),
  },
  cameraIcon: {
    position: "absolute",
    bottom: responsiveScreenWidth(4),
    right: responsiveScreenWidth(3),
    padding: responsiveScreenWidth(2.3),
    backgroundColor: "rgba(242, 243, 246, 1)",
    borderRadius: 100,
  },
  editIcon: {
    position: "absolute",
    top: responsiveScreenWidth(4),
    right: responsiveScreenWidth(4),
  },
  // --------------------------
  // ----------- Dummy Container -----------
  // --------------------------
  dummyContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: responsiveScreenHeight(1),
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    paddingVertical: responsiveScreenHeight(1),
  },
  // --------------------------
  // ----------- Notification Container -----------
  // --------------------------
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: responsiveScreenHeight(2),
    marginTop: responsiveScreenHeight(0.5),
  },
  notificationSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(2),
  },
  blockContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(2),
    marginVertical: responsiveScreenHeight(1),
  },
  ContainerText: {
    fontFamily: "Inter-Regular",
    fontSize: responsiveScreenFontSize(2),
    color: "rgba(99, 99, 99, 1)",
  },
  // --------------------------
  // ----------- Description Container -----------
  // --------------------------
  descriptionContainer: {
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    // paddingBottom: responsiveScreenHeight(3),
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
  modalArrowIcon: {
    fontSize: responsiveScreenFontSize(2.5),
    paddingBottom: responsiveScreenHeight(0.8),
    color: "rgba(71, 71, 72, 1)",
  },
  profileImageContainer: {
    height: responsiveScreenHeight(30),
    width: responsiveScreenWidth(80),
    resizeMode: "cover",
    borderRadius: responsiveScreenHeight(1),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "rgba(217, 217, 217, 1)",
    backgroundColor: "rgba(217, 217, 217, 1)",
  },
  profileNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: responsiveScreenHeight(1.7),
  },
  profileName: {
    fontFamily: "Inter-SemiBold",
    fontSize: responsiveScreenFontSize(3),
    color: "rgba(0, 0, 0, 0.8)",
  },
  activeStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(2),
  },
  activeDot: {
    width: responsiveScreenWidth(3.3),
    height: responsiveScreenWidth(3.3),
    borderRadius: responsiveScreenWidth(100),
    color: "rgba(0, 0, 0, 0.6)",
  },
});
