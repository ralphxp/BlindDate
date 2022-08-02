import { View, Imagem, Text, Image } from "react-native";
import React from "react";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  Rubik_800ExtraBold,
  Rubik_900Black,
  Rubik_300Light_Italic,
  Rubik_400Regular_Italic,
  Rubik_500Medium_Italic,
  Rubik_600SemiBold_Italic,
  Rubik_700Bold_Italic,
  Rubik_800ExtraBold_Italic,
  Rubik_900Black_Italic,
} from "@expo-google-fonts/rubik";

const Welcome = () => {
  let [fontsLoaded] = useFonts({
    Rubik_500Medium,
  });
  return (
    <LayoutWrapper>
      <View className="w-full h-full items-center">
        <Image
          source={require("../assets/images/blinddate.png")}
          className="w-[118px] h-[118px]"
        />
        <View className="absolute w-full h-full justify-center items-center">
          {fontsLoaded && (
            <Text
              style={{ fontFamily: "Rubik_500Medium" }}
              className="text-white text-[35px] text-center px-[64px]"
            >
              Lass uns herausfinden wer du bist
            </Text>
          )}
        </View>
      </View>
    </LayoutWrapper>
  );
};

export default Welcome;
