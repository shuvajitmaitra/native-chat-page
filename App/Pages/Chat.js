import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SearchAndFilter from "../Component/SearchAndFilter";

const Chat = () => {
  return (
    <View style={styles.container}>
      <SearchAndFilter />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "F8F8F8",
  },
});
