import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PollListScreen from "../screens/PollListScreen";
import PollScreen from "../screens/PollScreen";

export default function PollNavigation({ route, navigation }) {
  const Stack = createStackNavigator();

  if (route.forward) {
    navigation.navigate("PollResponse");
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Poll" component={PollListScreen} />
      <Stack.Screen name="PollResponse" component={PollScreen} />
    </Stack.Navigator>
  );
}
