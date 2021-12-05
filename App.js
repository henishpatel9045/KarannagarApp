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

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Screen>
        <AppLink text="ClickMe" link={"https://www.flipkart.com/"} />
      </Screen>
    </ApplicationProvider>
  );
}
