import * as React from "react";
import Svg, { Path } from "react-native-svg";

function RightArrowLong(props) {
  return (
    <Svg
      width={24}
      height={20}
      viewBox="0 0 22 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.354 4.354a.5.5 0 000-.708L18.172.464a.5.5 0 10-.707.708L20.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h21v-1H0v1z"
        fill="#0B2A46"
      />
    </Svg>
  );
}

export default RightArrowLong;
