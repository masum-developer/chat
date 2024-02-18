import * as React from "react";
import Svg, { Path } from "react-native-svg";

function GalleryIconSvgComponent(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.25 27.5h7.5c6.25 0 8.75-2.5 8.75-8.75v-7.5C27.5 5 25 2.5 18.75 2.5h-7.5C5 2.5 2.5 5 2.5 11.25v7.5C2.5 25 5 27.5 11.25 27.5z"
        stroke="#666"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.25 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM3.338 23.688L9.5 19.55c.988-.663 2.413-.588 3.3.175l.413.362c.975.838 2.55.838 3.525 0l5.2-4.462c.975-.838 2.55-.838 3.525 0l2.037 1.75"
        stroke="#666"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default GalleryIconSvgComponent;
