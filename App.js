import "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import React, { useState, useEffect } from "react";
import * as eva from "@eva-design/eva";
import { LogBox } from "react-native";
import Screen from "./app/components/Screen";
import { useNetInfo } from "@react-native-community/netinfo";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./app/navigation/AppNavigation";
import NetworkError from "./app/components/NetworkError";

export default function App() {
  LogBox.ignoreLogs(["Setting a timer"]);
  const netInfo = useNetInfo();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {netInfo.isInternetReachable === false ? (
        <NetworkError />
      ) : (
        <Screen>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </Screen>
      )}
    </ApplicationProvider>
  );
}
