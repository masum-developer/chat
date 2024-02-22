import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SelectCircleSvgComponent(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12.5} cy={12.5} r={12.5} fill="#fff" />
      <Path
        d="M19.667 8l-9.166 9.167L6.334 13"
        stroke="#27AC1F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SelectCircleSvgComponent;
