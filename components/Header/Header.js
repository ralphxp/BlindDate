import { View, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SlidersHorizontal, Bell } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

const Header = ({ navigation }) => {
  return (
    <View
      className={`fixed top-20 flex flex-row justify-between w-full items-center`}
    >
      <Image
        source={require("../../assets/images/blinddate_orange.png")}
        className="w-[82px] h-[82px]"
      />
      <View className={`flex flex-row gap-3`}>
        <Text onPress={() => navigation.navigate("Notification")}>
          <Bell size={30} color="#343434" weight="bold" />
        </Text>
        <Text onPress={() => navigation.navigate("Settings")}>
          <SlidersHorizontal size={30} color="#343434" weight="bold" />
        </Text>
      </View>
    </View>
  );
};

export default Header;
