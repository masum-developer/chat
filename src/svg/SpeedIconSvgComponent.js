import * as React from "react"
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg"

function SpeedIconSvgComponent(props) {
    return (
        <Svg
            width={34}
            height={34}
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_540_8428)" fill="#fff">
                <Circle opacity={0.3} cx={17} cy={17} r={17} />
                <Path d="M10.717 12.76v-1.328h3.008V23h-1.472V12.76h-1.536zM21.042 23l-2.08-3.264-2 3.264h-1.52l2.832-4.352-2.832-4.416h1.648l2.08 3.248 1.984-3.248h1.52l-2.816 4.336L22.69 23h-1.648z" />
            </G>
            <Defs>
                <ClipPath id="clip0_540_8428">
                    <Path fill="#fff" d="M0 0H34V34H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SpeedIconSvgComponent
