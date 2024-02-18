import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LeftArrowIconSvgComponent(props) {
  return (
    <Svg
      width={20}
      height={14}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.57.93L1.5 7l6.07 6.07M18.5 7H1.67"
        stroke="#474748"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LeftArrowIconSvgComponent