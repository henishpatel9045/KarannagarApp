import { ApplicationProvider } from "@ui-kitten/components";
import React from "react";
import * as eva from "@eva-design/eva";

import Screen from "./app/components/Screen";
import PollResultsScreen from "./app/screens/PollResultsScreen";
import BarGraph from "./app/components/BarGraph";
import PollStatScreen from "./app/screens/PollStatScreen";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Screen>
        <PollStatScreen />
      </Screen>
    </ApplicationProvider>
  );
}
