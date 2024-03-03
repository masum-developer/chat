import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PlusCircleSvgComponent(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#clip0_403_2472)"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M7 12.833A5.833 5.833 0 107 1.167a5.833 5.833 0 000 11.666zM7 4.667v4.666M4.667 7h4.666" />
      </G>
      <Defs>
        <ClipPath id="clip0_403_2472">
          <Path fill="#fff" d="M0 0H14V14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PlusCircleSvgComponent
