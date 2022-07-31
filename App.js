import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <View style={tw`bg-white flex items-center justify-center h-full`}>
      <Header />
      <Text>Main</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
