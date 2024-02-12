import {
  ScrollView,
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
import PersonChats from "../Component/PersonChats";
import GroupChats from "../Component/GroupChats";

const Chat = () => {
  const women1 = require("../../assets/women1.png");
  const women2 = require("../../assets/women2.png");
  const women3 = require("../../assets/women3.png");
  const women4 = require("../../assets/women4.png");
  const women5 = require("../../assets/women5.png");
  return (
    <ScrollView style={styles.container}>
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
      <PersonChats
        profileName="Anamika Rahman"
        profileImage={women1}
        numberOfPendingMessage={0}
        isMessageSeen={true}
        isPersonActive={true}
        isChatClicked={true}
      />
      <GroupChats
        GroupName="Developer Group"
        messageText="SR sent a video"
        numberOfPendingMessage={5}
        isMessageSeen={false}
        isPersonActive={true}
        isChatClicked={false}
      />
      <PersonChats
        profileName="Priyanka Parvej"
        profileImage={women2}
        numberOfPendingMessage={0}
        isMessageSeen={true}
        isPersonActive={false}
        isChatClicked={false}
      />
      <PersonChats
        profileName="Anna Roji"
        profileImage={women3}
        messageText="AR sent a photo"
        numberOfPendingMessage={2}
        isMessageSeen={false}
        isPersonActive={true}
        isChatClicked={false}
      />
      <PersonChats
        profileName="Jakia Jemmy"
        profileImage={women4}
        numberOfPendingMessage={0}
        isMessageSeen={true}
        isPersonActive={false}
        isChatClicked={false}
      />
      <PersonChats
        profileName="Annamika Moni Rahman"
        profileImage={women5}
        numberOfPendingMessage={2}
        isMessageSeen={true}
        isPersonActive={true}
        isChatClicked={false}
      />
      <GroupChats
        GroupName="Engineer Group"
        messageText="SR sent a video"
        numberOfPendingMessage={5}
        isMessageSeen={false}
        isPersonActive={true}
        isChatClicked={false}
      />
      <PersonChats
        profileName="AR"
        profileImage={women1}
        numberOfPendingMessage={2}
        isMessageSeen={true}
        isPersonActive={true}
        isChatClicked={false}
      />
    </ScrollView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "F8F8F8",
    margin: responsiveWidth(4),
  },
});
