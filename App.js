import "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import React, { useState } from "react";
import * as eva from "@eva-design/eva";
import { LogBox } from "react-native";
import Screen from "./app/components/Screen";
import { useNetInfo } from "@react-native-community/netinfo";

import NetworkError from "./app/components/NetworkError";
import AuthNavigation from "./app/navigation/AuthNavigation";
import { NavigationContainer } from "@react-navigation/native";
import AuthContext from "./app/auth/context";

export default function App() {
  const [user, setUser] = useState({});
  LogBox.ignoreLogs(["Setting a timer"]);
  const netInfo = useNetInfo();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {netInfo.isInternetReachable === false ? (
        <NetworkError />
      ) : (
        <AuthContext.Provider value={{ user, setUser }}>
          <Screen>
            <NavigationContainer>
              <AuthNavigation />
            </NavigationContainer>
          </Screen>
        </AuthContext.Provider>
      )}
    </ApplicationProvider>
  );
}
