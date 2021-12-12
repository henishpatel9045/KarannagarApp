import "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import React, { useState } from "react";
import * as eva from "@eva-design/eva";

import Screen from "./app/components/Screen";
import { initializeApp } from "firebase/app";
import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";
import firebaseConfig from "./app/configs/firebaseConfig";
import { getUsers } from "./app/api/firebase";

const db = getFirestore(initializeApp(firebaseConfig));

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Screen></Screen>
    </ApplicationProvider>
  );
}
