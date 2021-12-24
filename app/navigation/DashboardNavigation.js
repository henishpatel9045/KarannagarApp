import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AnnouncementEditScreen from "../screens/AnnouncementEditScreen";
import DashboardScreen from "../screens/DashboardScreen";
import PollEditScreen from "../screens/PollEditScreen";

export default function DashboardNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="AddAnnouncement" component={AnnouncementEditScreen} />
      <Stack.Screen name="AddPoll" component={PollEditScreen} />
    </Stack.Navigator>
  );
}
