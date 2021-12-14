import "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import React, { useState, useEffect } from "react";
import * as eva from "@eva-design/eva";
import { Text } from "react-native";

import Screen from "./app/components/Screen";
import useApiRef from "./app/hooks/useApiRef";
import { getAnnouncements, getUsers, setUsers } from "./app/api/firebase";
import { useNetInfo } from "@react-native-community/netinfo";
import NetworkError from "./app/components/NetworkError";
import AnnouncementEditScreen from "./app/screens/AnnouncementEditScreen";
import AnnouncementScreen from "./app/screens/AnnouncementScreen";
import PollDeleteScreen from "./app/screens/PollDeleteScreen";

export default function App() {
  const netInfo = useNetInfo();
  const messages = useApiRef(getAnnouncements);
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(messages);
  }, [messages]);
  console.log(data);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {netInfo.isInternetReachable === false ? (
        <NetworkError />
      ) : (
        <Screen>
          <PollDeleteScreen />
        </Screen>
      )}
    </ApplicationProvider>
  );
}
