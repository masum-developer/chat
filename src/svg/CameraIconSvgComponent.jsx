import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CameraIconSvgComponent(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.735 8.8h3.9M6.873 27h13.624c3.588 0 5.018-2.197 5.187-4.875l.676-10.738A4.88 4.88 0 0021.485 6.2 2.136 2.136 0 0119.6 5.043l-.936-1.885C18.066 1.975 16.506 1 15.18 1h-2.977c-1.339 0-2.899.975-3.497 2.158L7.77 5.043A2.136 2.136 0 015.885 6.2c-2.82 0-5.057 2.379-4.875 5.187l.676 10.738C1.842 24.803 3.286 27 6.873 27z"
        stroke="#666"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.696 21.798a4.233 4.233 0 004.225-4.225 4.233 4.233 0 00-4.225-4.225 4.233 4.233 0 00-4.225 4.225 4.233 4.233 0 004.225 4.225z"
        stroke="#666"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CameraIconSvgComponent;
