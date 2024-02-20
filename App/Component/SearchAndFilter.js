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
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
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
    gap: responsiveScreenWidth(2.2),
    alignItems: "center",
  },

  filterButton: {
    flexDirection: "row",
    backgroundColor: "#27ac1f",
    alignItems: "center",
    gap: responsiveScreenWidth(2.6),
    paddingVertical: responsiveScreenWidth(2.6),
    paddingHorizontal: responsiveScreenWidth(4),
    borderRadius: responsiveScreenWidth(1.5),
  },
  inputField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    padding: responsiveScreenWidth(1.5),
    paddingHorizontal: responsiveScreenWidth(3.3),
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    flex: 1,
    borderRadius: responsiveScreenWidth(2),
  },
  inputFieldIcon: {
    fontSize: responsiveScreenFontSize(2.5),
    color: "rgba(99, 99, 99, 1)",
  },
  textInput: {
    fontSize: responsiveScreenFontSize(1.6),
  },
  filterButtonIcon: {
    fontSize: responsiveScreenFontSize(2),
    color: "white",
  },
  filterButtonText: {
    fontSize: responsiveScreenFontSize(1.9),
    fontFamily: "Inter-Regular",
    color: "white",
  },
});
