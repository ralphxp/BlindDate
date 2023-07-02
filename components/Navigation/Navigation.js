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

const Navigation = ({ children }) => {
  return (
    <View
      className={`relative flex justify-center items-center w-[${windowWidth}px] h-[${windowHeight}px]`}
    >
      <Image
        source={require("../../assets/images/blinddate.png")}
        className="w-[118px] h-[118px]"
      />
    </View>
  );
};

export default Navigation;
