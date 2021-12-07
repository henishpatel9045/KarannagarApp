import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../configs/colors";

export default function AppButton({
  children,
  color,
  onPress,
  radius,
  size,
  style,
  title,
  txtColor,
  width,
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
        style,
      ]}
    >
      {children}
      <Text
        style={[
          styles.title,
          { fontSize: size, color: txtColor ? txtColor : "white" },
        ]}
      >
        {title}
      </Text>
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
    elevation: 10,
  },
  title: {
    fontWeight: "bold",
  },
});
