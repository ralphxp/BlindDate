import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useRef } from "react";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import { Picker } from "@react-native-picker/picker";
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
import DropDownPicker from "react-native-dropdown-picker";
import Constants from "expo-constants";

const StepForm = () => {
  const [steps, setSteps] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [selectedGender, setSelectedGender] = useState();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "weiblich", value: "weiblich" },
    { label: "männlich", value: "männlich" },
    { label: "diverse", value: "diverse" },
  ]);

  const changeStep = () => {
    setSteps(steps + 1);
  };

  let [fontsLoaded] = useFonts({
    Rubik_500Medium,
    Rubik_700Bold,
    Rubik_400Regular,
  });
  return (
    <LayoutWrapper>
      {fontsLoaded && (
        <View className="w-full h-full items-center">
          <Image
            source={require("../assets/images/blinddate.png")}
            className="w-[118px] h-[118px]"
          />
          {steps == 0 && (
            <View className="absolute w-full h-full justify-center items-center">
              <Text
                style={{ fontFamily: "Rubik_500Medium" }}
                className="text-white text-[35px] text-center px-[64px]"
              >
                Lass uns herausfinden wer du bist
              </Text>

              <TouchableOpacity
                onPress={changeStep}
                className="rounded-[10px] bg-white px-[48px] py-[15px] shadow-lg absolute bottom-[50px]"
              >
                <Text
                  className="text-[#EF5E1D] text-[25px]"
                  style={{ fontFamily: "Rubik_700Bold" }}
                >
                  Weiter
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {steps == 1 && (
            <View className="absolute w-full h-full justify-center items-center">
              <Text
                style={{ fontFamily: "Rubik_500Medium" }}
                className="text-white text-[35px] text-center px-[50px]"
              >
                Dein Name ist?
              </Text>
              <TextInput
                onChangeText={setName}
                placeholderTextColor="#fff"
                keyboardType="default"
                style={{ fontFamily: "Rubik_400Regular" }}
                require
                className="mt-[45px] px-[5px] text-[30px] text-white bg-transparent focus:outline-none border-none border-b-2 border-b-white w-[60%] placeholder-red-300"
              />
              {name !== "" && (
                <TouchableOpacity
                  onPress={changeStep}
                  className="rounded-[10px] bg-white px-[48px] py-[15px] shadow-lg absolute bottom-[50px] disabled:bg-slate-400"
                >
                  <Text
                    className="text-[#EF5E1D] text-[25px]"
                    style={{ fontFamily: "Rubik_700Bold" }}
                  >
                    Weiter
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          )}
          {steps == 2 && (
            <View className="absolute w-full h-full justify-center items-center">
              <Text
                style={{ fontFamily: "Rubik_500Medium" }}
                className="text-white text-[35px] text-center px-[50px]"
              >
                Wie alt bist du?
              </Text>
              <TextInput
                onChangeText={setAge}
                placeholderTextColor="#fff"
                keyboardType="number-pad"
                style={{ fontFamily: "Rubik_400Regular" }}
                require
                className="mt-[45px] px-[5px] text-[30px] text-white bg-transparent focus:outline-none border-none border-b-2 border-b-white w-[60%] placeholder-red-300"
              />
              {age !== "" && (
                <TouchableOpacity
                  onPress={changeStep}
                  className="rounded-[10px] bg-white px-[48px] py-[15px] shadow-lg absolute bottom-[50px] disabled:bg-slate-400"
                >
                  <Text
                    className="text-[#EF5E1D] text-[25px]"
                    style={{ fontFamily: "Rubik_700Bold" }}
                  >
                    Weiter
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          )}
          {steps == 3 && (
            <View className="absolute w-full h-full justify-center items-center">
              <Text
                style={{ fontFamily: "Rubik_500Medium" }}
                className="text-white text-[35px] text-center px-[30px]"
              >
                Dein Geschlecht?
              </Text>

              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue && setSelectedGender}
                setItems={setItems}
                className="bg-black"
                style={{
                  backgroundColor: "transparent",
                }}
                containerStyle={{
                  backgroundColor: "transparent",
                  width: "65%",
                  borderWidth: "none",
                }}
                textStyle={{
                  fontSize: 30,
                  color: "white",
                  backgroundColor: "transparent",
                }}
                labelStyle={{
                  fontWeight: "bold",
                  backgroundColor: "transparent",
                }}
              />
              {selectedGender && (
                <TouchableOpacity
                  onPress={changeStep}
                  className="rounded-[10px] bg-white px-[48px] py-[15px] shadow-lg absolute bottom-[50px] disabled:bg-slate-400"
                >
                  <Text
                    className="text-[#EF5E1D] text-[25px]"
                    style={{ fontFamily: "Rubik_700Bold" }}
                  >
                    Weiter
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      )}
    </LayoutWrapper>
  );
};

export default StepForm;
