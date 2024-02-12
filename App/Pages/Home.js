import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Chat")}
        style={{
          backgroundColor: "#27ac1f",
          width: responsiveScreenWidth(50),
          alignItems: "center",
          borderRadius: 10,
          padding: responsiveScreenWidth(3),
        }}
      >
        <Text style={{ color: "#ffff" }}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
