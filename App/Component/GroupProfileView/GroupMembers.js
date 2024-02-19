import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchAndFilter from "../SearchAndFilter";
import { responsiveHeight } from "react-native-responsive-dimensions";

const GroupMembers = () => {
  return (
    <View style={styles.groupTabViewContainer}>
      <SearchAndFilter />
    </View>
  );
};

export default GroupMembers;

const styles = StyleSheet.create({
  groupTabViewContainer: {
    paddingTop: responsiveHeight(0.5),
  },
});
