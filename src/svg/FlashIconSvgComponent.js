import * as React from "react";
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg";

function FlashIconSvgComponent(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_540_8437)" fill="#fff">
        <Circle opacity={0.3} cx={17} cy={17} r={17} />
        <Path d="M17.833 8.666l-7.422 8.907c-.29.349-.436.523-.438.67a.417.417 0 00.154.33c.115.093.342.093.796.093H17l-.834 6.667 7.422-8.906c.291-.35.436-.524.439-.67a.416.416 0 00-.155-.331c-.115-.093-.342-.093-.796-.093H17l.833-6.667z" />
      </G>
      <Defs>
        <ClipPath id="clip0_540_8437">
          <Path fill="#fff" d="M0 0H34V34H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default FlashIconSvgComponent;
