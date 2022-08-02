import { View, Text } from "react-native";
import React from "react";
import Svg, {
  Defs,
  RadialGradient,
  Stop,
  Rect,
  Circle,
} from "react-native-svg";

const LayoutWrapper = ({ children }) => {
  return (
    <View className="relative flex justify-center items-center w-full h-full">
      <Svg
        className="absolute left-0 w-full h-full"
        focusable="false"
        aria-hidden="true"
        role="presentation"
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
        <Rect width="100%" height="100%" fill="url(#svg-fill-radial__tinder)" />
      </Svg>
      {children}
    </View>
  );
};

export default LayoutWrapper;
