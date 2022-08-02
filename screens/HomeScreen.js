import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { Bell } from "phosphor-react-native";
import Svg, { Circle } from "react-native-svg";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Welcome");
    }, 5000);
  });

  return (
    <LayoutWrapper>
      <View className="flex flex-col items-center">
        <Image
          source={require("../assets/images/blinddate_white_single.png")}
          className="w-[225px] h-[225px]"
        />
        <View className="flex flex-row mt-[16px]">
          <Svg className="w-[18px] h-[18px] mr-2">
            <Circle cx="9" cy="9" r="9" fill="#EF5E1D" />
          </Svg>
          <Svg className="w-[18px] h-[18px] mr-2">
            <Circle cx="9" cy="9" r="9" fill="#EF5E1D" />
          </Svg>
          <Svg className="w-[18px] h-[18px] mr-2">
            <Circle cx="9" cy="9" r="9" fill="#fff" />
          </Svg>
          <Svg className="w-[18px] h-[18px] mr-2">
            <Circle cx="9" cy="9" r="9" fill="#fff" />
          </Svg>
          <Svg className="w-[18px] h-[18px] mr-2">
            <Circle cx="9" cy="9" r="9" fill="#fff" />
          </Svg>
        </View>
      </View>
    </LayoutWrapper>
  );
};

export default HomeScreen;
