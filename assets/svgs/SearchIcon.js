import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SearchIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.167 16.667a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM15.775 17.242c.442 1.333 1.45 1.466 2.225.3.708-1.067.242-1.942-1.042-1.942-.95-.008-1.483.733-1.183 1.642z"
        stroke="#666"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SearchIcon;
