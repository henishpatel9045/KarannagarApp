import "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import React, { useState } from "react";
import * as eva from "@eva-design/eva";

import Screen from "./app/components/Screen";
import AnnouncementsDeleteScreen from "./app/screens/AnnouncementsDeleteScreen";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Screen>
        <AnnouncementsDeleteScreen />
      </Screen>
    </ApplicationProvider>
  );
}
