import * as React from "react";
import Svg, { G, Circle, Defs, ClipPath, Path } from "react-native-svg";

function VideoIconSvgComponent(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_540_8434)">
        <Circle opacity={0.3} cx={17} cy={17} r={17} fill="#fff" />
        <Circle cx={17} cy={17} r={6} fill="#FD282B" />
      </G>
      <Defs>
        <ClipPath id="clip0_540_8434">
          <Path fill="#fff" d="M0 0H34V34H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default VideoIconSvgComponent;
