import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function PlusCircle(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#clip0_538_4107)"
        stroke="#17855F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
      >
        <Path d="M7.999 14.667a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333zM8 5.334v5.333M5.332 8h5.333" />
      </G>
      <Defs>
        <ClipPath id="clip0_538_4107">
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PlusCircle;
