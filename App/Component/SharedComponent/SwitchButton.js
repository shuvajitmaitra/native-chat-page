import {
  Button,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
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
    // <SafeAreaView style={{ flex: 1 }}>
    //   <View style={styles.container}>
    //     {/* <Button
    //       onPress={toggleSwitch}
    //       title=""
    //       style={[
    //         styles.outer,
    //         { alignItems: switchValue ? "flex-end" : "flex-start" },
    //       ]}
    //     >
    //       <TouchableOpacity style={[styles.inner]}>
    //         <View></View>
    //       </TouchableOpacity>
    //     </Button> */}
    //   </View>
    // </SafeAreaView>
  );
};

export default SwitchButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
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
    // alignItems: "flex-end",
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
