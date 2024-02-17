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
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useFonts } from "expo-font";

const SearchAndFilter = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("../../assets/Fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("../../assets/Fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("../../assets/Fonts/Inter-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.topContainer}>
      <View style={styles.inputField}>
        <TextInput
          style={styles.textInput}
          placeholder="Search..."
          placeholderTextColor="rgba(99, 99, 99, 1)"
        />
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
    gap: responsiveWidth(2.2),
    alignItems: "center",
    paddingTop: responsiveHeight(3),
  },

  filterButton: {
    flexDirection: "row",
    backgroundColor: "#27ac1f",
    alignItems: "center",
    gap: responsiveWidth(2.6),
    paddingVertical: responsiveWidth(2.6),
    paddingHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(1.5),
  },
  inputField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    padding: responsiveWidth(1.5),
    paddingHorizontal: responsiveWidth(3.3),
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    flex: 1,
    borderRadius: responsiveWidth(2),
  },
  inputFieldIcon: {
    fontSize: responsiveFontSize(2.5),
    color: "rgba(99, 99, 99, 1)",
  },
  textInput: {
    fontSize: responsiveFontSize(1.6),
  },
  filterButtonIcon: {
    fontSize: responsiveFontSize(2),
    color: "white",
  },
  filterButtonText: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: "Inter-Regular",
    color: "white",
  },
});
