import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BarSmallIconSvgComponent(props) {
  return (
    <Svg
      width={22}
      height={18}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1 17L21 1" stroke="#C5C5C5" />
    </Svg>
  );
}

export default BarSmallIconSvgComponent;
