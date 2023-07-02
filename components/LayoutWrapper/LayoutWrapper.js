import { View, Text, Dimensions, SafeAreaView } from "react-native";
import React from "react";
import Header from "../Header/Header";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const LayoutWrapper = ({ children, navigation }) => {
  return (
    <SafeAreaView
      className={`flex justify-center items-center px-5 pt-5 w-[${windowWidth}px] h-[${windowHeight}px]`}
    >
      <Header navigation={navigation} />
      {children}
    </SafeAreaView>
  );
};

export default LayoutWrapper;
