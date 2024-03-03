import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import RightArrowLong from "../../../assets/svgs/RightArrowLong";
import Fonts from "../../../assets/Fonts/Fonts";

const Calendar = () => {
  const data = [
    {
      title: "Show N Tell (Finished)",
      Time: "10PM - 11PM",
      day: "Mon",
      date: 6,
    },
    {
      title: "Show N Tell (Finished)",
      Time: "10PM - 11PM",
      day: "Mon",
      date: 6,
    },
    {
      title: "Show N Tell (Finished)",
      Time: "10PM - 11PM",
      day: "Mon",
      date: 6,
    },
    {
      title: "Show N Tell (Finished)",
      Time: "10PM - 11PM",
      day: "Mon",
      date: 6,
    },
    {
      title: "Show N Tell (Finished)",
      Time: "10PM - 11PM",
      day: "Mon",
      date: 6,
    },
    {
      title: "Show N Tell (Finished)",
      Time: "10PM - 11PM",
      day: "Mon",
      date: 6,
    },
  ];
  return (
    <View style={styles.calenderTopicContainer}>
      <View style={styles.weekContainer}>
        <Text style={styles.weekText}>Week 1</Text>
        <Text style={styles.weekText}>Jan 1 - Jan 7</Text>
      </View>
      {/* -------------------------- */}
      {/* ----------- Container ----------- */}
      {/* -------------------------- */}
      <View style={styles.eventTopicContainer}>
        <View style={styles.eventDateContainer}>
          <View style={styles.eventDate}>
            <Text style={styles.eventDay}>Mon</Text>
            <Text style={styles.eventDateNumber}>6</Text>
          </View>
          <RightArrowLong />
        </View>
        <View
          style={{
            // backgroundColor: "salmon",
            width: responsiveScreenWidth(75),
          }}
        >
          <View style={styles.eventTitleAndDateContainer}>
            <Text style={{ color: "white", fontFamily: "WorkSans-Regular" }}>
              Show N Tell(Finished)
            </Text>
            <Text
              style={{
                color: "white",
                fontFamily: "WorkSans-Regular",
                fontSize: responsiveScreenFontSize(1.5),
              }}
            >
              10PM - 11 PM
            </Text>
          </View>
          <Text style={styles.EditorNameDate}>
            <Text style={{ color: "black", fontWeight: "500" }}>Edited:</Text>{" "}
            Abdullah Noman - Feb 20, 2024
          </Text>
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
  eventDay: {
    color: "#546A7E",
  },
  EditorNameDate: {
    fontSize: responsiveScreenFontSize(1.4),
    paddingTop: responsiveScreenHeight(0.5),
    color: "#546A7E",
    width: "100%",
  },
  eventTitleAndDateContainer: {
    backgroundColor: "#619DCC",
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(0.5),
    borderRadius: 10,
    width: "100%",
  },
  eventDateNumber: {
    fontFamily: "Inter-Medium",
    fontSize: responsiveScreenFontSize(2.7),
  },
  eventDateContainer: {
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: responsiveScreenWidth(1),
    // width: "100%",
  },
  eventTopicContainer: {
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
    // width: "100%",
  },
});
