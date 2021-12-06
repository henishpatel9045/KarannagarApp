import { ApplicationProvider } from "@ui-kitten/components";
import React from "react";
import * as eva from "@eva-design/eva";

import EmergencyScreen from "./app/screens/EmergencyScreen";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Screen>
        <EmergencyScreen />
      </Screen>
    </ApplicationProvider>
  );
}
