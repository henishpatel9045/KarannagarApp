import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
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
          width: width ? width : "100%",
          backgroundColor: color ? color : colors.primary,
          borderRadius: radius && radius,
        },
        style,
      ]}
    >
      {children}
      <View style={{ width: "100%" }}>
        <Text
          style={[
            styles.title,

            {
              alignSelf: "center",
              fontSize: size,
              color: txtColor ? txtColor : "white",
            },
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  title: {
    fontWeight: "bold",
  },
});
