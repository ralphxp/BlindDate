import React, { useEffect, useState, useCallback } from "react";
import { View, Image } from "react-native";
import { Bell } from "phosphor-react-native";
import Svg, { Circle } from "react-native-svg";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import { getData } from "../lib/storageData";

let account;

const HomeScreen = ({ navigation }) => {
  const [userId, setUserId] = useState("test");

  const fetchUser = useCallback(async () => {
    let response = await getData("@firebase_uid");
    setUserId(response);
  }, []);

  useEffect(() => {
    fetchUser();
    console.log("test", userId);
    setTimeout(() => {
      navigation.navigate("Outh");
    }, 5000);
  }),
    [fetchUser];

  return (
    <LayoutWrapper>
      {!account && (
        <View className="flex flex-col items-center">
          <Image
            source={require("../assets/images/blinddate_white_single.png")}
            className="w-[225px] h-[225px]"
          />
        </View>
      )}
    </LayoutWrapper>
  );
};

export default HomeScreen;
