import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RightArrowSvgComponent(props) {
  return (
    <Svg
      width={10}
      height={8}
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.215.965L9.25 4 6.215 7.035M.75 4h8.415"
        stroke="#0B2A46"
        strokeWidth={1.3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default RightArrowSvgComponent
