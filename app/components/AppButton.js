import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../configs/colors";

export default function AppButton({
  title,
  onPress,
  width,
  size,
  color,
  radius,
  children,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          width: width,
          backgroundColor: color ? color : colors.primary,
          borderRadius: radius && radius,
        },
      ]}
    >
      {children}
      <Text style={[styles.title, { fontSize: size }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
});
