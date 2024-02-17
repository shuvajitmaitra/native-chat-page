import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useFonts } from "expo-font";
import Modal from "react-native-modal";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
const ViewProfile = ({
  toggleViewProfileModal,
  isProfileModalVisible,
  isPersonActive = true,
}) => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/Fonts/Inter-Black.ttf"),
    "Inter-Regular": require("../../../assets/Fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../../../assets/Fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("../../../assets/Fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../../../assets/Fonts/Inter-SemiBold.ttf"),
    "KodeMono-Regular": require("../../../assets/Fonts/KodeMono-Regular.ttf"),
    "KodeMono-Bold": require("../../../assets/Fonts/KodeMono-Bold.ttf"),
    "KodeMono-Medium": require("../../../assets/Fonts/KodeMono-Medium.ttf"),
    "KodeMono-SemiBold": require("../../../assets/Fonts/KodeMono-SemiBold.ttf"),
    "WorkSans-Regular": require("../../../assets/Fonts/WorkSans-Regular.ttf"),
    "WorkSans-Bold": require("../../../assets/Fonts/WorkSans-Bold.ttf"),
    "WorkSans-Medium": require("../../../assets/Fonts/WorkSans-Medium.ttf"),
    "WorkSans-SemiBold": require("../../../assets/Fonts/WorkSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Modal isVisible={isProfileModalVisible}>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleViewProfileModal}>
          <FontAwesome6 name="arrow-left-long" style={styles.modalArrowIcon} />
        </TouchableOpacity>
        <ScrollView>
          <View>
            <Image
              style={styles.profileImage}
              source={require("../../../assets/women1.png")}
            />
            {/* -------------------------- */}
            {/* ----------- Profile Name Container ----------- */}
            {/* -------------------------- */}
            <View style={styles.profileNameContainer}>
              <Text style={styles.profileName}>Anamika Rahman</Text>
              <View style={styles.activeStatusContainer}>
                <View
                  style={[
                    styles.activeDot,
                    { backgroundColor: isPersonActive ? "#62cc7b" : "#BDBDBD" },
                  ]}
                ></View>
                <Text>Online</Text>
              </View>
            </View>
            {/* -------------------------- */}
            {/* ----------- Notification Container ----------- */}
            {/* -------------------------- */}
            <View style={styles.notificationContainer}>
              <View style={styles.notificationSubContainer}>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
                <Text style={{ color: "rgba(99, 99, 99, 1)" }}>
                  Notification
                </Text>
              </View>
              <MaterialCommunityIcons
                name="toggle-switch-off"
                size={50}
                color="
                rgba(39, 172, 31, 1)"
              />
            </View>
            {/* -------------------------- */}
            {/* ----------- Description Container ----------- */}
            {/* -------------------------- */}
            <View style={styles.descriptionContainer}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                  fontFamily: "Inter-SemiBold",
                  paddingVertical: responsiveHeight(1),
                }}
              >
                Description
              </Text>
              <Text style={{ color: "rgba(71, 71, 72, 1)" }}>
                Hi there! I&apos;m using this app long time.
              </Text>
            </View>
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
                <EvilIcons name="archive" size={24} color="black" />
                <Text style={styles.ContainerText}>Report</Text>
              </View>
              <View style={styles.blockContainer}>
                <Feather name="alert-triangle" size={24} color="black" />
                <Text style={styles.ContainerText}>Archive Chat</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ViewProfile;

const styles = StyleSheet.create({
  // --------------------------
  // ----------- Notification Container -----------
  // --------------------------
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notificationSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveWidth(2),
  },
  blockContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveWidth(2),
  },
  ContainerText: {
    fontFamily: "Inter-Regular",
    fontSize: responsiveFontSize(2),
    color: "rgba(99, 99, 99, 1)",
  },
  // --------------------------
  // ----------- Description Container -----------
  // --------------------------
  descriptionContainer: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    paddingBottom: responsiveHeight(1),
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(2.5),
    backgroundColor: "white",
    borderRadius: responsiveWidth(2),
  },
  modalArrowIcon: {
    fontSize: responsiveFontSize(2.5),
    paddingBottom: responsiveHeight(0.8),
    color: "rgba(71, 71, 72, 1)",
  },
  profileImage: {
    height: responsiveHeight(30),
    width: responsiveWidth(80),
    // resizeMode: "",
    objectFit: "cover",
    borderRadius: responsiveHeight(1),
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "rgba(217, 217, 217, 1)",
  },
  profileNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: responsiveHeight(1.7),
  },
  profileName: {
    fontFamily: "Inter-Medium",
    fontSize: responsiveFontSize(3),
    color: "rgba(0, 0, 0, 0.8)",
  },
  activeStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveWidth(2),
  },
  activeDot: {
    width: responsiveWidth(3.3),
    height: responsiveWidth(3.3),
    borderRadius: responsiveWidth(100),
    color: "rgba(0, 0, 0, 0.6)",
  },
});
