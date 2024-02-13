import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  responsiveHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import RoleAssignModal from "../Component/RoleAssignModal";
import ChatMuteModal from "../Component/ChatMuteModal";

const Home = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("TotalChats")}
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
      <TouchableOpacity style={styles.roleAssign} onPress={toggleModal}>
        <Text style={{ color: "#ffff" }}>Role Assign</Text>
      </TouchableOpacity>

      <RoleAssignModal
        toggleModal={toggleModal}
        isModalVisible={isModalVisible}
      />
      <TouchableOpacity style={styles.roleAssign} onPress={toggleModal}>
        <Text style={{ color: "#ffff" }}>Chat Mute</Text>
      </TouchableOpacity>

      <ChatMuteModal
        toggleModal={toggleModal}
        isModalVisible={isModalVisible}
      />
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
  roleAssign: {
    marginTop: responsiveHeight(2),
    backgroundColor: "#27ac1f",
    width: responsiveScreenWidth(50),
    alignItems: "center",
    borderRadius: 10,
    padding: responsiveScreenWidth(3),
  },
});
