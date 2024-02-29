import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BarIconSvgComponent(props) {
  return (
    <Svg
      width={27}
      height={22}
      viewBox="0 0 27 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1 21L26 1" stroke="#C5C5C5" />
    </Svg>
  );
}

export default BarIconSvgComponent;
