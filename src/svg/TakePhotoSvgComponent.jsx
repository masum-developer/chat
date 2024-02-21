import * as React from "react";
import Svg, { G, Circle, Defs, ClipPath, Path } from "react-native-svg";

function TakePhotoSvgComponent(props) {
  return (
    <Svg
      width={44}
      height={44}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_540_8425)" fill="#fff">
        <Circle opacity={0.4} cx={22} cy={22} r={22} />
        <Circle opacity={0.5} cx={22} cy={22} r={16} />
      </G>
      <Defs>
        <ClipPath id="clip0_540_8425">
          <Path fill="#fff" d="M0 0H44V44H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default TakePhotoSvgComponent;
