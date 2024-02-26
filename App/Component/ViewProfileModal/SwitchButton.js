import {
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import FlipToggle from "react-native-flip-toggle-button";

const SwitchButton = () => {
  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = () => {
    setSwitchValue(!switchValue);
  };
  return (
    <FlipToggle
      value={switchValue}
      buttonWidth={43}
      buttonHeight={21}
      buttonRadius={50}
      sliderWidth={18}
      sliderHeight={18}
      sliderRadius={50}
      buttonOnColor="gray"
      buttonOffColor="rgba(39, 172, 31, 1)"
      sliderOnColor="white"
      sliderOffColor="white"
      onToggle={toggleSwitch}
      onToggleLongPress={() => console.log("toggle long pressed!")}
    />
  );
};

export default SwitchButton;

const styles = StyleSheet.create({
  switch: {
    backgroundColor: "red",
    color: "red",
    paddingHorizontal: responsiveScreenWidth(3),
  },
  outer: {
    height: 25,
    width: 50,
    backgroundColor: "green",
    borderRadius: 100,
    justifyContent: "center",
  },
  inner: {
    width: 20,
    height: 20,
    backgroundColor: "white",
    borderRadius: 100,
    marginHorizontal: 2,
  },
});
