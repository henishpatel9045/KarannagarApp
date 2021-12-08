import "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import React from "react";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./app/navigation/AuthNavigation";

import Screen from "./app/components/Screen";

export default function App() {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Screen>
          <AuthNavigation />
        </Screen>
      </ApplicationProvider>
    </NavigationContainer>
  );
}
