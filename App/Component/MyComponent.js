import * as React from "react";
import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";

const MyComponent = () => {
  const [value, setValue] = React.useState("first");

  return (
    <RadioButton.Group
      onValueChange={(newValue) => setValue(newValue)}
      value={value}
    >
      <View style={{ flexDirection: "row-reverse", alignItems: "center" }}>
        <Text>First</Text>
        <RadioButton
          value="first"
          color=""
          style={{ backgroundColor: "green" }}
        />
      </View>
      <View>
        <Text>Second</Text>
        <RadioButton value="second" />
      </View>
    </RadioButton.Group>
  );
};

export default MyComponent;
