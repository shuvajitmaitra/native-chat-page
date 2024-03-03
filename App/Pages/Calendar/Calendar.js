import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

const Calendar = () => {
  return (
    <View style={styles.calenderTopicContainer}>
      <View style={styles.weekContainer}>
        <Text style={styles.weekText}>Week 1</Text>
        <Text style={styles.weekText}>Jan 1 - Jan 7</Text>
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  weekText: {
    color: "#546A7E",
    fontSize: responsiveScreenFontSize(1.4),
  },
  weekContainer: {
    flexDirection: "row",
    gap: responsiveScreenWidth(5),
  },
  calenderTopicContainer: {
    paddingVertical: responsiveScreenHeight(2),
    paddingHorizontal: responsiveScreenWidth(4),
  },
});
