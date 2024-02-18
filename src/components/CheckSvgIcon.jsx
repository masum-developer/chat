import React from "react";
import Svg, { Rect,Path } from "react-native-svg";

const CheckSvgIcon = () => {
    return (
        <Svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x="1.26465" y="0.5" width="21" height="21" rx="5.5" stroke="#27AC1F" />
            <Path d="M17.999 6L9.74902 14.25L5.99902 10.5" stroke="#27AC1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );
};

export default CheckSvgIcon;
