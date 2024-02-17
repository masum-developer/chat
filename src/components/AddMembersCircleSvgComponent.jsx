import React from "react";
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  Filter,
  FeFlood,
  FeGaussianBlur,
  FeComposite,
  FeBlend,
} from "react-native-svg";

const AddMembersCircleSvgComponent = () => {
  return (
    <Svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx="4.70628"
        cy="4.88231"
        r="3.55882"
        fill="#BDBDBD"
        stroke="white"
      />
    </Svg>
  );
};

export default AddMembersCircleSvgComponent;
