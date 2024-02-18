import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function CloseIconSvgComponent(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G opacity={0.15} filter="url(#filter0_b_529_3335)">
        <Circle cx={16} cy={16} r={16} fill="#000" />
      </G>
      <Path
        d="M20.48 12.16l-8.32 8.32M20.48 20.48l-8.32-8.32"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Defs></Defs>
    </Svg>
  )
}

export default CloseIconSvgComponent