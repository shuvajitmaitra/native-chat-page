import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Popover, PopoverController } from "react-native-modal-popover";
import ThreeDotIcon from "../../../assets/svgs/ThreeDotIcon";

const styles = StyleSheet.create({
  app: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c2ffd2",
  },
  content: {
    padding: 16,
    backgroundColor: "pink",
    borderRadius: 8,
  },
  arrow: {
    borderTopColor: "pink",
  },
  background: {
    backgroundColor: "transparent",
  },
});

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
          <TouchableOpacity ref={setPopoverAnchor} onPress={openPopover}>
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
            <Text>Hello from inside popover!</Text>
          </Popover>
        </React.Fragment>
      )}
    </PopoverController>
  </View>
);

export default ThreeDotPopUp;
