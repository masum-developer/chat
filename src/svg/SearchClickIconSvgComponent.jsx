import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SearchClickIconSvgComponent(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1295_6818)">
        <Path
          d="M16.499 16.5l-1.5-1.5m-6.375.75a7.126 7.126 0 100-14.252 7.126 7.126 0 000 14.252v0z"
          stroke="#546A7E"
          strokeWidth={1.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1295_6818">
          <Path fill="#fff" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SearchClickIconSvgComponent