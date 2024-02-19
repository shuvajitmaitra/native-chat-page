import * as React from "react";
import Svg, { Path } from "react-native-svg";

function EditIcon(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.2 1H6.6C2.6 1 1 2.6 1 6.6v4.8c0 4 1.6 5.6 5.6 5.6h4.8c4 0 5.6-1.6 5.6-5.6V9.8"
        stroke="#666"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.929 2.248c-.984 2.456-3.456 5.8-5.52 7.456l-1.264 1.008c-.16.12-.32.216-.504.288a2.486 2.486 0 00-.768-1.832 2.61 2.61 0 00-1.512-.76c-.128-.008-.256-.016-.384-.008.072-.2.176-.384.312-.536L8.297 6.6c1.656-2.064 5.008-4.552 7.456-5.536a.906.906 0 01.976.2c.24.24.352.608.2.984z"
        stroke="#666"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.647 10.992c0 .704-.272 1.376-.776 1.888-.392.392-.92.664-1.552.744l-1.576.168a1.36 1.36 0 01-1.496-1.504l.168-1.576c.152-1.4 1.32-2.296 2.568-2.32.128-.008.256 0 .384.008a2.61 2.61 0 011.512.76 2.51 2.51 0 01.768 1.832zM12.079 8.984a3.03 3.03 0 00-3.032-3.032"
        stroke="#666"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default EditIcon;
