import "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import React, { useState } from "react";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./app/navigation/AuthNavigation";
import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";

import colors from "./app/configs/colors";
import Screen from "./app/components/Screen";
import Input from "./app/components/Input";

export default function App() {
  const [passwordVisible, setpasswordVisible] = useState(false);
  const icon = (name) => <Ionicons name={name} size={20} color={colors.dark} />;
  const passicon = () => (
    <TouchableHighlight
      onPress={() => setpasswordVisible(!passwordVisible)}
      underlayColor={"#ededed"}
      style={{ padding: 3, borderRadius: 20 }}
    >
      {passwordVisible ? icon("eye-off") : icon("eye")}
    </TouchableHighlight>
  );
  return (
    <Screen style={{ alignItems: "center" }}>
      <Input
        placeholder="Username"
        width="95%"
        radius={50}
        leftComponent={icon("person")}
        rightComponent={passicon()}
      />
    </Screen>
  );
}
