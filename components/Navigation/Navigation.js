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
    <View className={`absolute flex justify-center items-center w-full`}>
      <View className={`flex flex-row gap-3`}>
        <Bell
          size={30}
          color="#343434"
          weight="bold"
          onPress={() => navigation.navigate("Details")}
        />
        <SlidersHorizontal
          size={30}
          color="#343434"
          weight="bold"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </View>
  );
};

export default Navigation;
