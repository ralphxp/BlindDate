import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useRef } from "react";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import { CaretDown, CaretUp } from "phosphor-react-native";
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
import Constants from "expo-constants";

const Settings = () => {
  let [fontsLoaded] = useFonts({
    Rubik_500Medium,
    Rubik_700Bold,
    Rubik_400Regular,
  });

  return (
    <LayoutWrapper>
      {fontsLoaded && (
        <View className="w-full h-full items-center">
          <Text>Settings</Text>
        </View>
      )}
    </LayoutWrapper>
  );
};

export default Settings;
