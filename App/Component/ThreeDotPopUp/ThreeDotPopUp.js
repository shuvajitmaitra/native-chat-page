import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Popover, PopoverController } from "react-native-modal-popover";
import ThreeDotIcon from "../../../assets/svgs/ThreeDotIcon";
import VolumeIcon from "../../../assets/svgs/Volume";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import SearchIcon from "../../../assets/svgs/SearchIcon";
import AddUsers from "../../../assets/svgs/AddUser";
import EditIcon from "../../../assets/svgs/EditIcon";
import BinIcon from "../../../assets/svgs/BinIcon";

const ThreeDotPopUp = () => (
  <View>
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
            <ThreeDotIcon />
          </TouchableOpacity>
          <Popover
            contentStyle={styles.content}
            arrowStyle={styles.arrow}
            backgroundStyle={styles.background}
            visible={popoverVisible}
            onClose={closePopover}
            fromRect={popoverAnchorRect}
            supportedOrientations={["portrait", "landscape"]}
          >
            <View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity>
                  <View style={styles.iconAndTextContainer}>
                    <VolumeIcon />
                    <Text style={styles.buttonText}>Mute Notification</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity>
                  <View style={styles.iconAndTextContainer}>
                    <SearchIcon />
                    <Text style={styles.buttonText}>Search</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity>
                  <View style={styles.iconAndTextContainer}>
                    <AddUsers />
                    <Text style={styles.buttonText}>Share my contact</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity>
                  <View style={styles.iconAndTextContainer}>
                    <EditIcon />
                    <Text style={styles.buttonText}>Clear History</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[styles.buttonContainer, { borderBottomWidth: 0 }]}>
                <TouchableOpacity>
                  <View style={styles.iconAndTextContainer}>
                    <BinIcon />
                    <Text style={styles.buttonText}>Delete Chat</Text>
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

export default ThreeDotPopUp;

const styles = StyleSheet.create({
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
  //   app: {
  //     ...StyleSheet.absoluteFillObject,
  //     alignItems: "center",
  //     justifyContent: "center",
  //     backgroundColor: "#c2ffd2",
  //   },
  content: {
    // padding: 16,
    // backgroundColor: "pink",
    borderRadius: 8,
  },
  //   arrow: {
  //     borderTopColor: "pink",
  //   },
  //   background: {
  //     backgroundColor: "transparent",
  //   },
});
