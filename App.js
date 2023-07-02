import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import StepForm from "./screens/StepForm";
import Outh from "./screens/Outh";
import Dashboard from "./screens/Dashboard";
import Dates from "./screens/Navigation/Dates";
import Notification from "./screens/User/Notification";
import Settings from "./screens/User/Settings";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Dates"
            component={Dates}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="StepForm"
            component={StepForm}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Outh"
            component={Outh}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default App;
