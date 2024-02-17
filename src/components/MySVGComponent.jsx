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

const MySVGComponent = () => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
    <G opacity={0.15}>
      <Circle cx={16} cy={16} r={16} fill="black" />
    </G>
    <Path
      d="M20.4802 12.1599L12.1602 20.4799"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Path
      d="M20.4805 20.4799L12.1605 12.1599"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Defs>
      <Filter
        id="filter0_b_529_3337"
        x={-4}
        y={-4}
        width={40}
        height={40}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <FeFlood floodOpacity={0} result="BackgroundImageFix" />
        <FeGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
        <FeComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_529_3337"
        />
        <FeBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_529_3337"
          result="shape"
        />
      </Filter>
    </Defs>
  </Svg>
);

export default MySVGComponent;
