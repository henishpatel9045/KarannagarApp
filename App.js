import "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import React, { useState } from "react";
import { Text } from "react-native";
import * as eva from "@eva-design/eva";

import Screen from "./app/components/Screen";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./app/navigation/TabNavigation";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Screen>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </Screen>
    </ApplicationProvider>
  );
}
