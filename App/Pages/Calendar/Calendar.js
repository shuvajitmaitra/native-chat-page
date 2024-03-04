import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import RightArrowLong from "../../../assets/svgs/RightArrowLong";
import Fonts from "../../../assets/Fonts/Fonts";

// --------------------------
// ----------- Calendar Item Components -----------
// --------------------------

export const CalendarItems = (item) => {
  return (
    <View style={styles.eventTopicContainer}>
      <View style={styles.eventDateContainer}>
        <View style={styles.eventDate}>
          <Text style={styles.eventDay}>{item.item.day}</Text>
          <Text style={styles.eventDateNumber}>{item.item.date}</Text>
        </View>
        <RightArrowLong />
      </View>
      <View
        style={{
          // backgroundColor: "salmon",
          width: responsiveScreenWidth(75),
        }}
      >
        <View
          style={[
            styles.eventTitleAndDateContainer,
            {
              backgroundColor:
                (item.item.status === "proposed new time" && "#619DCC") ||
                (item.item.status === "accepted" && "#27AC1F") ||
                (item.item.status === "pending" && "#FF9900") ||
                (item.item.status === "denied" && "#00C177") ||
                (item.item.status === "rejected" && "#EF4E52") ||
                (item.item.status === "finished" && "#7666FF"),
            },
          ]}
        >
          <Text style={{ color: "white", fontFamily: "WorkSans-Medium" }}>
            {item.item.title}
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: "WorkSans-Regular",
              fontSize: responsiveScreenFontSize(1.5),
            }}
          >
            {item.item.time}
          </Text>
        </View>
        <Text style={styles.EditorNameDate}>
          <Text style={{ color: "black", fontWeight: "500" }}>Edited:</Text>{" "}
          Abdullah Noman - Feb 20, 2024
        </Text>
      </View>
    </View>
  );
};

// --------------------------
// ----------- Main Components -----------
// --------------------------

const Calendar = () => {
  const data = [
    {
      title: "Show N Tell (Finished)",
      time: "10PM - 11PM",
      day: "Mon",
      date: 6,
      status: "proposed new time",
    },
    {
      title: "Interview with Pranto (Accepted) ",
      time: "10PM - 11PM",
      day: "Mon",
      date: 9,
      status: "accepted",
    },
    {
      title: "Meeting with Shiblu Ahmad",
      time: "10PM - 11PM",
      day: "Mon",
      date: 12,
      status: "pending",
    },
    {
      title: "Meeting with Shiblu Ahmad",
      time: "10PM - 11PM",
      day: "Mon",
      date: 14,
      status: "denied",
    },
    {
      title: "Interview with Pranto (Accepted) ",
      time: "10PM - 11PM",
      day: "Mon",
      date: 25,
      status: "proposed new time",
    },
  ];
  return (
    <ScrollView>
      <View style={styles.calenderTopicContainer}>
        <View style={styles.weekContainer}>
          <Text style={styles.weekText}>Week 1</Text>
          <Text style={styles.weekText}>Jan 1 - Jan 7</Text>
        </View>
        {data.map(
          (item, index) =>
            item.date >= 1 &&
            item.date <= 7 && <CalendarItems key={index} item={item} />
        )}

        <View style={styles.weekContainer}>
          <Text style={styles.weekText}>Week 2</Text>
          <Text style={styles.weekText}>Jan 8 - Jan 14</Text>
        </View>
        {data.map(
          (item, index) =>
            item.date >= 8 &&
            item.date <= 14 && <CalendarItems key={index} item={item} />
        )}
        <View style={styles.weekContainer}>
          <Text style={styles.weekText}>Week 3</Text>
          <Text style={styles.weekText}>Jan 15 - Jan 21</Text>
        </View>
        {data.map(
          (item, index) =>
            item.date >= 15 &&
            item.date <= 21 && <CalendarItems key={index} item={item} />
        )}
        <View style={styles.weekContainer}>
          <Text style={styles.weekText}>Week 4</Text>
          <Text style={styles.weekText}>Jan 22 - Jan 28</Text>
        </View>
        {data.map(
          (item, index) =>
            item.date >= 22 &&
            item.date <= 28 && <CalendarItems key={index} item={item} />
        )}
        <View style={styles.weekContainer}>
          <Text style={styles.weekText}>Week 5</Text>
          <Text style={styles.weekText}>Jan 29 - Feb 4</Text>
        </View>
        {data.map(
          (item, index) =>
            item.date >= 29 &&
            item.date <= 31 && <CalendarItems key={index} item={item} />
        )}
      </View>
    </ScrollView>
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
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(0.5),
    borderRadius: 7,
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
    gap: responsiveScreenWidth(6.5),
  },
  calenderTopicContainer: {
    paddingVertical: responsiveScreenHeight(2),
    paddingHorizontal: responsiveScreenWidth(4),
    gap: responsiveScreenHeight(1.5),
    // width: "100%",
    backgroundColor: "white",
  },
});
