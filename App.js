import "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import React, { useState } from "react";
import * as eva from "@eva-design/eva";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <LoginScreen />
    </ApplicationProvider>
  );
}
