import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DownArroIcon(props) {
  return (
    <Svg
      className="svg-icon"
      style={{
        width: 22,
        height: 21,
        verticalAlign: "middle"
      }}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      overflow="hidden"
      {...props}
    >
      <Path
        d="M507.8 727.728a30.016 30.016 0 01-21.288-8.824L231.104 463.496a30.088 30.088 0 010-42.568 30.088 30.088 0 0142.568 0L507.8 655.056l234.16-234.128a30.088 30.088 0 0142.568 0 30.088 30.088 0 010 42.568L529.08 718.904a30 30 0 01-21.28 8.824z"
        fill="#888"
      />
    </Svg>
  )
}

export default DownArroIcon
