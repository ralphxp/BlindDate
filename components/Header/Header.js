import { View, Image } from "react-native";
import React from "react";
import { SlidersHorizontal, Bell } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View
      className={`absolute flex flex-row justify-between w-full top-0 items-center`}
    >
      <Image
        source={require("../../assets/images/blinddate_orange.png")}
        className="w-[82px] h-[82px]"
      />
      <View className={`flex flex-row gap-3`}>
        <Bell
          size={30}
          color="#343434"
          weight="bold"
          onPress={navigateTo("Notification")}
        />
        <SlidersHorizontal
          size={30}
          color="#343434"
          weight="bold"
          onPress={navigateTo("Settings")}
        />
      </View>
    </View>
  );
};

export default Header;
