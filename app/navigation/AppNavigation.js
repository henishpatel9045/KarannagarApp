import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AnnouncementScreen from "../screens/AnnouncementScreen";
import EmergencyScreen from "../screens/EmergencyScreen";
import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";
import colors from "../configs/colors";
import AccountStackNavigator from "./AccountStackNavigator";
import DashboardNavigation from "./DashboardNavigation";
import PollNavigation from "./PollNavigation";

export default function AppNavigation() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator shifting barStyle={{}}>
      <Tab.Screen
        name="DashboardTab"
        component={DashboardNavigation}
        options={{
          title: "Dashboard",
          tabBarColor: "tomato",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Emergencies"
        component={EmergencyScreen}
        options={{
          tabBarColor: colors.primary,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="fire" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Announcements"
        component={AnnouncementScreen}
        options={{
          tabBarColor: "rgba(250, 0, 0, 0.8)",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Polls"
        component={PollNavigation}
        options={{
          tabBarColor: "rgb(0, 100, 180)",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="poll" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackNavigator}
        options={{
          tabBarColor: "rgba(0,0,250, 0.8)",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
