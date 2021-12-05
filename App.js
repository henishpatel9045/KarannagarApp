import React from "react";
import { StyleSheet, Image } from "react-native";
import {
  ApplicationProvider,
  Button,
  Layout,
  Text,
  Divider,
} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import Screen from "./app/components/Screen";
import AppCard from "./app/components/AppCard";
import AnnouncementScreen from "./app/screens/AnnouncementScreen";
import AppLink from "./app/components/AppLink";
import AppText from "./app/components/AppText";
import AnnouncementEditScreen from "./app/screens/AnnouncementEditScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Screen>
        <WelcomeScreen />
      </Screen>
    </ApplicationProvider>
  );
}
