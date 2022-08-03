import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../firebase";
import firebase from "firebase/compat/app";
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
import { storeData } from "../lib/storageData";

const Outh = () => {
  let [fontsLoaded] = useFonts({
    Rubik_500Medium,
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
    setPhoneNumber("");
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        console.log("Credential Result", result.user.uid);
        storeData("@firebase_uid", result.user.uid);
        setCode("");
        Alert.alert("Du wurdest erfolgreich eingelogged");
      })
      .catch((error) => {
        //show an alert in case of error
        alert(error);
      });
  };

  return (
    <LayoutWrapper>
      <View className="w-full h-full items-center">
        <Image
          source={require("../assets/images/blinddate.png")}
          className="w-[118px] h-[118px]"
        />
      </View>
      <View className="absolute w-full h-full justify-center items-center">
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          style={{ margin: 0, backgroundColor: "#000" }}
        />
        {fontsLoaded && (
          <Text
            style={{ fontFamily: "Rubik_500Medium" }}
            className="text-white text-[35px] text-center px-[64px]"
          >
            Verifizieren mit deinem Phone
          </Text>
        )}
        <TextInput
          placeholder="Phone Number With Country code"
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          autoCompleteType="tel"
        />
        <TouchableOpacity onPress={sendVerification}>
          <Text>Verifizieren</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Confirm Code"
          onChangeText={setCode}
          keyboardType="number-pad"
          autoCompleteType="tel"
        />
        <TouchableOpacity onPress={confirmCode}>
          <Text>Verifizieren</Text>
        </TouchableOpacity>
      </View>
    </LayoutWrapper>
  );
};

export default Outh;
