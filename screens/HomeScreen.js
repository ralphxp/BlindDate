import React, { useEffect, useState, useCallback } from "react";
import { View, Image } from "react-native";
import { Bell } from "phosphor-react-native";
import Svg, { Circle } from "react-native-svg";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
/* import { getAuth, onAuthStateChanged } from "firebase/auth"; */
/* import firebase from "firebase/compat/app"; */
/* import { initializeApp } from "firebase/app"; */
/* import { firebaseConfig } from "../firebase"; */
import AsyncStorage from "@react-native-async-storage/async-storage";
/* import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native"; */

const HomeScreen = ({ navigation }) => {
  /* console.log(firebaseConfig); */
  /* const app = firebase.initializeApp(firebaseConfig); */

  useEffect(() => {
    /* const auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    }); */
    /* console.log("Auth: ", auth); */
    setTimeout(() => {
      /* onAuthStateChanged(auth, (user) => {
        if (user != null) {
          console.log("USER:", user);
          navigation.navigate("StepForm");
        } else {
          navigation.navigate("Outh");
        }
      }); 
      */
      navigation.navigate("Dates");
    }, 1000);
  }, []);

  return (
    <LayoutWrapper navigation={navigation}>
      <View className="flex flex-col items-center justify-center w-full h-full">
        <Image
          source={require("../assets/images/blinddate_white_single.png")}
          className="w-[225px] h-[225px]"
        />
      </View>
    </LayoutWrapper>
  );
};

export default HomeScreen;
