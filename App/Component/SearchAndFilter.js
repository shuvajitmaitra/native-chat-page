import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const SearchAndFilter = () => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.inputField}>
        <TextInput style={styles.textInput} placeholder="Search..." />
        <Feather style={styles.inputFieldIcon} name="search" />
      </View>
      <TouchableOpacity style={styles.filterButton}>
        <Feather
          name="filter"
          size={24}
          color="black"
          style={styles.filterButtonIcon}
        />
        <Text style={styles.filterButtonText}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchAndFilter;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: responsiveWidth(4),
    alignItems: "center",
    margin: responsiveWidth(4),
    // borderColor: "red",
    // borderWidth: 1,
  },

  filterButton: {
    flexDirection: "row",
    backgroundColor: "#27ac1f",
    alignItems: "center",
    gap: responsiveWidth(2.6),
    padding: responsiveWidth(2.8),
    paddingHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(1.8),
  },
  inputField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "F2F2F2",
    padding: responsiveWidth(2.3),
    paddingHorizontal: responsiveWidth(4),
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    flex: 1,
    borderRadius: responsiveWidth(1.8),
  },
  inputFieldIcon: {
    fontSize: responsiveFontSize(2.6),
    color: "gray",
  },
  textInput: {
    fontSize: responsiveFontSize(1.9),
  },
  filterButtonIcon: {
    fontSize: responsiveFontSize(2.2),
    color: "white",
  },
  filterButtonText: {
    fontSize: responsiveFontSize(2.2),
    color: "white",
  },
});
