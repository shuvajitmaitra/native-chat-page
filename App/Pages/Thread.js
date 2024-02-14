import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import ThreadComments from "../Component/ThreadComments";
import { FontAwesome5 } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Thread = () => {
  const threadData = [
    {
      profileName: "Priyanka Parvej",
      profileImage: require("../../assets/women2.png"),
      comments: "Hello",
      commentsTimes: "Just now",
      isPersonActive: false,
    },
    {
      profileName: "Priyanka Parvej",
      profileImage: require("../../assets/women2.png"),
      comments: "Hello",
      commentsTimes: "Yesterday",
      isPersonActive: false,
    },
    {
      profileName: "Priyanka Parvej",
      profileImage: require("../../assets/women2.png"),
      comments: "Hello",
      commentsTimes: "Jan 12, 2024",
      isPersonActive: false,
    },
    {
      profileName: "Priyanka Parvej",
      profileImage: require("../../assets/women2.png"),
      comments: "Hello",
      commentsTimes: "Jan 12, 2024",
      isPersonActive: false,
    },
    {
      profileName: "Priyanka Parvej",
      profileImage: require("../../assets/women2.png"),
      comments: "Hello",
      commentsTimes: "Jan 12, 2024",
      isPersonActive: false,
    },
  ];
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.profileImageContainer}>
          {/* -------------------------- */}
          {/* ----------- Profile Image ----------- */}
          {/* -------------------------- */}
          <View>
            <Image
              style={styles.profileImage}
              source={require("../../assets/women2.png")}
            />

            <View
              style={[
                styles.activeDot,
                {
                  backgroundColor: "#BDBDBD",
                },
              ]}
            ></View>
          </View>
          <View>
            <Text style={styles.profileName}>Priyanka Parvej</Text>
            <Text style={styles.messageTime}>4 Nov, 2023</Text>
          </View>
        </View>
      </View>
      {/* -------------------------- */}
      {/* ----------- Thread Text ----------- */}
      {/* -------------------------- */}
      <View>
        <Text style={styles.threadText}>I miss you to much.</Text>
      </View>
      {/* -------------------------- */}
      {/* ----------- Replay Count ----------- */}
      {/* -------------------------- */}
      <View>
        <Text style={styles.replayCountText}>5 replies</Text>
      </View>
      {/* -------------------------- */}
      {/* ----------- All Thread Comments ----------- */}
      {/* -------------------------- */}
      <View>
        {threadData.map((item, index) => (
          <ThreadComments key={index} item={item} />
        ))}
      </View>
      {/* -------------------------- */}
      {/* ----------- Comment Box ----------- */}
      {/* -------------------------- */}
      <View style={{ flexGrow: 1 }}></View>
      <View style={styles.replayContainer}>
        <TouchableOpacity>
          <FontAwesome5 name="smile" style={styles.emojiIcon} />
        </TouchableOpacity>
        <TextInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={styles.replayInput}
          placeholder="Add a reply..."
        />
        {isFocused ? (
          <TouchableOpacity>
            <Feather
              name="send"
              size={24}
              style={styles.sentIcon}
              color="black"
            />
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity>
              <Foundation name="paperclip" style={styles.clipIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="mic" style={styles.micIcon} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default Thread;

const styles = StyleSheet.create({
  container: {
    paddingVertical: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(5),
    height: responsiveScreenHeight(85),
    backgroundColor: "#F8F8F8",
  },
  profileImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveWidth(4),
  },
  profileImage: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(100),
    resizeMode: "cover",
    position: "relative",
  },
  activeDot: {
    width: responsiveWidth(2.6),
    height: responsiveWidth(2.6),
    borderRadius: responsiveWidth(100),
    position: "absolute",
    bottom: responsiveWidth(0.9),
    right: -2,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  profileName: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "500",
    color: "black",
  },
  messageTime: {
    color: "rgba(111, 116, 124, 1)",
    paddingVertical: responsiveHeight(0.2),
  },
  threadText: {
    fontSize: responsiveFontSize(2.1),
    color: "rgba(11, 42, 70, 1)",
    paddingVertical: responsiveHeight(2.5),
  },
  replayCountText: {
    color: "rgba(39, 172, 31, 1)",
    // fontSize: responsiveFontSize(1.6),
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    paddingBottom: responsiveHeight(2),
  },
  //   inputText: {
  //     height: responsiveHeight(5),
  //     width: responsiveWidth(90),
  //     backgroundColor: "white",
  //     borderRadius: 100,
  //     shadowColor: "black",
  //     shadowOffset: { width: 6, height: 6 },
  //     shadowOpacity: 0.6,
  //     elevation: 1,
  //     paddingLeft: responsiveWidth(9.5),
  //     position: "relative",
  //   },
  //   smileEmoji: {
  //     // position: "absolute",
  //     // top: responsiveHeight(1.1),
  //     // left: responsiveWidth(2.4),
  //     fontSize: responsiveFontSize(2.5),
  //     color: "rgba(0, 0, 0, 0.7)",
  //   },

  replayContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: responsiveWidth(3),
    height: responsiveHeight(5),
    width: responsiveWidth(90),
    backgroundColor: "white",
    borderRadius: 100,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  replayInput: {
    backgroundColor: "white",
    width: responsiveWidth(62),
  },
  sentIcon: {
    fontSize: responsiveFontSize(2.7),
    color: "rgba(39, 172, 31, 1)",
    transform: [{ rotate: "45deg" }],
    paddingHorizontal: responsiveWidth(2),
  },
  emojiIcon: {
    fontSize: responsiveFontSize(2.3),
    color: "rgba(0, 0, 0, 0.7)",
  },
  clipIcon: {
    fontSize: responsiveFontSize(2.7),
    color: "rgba(0, 0, 0, 0.7)",
  },
  micIcon: {
    fontSize: responsiveFontSize(2.4),
    color: "rgba(0, 0, 0, 0.7)",
  },
});
