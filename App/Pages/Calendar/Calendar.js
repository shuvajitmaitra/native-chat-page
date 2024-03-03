import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import RightArrowLong from "../../../assets/svgs/RightArrowLong";
import Fonts from "../../../assets/Fonts/Fonts";

const Calendar = () => {
  return (
    <View style={styles.calenderTopicContainer}>
      <View style={styles.weekContainer}>
        <Text style={styles.weekText}>Week 1</Text>
        <Text style={styles.weekText}>Jan 1 - Jan 7</Text>
      </View>
      <View style={styles.eventTopicContainer}>
        <View style={styles.eventDateContainer}>
          <View style={styles.eventDate}>
            <Text style={styles.eventDay}>Mon</Text>
            <Text style={styles.eventDateNumber}>6</Text>
          </View>
          <RightArrowLong />
        </View>
        <View>
          <View style={styles.eventTitleAndDateContainer}>
            <Text>Show N Tell(Finished)</Text>
            <Text>10PM - 11 PM</Text>
          </View>
          <Text>Edited: Abdullah Noman - Feb 20, 2024</Text>
        </View>
      </View>
      <View style={styles.weekContainer}>
        <Text style={styles.weekText}>Week 2</Text>
        <Text style={styles.weekText}>Jan 8 - Jan 14</Text>
      </View>
      <View style={styles.weekContainer}>
        <Text style={styles.weekText}>Week 3</Text>
        <Text style={styles.weekText}>Jan 15 - Jan 21</Text>
      </View>
      <View style={styles.weekContainer}>
        <Text style={styles.weekText}>Week 4</Text>
        <Text style={styles.weekText}>Jan 22 - Jan 28</Text>
      </View>
      <View style={styles.weekContainer}>
        <Text style={styles.weekText}>Week 5</Text>
        <Text style={styles.weekText}>Jan 29 - Jan 24</Text>
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  eventTitleAndDateContainer: {
    backgroundColor: "#619DCC",
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  eventDateNumber: {
    fontFamily: "Inter-Regular",
    fontSize: responsiveScreenFontSize(3),
  },
  eventDateContainer: {
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(2),
  },
  eventTopicContainer: {
    backgroundColor: "green",
    flexDirection: "row",
    gap: responsiveScreenWidth(2),
  },
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
    gap: responsiveScreenHeight(1.5),
  },
});
