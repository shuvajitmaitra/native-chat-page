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
import ArrowLeft from "../../../assets/svgs/ArrowLeft";
import UpArrowIcon from "../../../assets/svgs/UpArrowIcon";

export const CustomDropDown = ({ options }) => {
  const [clicked, setClicked] = useState(false);
  const [crowdType, setCrowdType] = useState("");
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
          { borderBottomLeftRadius: clicked ? 0 : 10 },
          { borderBottomRightRadius: clicked ? 0 : 10 },
        ]}
        onPress={() => {
          setClicked(!clicked);
        }}
      >
        <Text
          style={{
            paddingVertical: responsiveScreenHeight(0.5),
            color: "rgba(84, 106, 126, 1)",
          }}
        >
          {crowdType == "" ? "Select Type" : crowdType}
        </Text>
        {clicked ? <UpArrowIcon /> : <DownArrowIcon />}
      </TouchableOpacity>
      {clicked ? (
        <View style={styles.dropdownOptions}>
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setCrowdType(item.type);
                setClicked(!clicked);
              }}
            >
              <Text style={styles.Text}>{item.type}</Text>
              <View
                style={{
                  borderBottomWidth: options.length == index + 1 ? 0 : 0.5,
                  borderBottomColor: "rgba(0, 0, 0, 0.3)",
                }}
              ></View>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </View>
  );
};

export default CustomDropDown;
const styles = StyleSheet.create({
  dropdownOptions: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  Text: {
    fontFamily: "Inter-Regular",
    fontSize: responsiveScreenFontSize(1.5),
    color: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: responsiveScreenWidth(4),
    paddingVertical: responsiveScreenHeight(1),
  },
  inputField: {
    backgroundColor: "rgba(238, 238, 238, 1)",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    paddingHorizontal: responsiveScreenWidth(4),
    fontFamily: "Inter-Regular",
    paddingVertical: responsiveScreenHeight(1),
  },
});
