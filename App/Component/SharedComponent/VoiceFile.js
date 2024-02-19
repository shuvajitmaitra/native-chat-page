import { StyleSheet, Text, View } from "react-native";
import React from "react";

const VoiceFile = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>
        Voice file will be showed soon!
      </Text>
    </View>
  );
};

export default VoiceFile;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 200,
  },
});
