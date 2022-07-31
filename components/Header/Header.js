import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import HeaderWrapper from "./HeaderWrapper";

const Header = () => {
  return (
    <HeaderWrapper>
      <Text>Header</Text>
    </HeaderWrapper>
  );
};

export default Header;
