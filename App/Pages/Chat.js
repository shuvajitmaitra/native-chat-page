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
      {/* I can do with single one components. I was confused so that i make it in two components. One is "PersonChats" and other one is "GroupChats" */}
      <PersonChats
        profileName="Anamika Rahman" //Using this props i passed the name of the person
        profileImage={women1} // Passed the image of the person
        numberOfPendingMessage={0} // Number of pending messages
        isMessageSeen={true} // Message seen  or not seen. If person see the message text will normal
        isPersonActive={true} // Is the person active or not active. if active person see green status or not active person can see gray status.
        isChatClicked={true} // is the chat clicked or not. if clicked background will be white otherwise it will be gray
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
