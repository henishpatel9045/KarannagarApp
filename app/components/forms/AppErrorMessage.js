import { useFormikContext } from "formik";
import React from "react";
import { View, Text } from "react-native";

export default function AppErrorMessage({ error, visible }) {
  return visible && error ? (
    <View>
      <Text style={{ color: "red" }}>{error}</Text>
    </View>
  ) : null;
}
