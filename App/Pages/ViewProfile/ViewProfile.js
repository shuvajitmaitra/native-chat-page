import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const ViewProfile = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={require("../../../assets/women1.png")}
        />
      </View>
    </ScrollView>
  );
};

export default ViewProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(2),
    backgroundColor: "white",
  },
  profileImage: {
    height: responsiveHeight(30),
    width: responsiveWidth(90),
    resizeMode: "cover",
    borderRadius: responsiveHeight(1),
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "rgba(217, 217, 217, 1)",
  },
});
