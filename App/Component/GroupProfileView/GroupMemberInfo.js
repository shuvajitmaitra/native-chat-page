import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Popover, PopoverController } from "react-native-modal-popover";

import ThreeDotGrayIcon from "../../../assets/svgs/ThreeDotGrayIcon";
import Fonts from "../../../assets/Fonts/Fonts";
import VolumeMute from "../../../assets/svgs/VolumeMute";
import AddUsers from "../../../assets/svgs/AddUser";
import BlockIcon from "../../../assets/svgs/BlockIcon";
import BinIcon from "../../../assets/svgs/BinIcon";

const GroupMemberInfo = ({ item, index }) => {
  return (
    <View
      style={[
        styles.container,
        { borderTopColor: index ? "rgba(0, 0, 0, 0.1)" : "white" },
      ]}
    >
      {/* -------------------------- */}
      {/* ----------- Profile Image ----------- */}
      {/* -------------------------- */}
      <View style={styles.profileImageContainer}>
        <View>
          <Image style={styles.profileImage} source={item.profileImage} />
        </View>
        <View>
          <Text style={styles.profileName}>
            {item.userName}{" "}
            {item.role === "Member" || (
              <Text style={styles.roleText}>{`(${item.role})`}</Text>
            )}
          </Text>
          <Text
            style={[
              styles.status,
              { color: item.status === "Online" ? "#06AC6D" : "#666666" },
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>
      {/* -------------------------- */}
      {/* ----------- Three dot icon ----------- */}
      {/* -------------------------- */}
      <PopoverController>
        {({
          openPopover,
          closePopover,
          popoverVisible,
          setPopoverAnchor,
          popoverAnchorRect,
        }) => (
          <React.Fragment>
            <TouchableOpacity
              style={styles.threeDotIcon}
              ref={setPopoverAnchor}
              onPress={openPopover}
            >
              <ThreeDotGrayIcon />
            </TouchableOpacity>
            <Popover
              contentStyle={styles.content}
              arrowStyle={styles.arrow}
              backgroundStyle={styles.background}
              visible={popoverVisible}
              onClose={closePopover}
              fromRect={popoverAnchorRect}
              placement="bottom"
              supportedOrientations={["portrait", "landscape"]}
            >
              <View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity>
                    <View style={styles.iconAndTextContainer}>
                      <AddUsers />
                      <Text style={styles.buttonText}>Role</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity>
                    <View style={styles.iconAndTextContainer}>
                      <VolumeMute />
                      <Text style={styles.buttonText}>Mute</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity>
                    <View style={styles.iconAndTextContainer}>
                      <BlockIcon />
                      <Text style={styles.buttonText}>Block</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={[styles.buttonContainer, { borderBottomWidth: 0 }]}
                >
                  <TouchableOpacity>
                    <View style={styles.iconAndTextContainer}>
                      <BinIcon />
                      <Text style={styles.buttonText}>Remove</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Popover>
          </React.Fragment>
        )}
      </PopoverController>
    </View>
  );
};

export default GroupMemberInfo;

const styles = StyleSheet.create({
  roleText: {
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-Regular",
    fontSize: responsiveScreenFontSize(1.5),
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: responsiveScreenHeight(1),
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.1)",
  },
  profileImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(4),
  },
  profileImage: {
    width: responsiveScreenWidth(10),
    height: responsiveScreenWidth(10),
    borderRadius: responsiveScreenWidth(100),
    resizeMode: "cover",
    position: "relative",
  },
  profileName: {
    fontSize: responsiveScreenFontSize(2),

    fontWeight: "500",
    color: "black",
    fontFamily: "Inter-Medium",
  },
  status: {
    color: "rgba(11, 42, 70, 1)",
    fontSize: responsiveScreenFontSize(1.9),
    paddingVertical: responsiveScreenHeight(0.2),
  },
  commentsTime: {
    color: "rgba(111, 116, 124, 1)",
    fontSize: responsiveScreenFontSize(1.9),
  },
  // --------------------------
  // ----------- Popup modal -----------
  // --------------------------
  threeDotIcon: {
    paddingHorizontal: responsiveScreenWidth(1),
  },
  buttonText: {
    fontSize: responsiveScreenFontSize(2),
    color: "#666",
  },
  iconAndTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(3),
  },
  buttonContainer: {
    paddingVertical: responsiveScreenHeight(1.5),
    paddingHorizontal: responsiveScreenWidth(1.5),
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },

  content: {
    borderRadius: 8,
    minWidth: responsiveScreenWidth(50),
  },
});
