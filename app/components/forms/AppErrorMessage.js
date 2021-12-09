import React from "react";
import { Text } from "react-native";

export default function AppErrorMessage({ error, visible }) {
  return visible && error ? (
    <Text style={{ color: "red" }}>{error}</Text>
  ) : null;
}
