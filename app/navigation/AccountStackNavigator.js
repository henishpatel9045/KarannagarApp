import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import AccountScreen from "../screens/AccountScreen";
import AnnouncementsDeleteScreen from "../screens/AnnouncementsDeleteScreen";
import EmergencieDeleteScreen from "../screens/EmergencieDeleteScreen";
import PollDeleteScreen from "../screens/PollDeleteScreen";

export default function AccountStackNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "UserAnnouncements",
          headerStatusBarHeight: -10,
        }}
        name="UserAnn"
        component={AnnouncementsDeleteScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "UserEmergencies",
          headerStatusBarHeight: -10,
        }}
        name="UserEmer"
        component={EmergencieDeleteScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "UserPolls",
          headerStatusBarHeight: -10,
        }}
        name="UserPolls"
        component={PollDeleteScreen}
      />
    </Stack.Navigator>
  );
}
