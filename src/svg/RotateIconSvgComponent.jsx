import * as React from "react";
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg";

function RotateIconSvgComponent(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_540_8431)">
        <Circle opacity={0.3} cx={17} cy={17} r={17} fill="#fff" />
        <Path
          d="M21.167 22.729A7.083 7.083 0 0017 9.917h-.416M17 24.084a7.083 7.083 0 01-4.166-12.813m3.333 14.396L17.834 24l-1.667-1.666m1.667-10.667L16.167 10l1.667-1.666"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_540_8431">
          <Path fill="#fff" d="M0 0H34V34H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default RotateIconSvgComponent;
