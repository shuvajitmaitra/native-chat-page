import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  FlatList,
  SafeAreaView,
} from "react-native";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import ThreadComments from "../Component/Thread/ThreadComments";
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

  const textInputRef = useRef(null);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        if (textInputRef.current) {
          textInputRef.current.blur(); // Unfocus the TextInput
        }
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        style={[
          styles.keyboardView,
          {
            height: isFocused
              ? responsiveScreenHeight(65)
              : responsiveScreenHeight(82),
          },
        ]}
        behavior="padding"
      >
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
          <Text style={styles.replayCountText}>
            {threadData.length} replies
          </Text>
        </View>
        {/* -------------------------- */}
        {/* ----------- All Thread Comments ----------- */}
        {/* -------------------------- */}
        <View>
          {threadData.map((item, index) => (
            <ThreadComments key={index} item={item} />
          ))}
        </View>
        {/* FlatList dawa ucit But flat list dile akta error dische */}
        {/* <FlatList
          data={threadData}
          renderItem={({ item }) => <ThreadComments item={item} />}
          keyExtractor={(_, index) => index.toString()}
        /> */}
        {/* -------------------------- */}
        {/* ----------- Comment Box ----------- */}
        {/* -------------------------- */}
        <View style={{ flexGrow: 1 }}></View>
        <View style={[styles.replayContainer]}>
          <TouchableOpacity>
            <FontAwesome5 name="smile" style={styles.emojiIcon} />
          </TouchableOpacity>
          <TextInput
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={textInputRef}
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Thread;

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  container: {
    backgroundColor: "#F8F8F8",
    paddingVertical: responsiveScreenWidth(4),
    paddingHorizontal: responsiveScreenWidth(5),
  },
  profileImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(4),
  },
  profileImage: {
    width: responsiveScreenWidth(10),
    height: responsiveScreenWidth(10),
    borderRadius: responsiveScreenWidth(100),
    resizeMode: "cover",
    position: "relative",
  },
  activeDot: {
    width: responsiveScreenWidth(2.7),
    height: responsiveScreenWidth(2.7),
    borderRadius: responsiveScreenWidth(100),
    position: "absolute",
    bottom: responsiveScreenWidth(0.9),
    right: -2,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  profileName: {
    fontSize: responsiveScreenFontSize(2.5),
    fontWeight: "500",
    color: "black",
  },
  messageTime: {
    color: "rgba(111, 116, 124, 1)",
    paddingVertical: responsiveScreenHeight(0.2),
  },
  threadText: {
    fontSize: responsiveScreenFontSize(2.1),
    color: "rgba(11, 42, 70, 1)",
    paddingVertical: responsiveScreenHeight(2),
  },
  replayCountText: {
    color: "rgba(39, 172, 31, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    paddingBottom: responsiveScreenHeight(2),
  },
  replayContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: responsiveScreenWidth(3),
    height: responsiveScreenHeight(5),
    width: responsiveScreenWidth(90),
    backgroundColor: "white",
    borderRadius: 100,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  replayInput: {
    backgroundColor: "white",
    width: responsiveScreenWidth(62),
  },
  sentIcon: {
    fontSize: responsiveScreenFontSize(2.7),
    color: "rgba(39, 172, 31, 1)",
    transform: [{ rotate: "45deg" }],
    paddingHorizontal: responsiveScreenWidth(2),
  },
  emojiIcon: {
    fontSize: responsiveScreenFontSize(2.3),
    color: "rgba(0, 0, 0, 0.7)",
  },
  clipIcon: {
    fontSize: responsiveScreenFontSize(2.7),
    color: "rgba(0, 0, 0, 0.7)",
  },
  micIcon: {
    fontSize: responsiveScreenFontSize(2.4),
    color: "rgba(0, 0, 0, 0.7)",
  },
});
