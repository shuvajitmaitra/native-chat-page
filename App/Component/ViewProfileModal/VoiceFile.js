import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WaveForm from 'react-native-audiowaveform';

const VoiceFile = () => {
  return (
    <View style={styles.voiceFileContainer}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>
        Voice file will be showed soon!
      </Text>

<WaveForm 
    source={require('../../../assets/audio/song.mp3')}  
    waveFormStyle={{waveColor:'red', scrubColor:'white'}}
>
</WaveForm>
    </View>
  );
};

export default VoiceFile;

const styles = StyleSheet.create({
  voiceFileContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 200,
  },
});
