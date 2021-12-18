import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DevAccountScreen from "../screens/DeveloperArea/DevAccountScreen";
import EmergencieDeleteScreen from "../screens/DeveloperArea/DevEmergencieDeleteScreen";
import DevLogInScreen from "../screens/DeveloperArea/DevLogInScreen";
import PollDeleteScreen from "../screens/DeveloperArea/DevPollDeleteScreen";
import AnnouncementsDeleteScreen from "../screens/DeveloperArea/DevAnnouncementsDeleteScreen";

export default function DeveloperNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DevLoginScreen" component={DevLogInScreen} />
      <Stack.Screen name="AccountScreen" component={DevAccountScreen} />
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
