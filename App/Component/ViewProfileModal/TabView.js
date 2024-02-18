import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ImageGallary from "./ImageGallary";
import { responsiveHeight } from "react-native-responsive-dimensions";

const TabView = () => {
  const [status, setStatus] = useState("Images");
  const tabLists = [
    {
      status: "Images",
    },
    {
      status: "Files",
    },
    {
      status: "Voice",
    },
  ];

  const handleTabStatus = (status) => {
    setStatus(status);
  };
  return (
    <View>
      <View style={styles.tabContainer}>
        {tabLists.map((tab, index) => (
          <TouchableOpacity
            style={[status === tab.status && styles.tabActive]}
            key={index}
            onPress={() => handleTabStatus(tab.status)}
          >
            <Text>{tab.status}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>{status === "Images" && <ImageGallary />}</View>
    </View>
  );
};

export default TabView;

const styles = StyleSheet.create({
  tabContainer: {
    height: responsiveHeight(30),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  tabActive: {
    backgroundColor: "red",
  },
});
