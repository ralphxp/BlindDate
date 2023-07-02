import { View, Text, Dimensions } from "react-native";
import React from "react";
import Svg, {
  Defs,
  RadialGradient,
  Stop,
  Rect,
  Circle,
} from "react-native-svg";
import Header from "../Header/Header";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const LayoutWrapper = ({ children, navigation }) => {
  return (
    <View
      className={`relative flex justify-center items-center px-5 w-[${windowWidth}px] h-[${windowHeight}px]`}
    >
      <Header />
      {children}
    </View>
  );
};

export default LayoutWrapper;
