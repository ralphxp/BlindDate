import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import StepForm from "./screens/StepForm";
import Outh from "./screens/Outh";
import Dashboard from "./screens/Dashboard";
import Dates from "./screens/Navigation/Dates";
import Notification from "./screens/User/Notification";
import Settings from "./screens/User/Settings";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />

          <Tab.Screen
            name="Dates"
            component={Dates}
            options={{ headerShown: false }}
          />

          <Tab.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />

          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />

          <Tab.Screen
            name="StepForm"
            component={StepForm}
            options={{ headerShown: false }}
          />

          <Tab.Screen
            name="Outh"
            component={Outh}
            options={{ headerShown: false }}
          />

          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default App;
