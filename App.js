import "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import React, { useState, useEffect } from "react";
import * as eva from "@eva-design/eva";
import { LogBox } from "react-native";

import Screen from "./app/components/Screen";
import useApiRef from "./app/hooks/useApiRef";
import { getAnnouncements, getUsers, setUsers } from "./app/api/firebase";
import { useNetInfo } from "@react-native-community/netinfo";
import NetworkError from "./app/components/NetworkError";
import EmergencieDeleteScreen from "./app/screens/EmergencieDeleteScreen";
import AnnouncementScreen from "./app/screens/AnnouncementScreen";
import EmergencyScreen from "./app/screens/EmergencyScreen";
import PollListScreen from "./app/screens/PollListScreen";
import TabNavigation from "./app/navigation/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import AccountStackNavigator from "./app/navigation/AccountStackNavigator";

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
          <TabNavigation />
        </NavigationContainer>
      </Screen>
    </ApplicationProvider>
  );
}
