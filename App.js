import "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import React, { useState, useEffect } from "react";
import * as eva from "@eva-design/eva";
import { LogBox } from "react-native";

import Screen from "./app/components/Screen";
import { useNetInfo } from "@react-native-community/netinfo";

import RegisterScreen from "./app/screens/RegisterScreen";
import DashboardScreen from "./app/screens/DashboardScreen";
import AnnouncementScreen from "./app/screens/AnnouncementScreen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./app/navigation/AppNavigation";

export default function App() {
  LogBox.ignoreLogs(["Setting a timer"]);

  const netInfo = useNetInfo();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {/* {netInfo.isInternetReachable === false ? (
        <NetworkError />
      ) : (
        <Screen>
          <EmergencieDeleteScreen />
        </Screen>
      )} */}
      <Screen>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </Screen>
    </ApplicationProvider>
  );
}
