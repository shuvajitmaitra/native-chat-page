import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={19}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.699 5.952h2.32M4.806 16.778h8.105c2.134 0 2.985-1.307 3.085-2.9L16.4 7.49a2.904 2.904 0 00-2.9-3.085 1.27 1.27 0 01-1.122-.688l-.557-1.122c-.355-.703-1.283-1.283-2.072-1.283h-1.77c-.797 0-1.725.58-2.081 1.283L5.34 3.717a1.27 1.27 0 01-1.121.688 2.902 2.902 0 00-2.9 3.085l.402 6.388c.093 1.593.951 2.9 3.085 2.9z"
        stroke="#474748"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.857 13.686a2.518 2.518 0 002.513-2.514A2.518 2.518 0 008.857 8.66a2.518 2.518 0 00-2.513 2.513 2.518 2.518 0 002.513 2.514z"
        stroke="#474748"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
