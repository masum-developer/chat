import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchIconSvgComponent(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.333 13.333a6 6 0 100-12 6 6 0 000 12zM12.62 13.793c.354 1.067 1.16 1.174 1.78.24.567-.853.194-1.553-.833-1.553-.76-.007-1.186.586-.946 1.313z"
        stroke="#666"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SearchIconSvgComponent