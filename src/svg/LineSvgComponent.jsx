import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LineSvgComponent(props) {
  return (
    <Svg
      width={305}
      height={1}
      viewBox="0 0 305 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path stroke="#000" strokeOpacity={0.15} d="M0 0.5L305 0.5" />
    </Svg>
  )
}

export default LineSvgComponent
