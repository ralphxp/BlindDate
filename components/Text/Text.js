import { StyleSheet } from "react-native";
import { React } from "react";
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

module.exports = class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(Rubik_900Black);
    return <Text style={styles.defaultText}>{this.props.children}</Text>;
  }
};

let [fontsLoaded] = useFonts({
  Rubik_900Black,
});

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: "Rubik_900Black",
  },
});

export default Text;
