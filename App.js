import "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import React, { useState } from "react";
import * as eva from "@eva-design/eva";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AuthNavigation from "./app/navigation/AuthNavigation";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthNavigation />
    </ApplicationProvider>
  );
}
