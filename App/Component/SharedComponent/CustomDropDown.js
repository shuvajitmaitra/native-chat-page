import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import DownArrowIcon from "../../../assets/svgs/downArrowIcon";
import ArrowLeft from "../../../assets/svgs/ArrowLeft";
import UpArrowIcon from "../../../assets/svgs/UpArrowIcon";
const countries = [{ type: "Private" }, { type: "Public" }];

const CustomDropDown = ({}) => {
  const [clicked, setClicked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={[
          styles.inputField,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
        onPress={() => {
          setClicked(!clicked);
        }}
      >
        <Text
          style={{
            paddingVertical: responsiveScreenHeight(0.5),
          }}
        >
          {selectedCountry == "" ? "Select Country" : selectedCountry}
        </Text>
        {clicked ? <UpArrowIcon /> : <DownArrowIcon />}
      </TouchableOpacity>
      {clicked ? (
        <View style={styles.inputField}>
          {countries.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedCountry(item.type);
                setClicked(!clicked);
              }}
            >
              <Text style={styles.Text}>{item.type}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </View>
  );
};

export default CustomDropDown;
const styles = StyleSheet.create({
  Text: {
    fontFamily: "Inter-Medium",
    fontSize: responsiveScreenFontSize(1.8),
    marginBottom: responsiveScreenHeight(1),
    color: "rgba(11, 42, 70, 1)",
  },
  inputField: {
    backgroundColor: "rgba(238, 238, 238, 1)",
    marginBottom: responsiveScreenHeight(0.5),
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    paddingHorizontal: responsiveScreenWidth(4),
    fontFamily: "Inter-Regular",
    paddingVertical: responsiveScreenHeight(1),
  },
});
