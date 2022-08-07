import { View, Text, Dimensions } from "react-native";
import React from "react";
import Svg, {
  Defs,
  RadialGradient,
  Stop,
  Rect,
  Circle,
} from "react-native-svg";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const LayoutWrapper = ({ children }) => {
  return (
    <View
      className={`relative flex justify-center items-center w-[${windowWidth}px] h-[${windowHeight}px]`}
    >
      <Svg
        className={`absolute left-0 top-0 w-[${windowWidth}px] h-[${windowHeight}px]`}
        width={`${windowWidth}px`}
        height={`${windowHeight}px`}
      >
        <Defs>
          <RadialGradient
            id="svg-fill-radial__tinder"
            rx="250"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0%" stopColor="#F4A80F" />
            <Stop offset="100%" stopColor="#EF671D" />
          </RadialGradient>
        </Defs>
        <Rect
          width={`${windowWidth}px`}
          height={`${windowHeight}px`}
          fill="url(#svg-fill-radial__tinder)"
        />
      </Svg>
      {children}
    </View>
  );
};

export default LayoutWrapper;
