import * as React from "react"
import Svg, { Ellipse } from "react-native-svg"

function ThreeDotSvgComponent(props) {
  return (
    <Svg
      width={13}
      height={3}
      viewBox="0 0 13 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse
        cx={1.44444}
        cy={1.55556}
        rx={1.44444}
        ry={1.44444}
        transform="rotate(-90 1.444 1.556)"
        fill="#000"
        fillOpacity={0.6}
      />
      <Ellipse
        cx={6.49913}
        cy={1.55556}
        rx={1.44444}
        ry={1.44444}
        transform="rotate(-90 6.5 1.556)"
        fill="#000"
        fillOpacity={0.6}
      />
      <Ellipse
        cx={11.5538}
        cy={1.55556}
        rx={1.44444}
        ry={1.44444}
        transform="rotate(-90 11.554 1.556)"
        fill="#000"
        fillOpacity={0.6}
      />
    </Svg>
  )
}

export default ThreeDotSvgComponent
