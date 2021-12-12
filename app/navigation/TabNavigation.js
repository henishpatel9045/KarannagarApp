import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen";
import AnnouncementScreen from "../screens/AnnouncementScreen";
import EmergencyScreen from "../screens/EmergencyScreen";
import PollScreen from "../screens/PollScreen";
import AccountScreen from "../screens/AccountScreen";

export default function TabNavigation() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Emergencies" component={EmergencyScreen} />
      <Tab.Screen name="Announcements" component={AnnouncementScreen} />
      <Tab.Screen name="Polls" component={PollScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
