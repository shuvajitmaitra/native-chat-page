import * as React from "react";
import Svg, { Path, Text } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 125"
      {...props}
    >
      <Path d="M49.438 84.75c-19.196 0-34.813-15.617-34.813-34.813s15.617-34.813 34.813-34.813S84.25 30.742 84.25 49.938 68.633 84.75 49.438 84.75zm0-66.625c-17.542 0-31.813 14.271-31.813 31.813S31.896 81.75 49.438 81.75 81.25 67.479 81.25 49.938 66.979 18.125 49.438 18.125z" />
      <Path
        transform="rotate(40.1 49.542 50.03)"
        d="M48.039 16.713H51.039V83.33600000000001H48.039z"
      />
      <Text
        y={115}
        fontSize="5px"
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        {"Created by SANB"}
      </Text>
      <Text
        y={120}
        fontSize="5px"
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        {"from the Noun Project"}
      </Text>
    </Svg>
  );
}

export default SvgComponent;
