import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen";
import AnnouncementScreen from "../screens/AnnouncementScreen";
import EmergencyScreen from "../screens/EmergencyScreen";
import PollScreen from "../screens/PollScreen";
import AccountScreen from "../screens/AccountScreen";
import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";
import colors from "../configs/colors";

export default function TabNavigation() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator shifting>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
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
        component={PollScreen}
        options={{
          tabBarColor: "rgb(0, 100, 180)",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="poll" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
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
