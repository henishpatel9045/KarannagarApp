import "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import React, { useState } from "react";
import * as eva from "@eva-design/eva";

import Screen from "./app/components/Screen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AuthNavigation from "./app/navigation/AuthNavigation";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthNavigation />
    </ApplicationProvider>
  );
}
