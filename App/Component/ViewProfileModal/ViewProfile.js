import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useFonts } from "expo-font";
import Modal from "react-native-modal";
const ViewProfile = ({ toggleViewProfileModal, isProfileModalVisible }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../../assets/Fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../../../assets/Fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("../../../assets/Fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../../../assets/Fonts/Inter-SemiBold.ttf"),
    "KodeMono-Regular": require("../../../assets/Fonts/KodeMono-Regular.ttf"),
    "KodeMono-Bold": require("../../../assets/Fonts/KodeMono-Bold.ttf"),
    "KodeMono-Medium": require("../../../assets/Fonts/KodeMono-Medium.ttf"),
    "KodeMono-SemiBold": require("../../../assets/Fonts/KodeMono-SemiBold.ttf"),
    "WorkSans-Regular": require("../../../assets/Fonts/WorkSans-Regular.ttf"),
    "WorkSans-Bold": require("../../../assets/Fonts/WorkSans-Bold.ttf"),
    "WorkSans-Medium": require("../../../assets/Fonts/WorkSans-Medium.ttf"),
    "WorkSans-SemiBold": require("../../../assets/Fonts/WorkSans-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Modal isVisible={isProfileModalVisible}>
      <ScrollView>
        <View style={styles.container}>
          {/* <Image
          style={styles.profileImage}
          source={require("../../../assets/women1.png")}

        /> */}
          <TouchableOpacity onPress={toggleViewProfileModal}>
            <Text>Go Back</Text>
          </TouchableOpacity>
          <Text style={{ fontFamily: "fonts" }}>Hello world</Text>
        </View>
      </ScrollView>
    </Modal>
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
