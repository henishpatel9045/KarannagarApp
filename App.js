import { ApplicationProvider } from "@ui-kitten/components";
import React from "react";
import * as eva from "@eva-design/eva";

import Screen from "./app/components/Screen";
import PollResultsScreen from "./app/screens/PollResultsScreen";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Screen>
        <PollResultsScreen />
      </Screen>
    </ApplicationProvider>
  );
}
