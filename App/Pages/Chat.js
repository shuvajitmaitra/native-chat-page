import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SearchAndFilter from "../Component/SearchAndFilter";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Chat = () => {
  return (
    <View style={styles.container}>
      <SearchAndFilter />
      <Text
        style={{
          fontWeight: "bold",
          marginVertical: responsiveHeight(2),
          fontSize: responsiveFontSize(3),
        }}
      >
        Recent
      </Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "F8F8F8",
    margin: responsiveWidth(4),
  },
});
