import "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import React, { useState } from "react";
import * as eva from "@eva-design/eva";

import Screen from "./app/components/Screen";
import MapScreen from "./app/screens/MapScreen";
import AnnouncementScreen from "./app/screens/AnnouncementScreen";
import DashboardScreen from "./app/screens/DashboardScreen";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Screen>
        <DashboardScreen />
      </Screen>
    </ApplicationProvider>
  );
}
