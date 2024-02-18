import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";

const UploadedFile = () => {
  const data = [
    {
      fileName: "Group 20.jpg",
      fileURL: require("../../../assets/file.png"),
      fileSize: "199.4KB",
      dateTime: "30.11.23 at 12:30 PM",
    },
    {
      fileName: "Group 20.jpg",
      fileURL: require("../../../assets/file.png"),
      fileSize: "199.4KB",
      dateTime: "30.11.23 at 12:30 PM",
    },
    {
      fileName: "Group 20.jpg",
      fileURL: require("../../../assets/file.png"),
      fileSize: "199.4KB",
      dateTime: "30.11.23 at 12:30 PM",
    },
    {
      fileName: "Group 20.jpg",
      fileURL: require("../../../assets/file.png"),
      fileSize: "199.4KB",
      dateTime: "30.11.23 at 12:30 PM",
    },
  ];
  return (
    <View>
      <View>
        {data.map((item, index) => (
          <View key={index} style={styles.subContainer}>
            <Image source={item.fileURL} style={styles.image} />
            <View>
              <Text>{item.fileName}</Text>
              <View>
                <Text>{item.fileSize}</Text>
                <Text>{item.dateTime}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default UploadedFile;

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: "row",
    gap: responsiveWidth(3),
  },
});
