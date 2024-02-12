import { ScrollView, StyleSheet, Text } from "react-native";
import React from "react";
import SearchAndFilter from "../Component/SearchAndFilter";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Chat from "../Component/Chat";

const TotalChats = () => {
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
          fontWeight: "600",
          marginVertical: responsiveHeight(2.5),
          fontSize: responsiveFontSize(2.7),
        }}
      >
        Recent
      </Text>
      <Chat
        profileName="Anamika Rahman" //Using this props i passed the name of the person
        profileImage={women1} // Passed the image of the person
        numberOfPendingMessage={0} // Number of pending messages
        isMessageSeen={true} // Message seen  or not seen. If person see the message text will normal
        isPersonActive={true} // Is the person active or not active. if active person see green status or not active person can see gray status.
        isChatClicked={true} // is the chat clicked or not. if clicked background will be white otherwise it will be gray
        messagingTime="10:30 AM"
      />
      <Chat
        profileName="Developer Group"
        messageText="SR sent a video"
        numberOfPendingMessage={5}
        isMessageSeen={false}
        isPersonActive={true}
        isChatClicked={false}
        messagingTime="Yesterday"
      />
      <Chat
        profileName="Priyanka Parvej"
        profileImage={women2}
        numberOfPendingMessage={0}
        isMessageSeen={true}
        isPersonActive={false}
        isChatClicked={false}
        messagingTime="Jan 12, 2024"
      />
      <Chat
        profileName="Anna Roji"
        profileImage={women3}
        messageText="AR sent a photo"
        numberOfPendingMessage={2}
        isMessageSeen={false}
        isPersonActive={true}
        isChatClicked={false}
        messagingTime="Jan 12, 2024"
      />
      <Chat
        profileName="Jakia Jemmy"
        profileImage={women4}
        numberOfPendingMessage={0}
        isMessageSeen={true}
        isPersonActive={false}
        isChatClicked={false}
        messagingTime="Jan 12, 2024"
      />
      <Chat
        profileName="Annamika Moni Rahman"
        profileImage={women5}
        numberOfPendingMessage={2}
        isMessageSeen={true}
        isPersonActive={true}
        isChatClicked={false}
        messagingTime="Jan 12, 2024"
      />
      <Chat
        profileName="Engineer Group"
        messageText="SR sent a video"
        numberOfPendingMessage={5}
        isMessageSeen={false}
        isPersonActive={true}
        isChatClicked={false}
        messagingTime="Jan 12, 2024"
      />
      <Chat
        profileName="AR"
        profileImage={women5}
        numberOfPendingMessage={2}
        isMessageSeen={true}
        isPersonActive={true}
        isChatClicked={false}
        messagingTime="Jan 12, 2024"
      />
    </ScrollView>
  );
};

export default TotalChats;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    paddingHorizontal: responsiveWidth(4),
  },
});
