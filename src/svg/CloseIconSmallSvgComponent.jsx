import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function CloseIconSmallSvgComponent(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_b_693_13362)">
        <Circle cx={14} cy={14} r={14} fill="#000" fillOpacity={0.1} />
      </G>
      <Path
        d="M17.92 10.64l-7.28 7.28M17.922 17.92l-7.28-7.28"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Defs></Defs>
    </Svg>
  );
}

export default CloseIconSmallSvgComponent;
