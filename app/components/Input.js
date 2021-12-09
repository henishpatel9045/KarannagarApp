import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "../configs/colors";

export default function Input({
  placeholder,
  style,
  width,
  radius,
  secureTextEntry,
  leftComponent,
  rightComponent,
  ...otherProps
}) {
  return (
    <View
      style={[
        styles.container,
        { width: width, borderRadius: radius ? radius : 200 },
      ]}
    >
      {leftComponent}
      <TextInput
        style={[style, styles.textBox]}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
      />
      {rightComponent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "white",
    elevation: 3,
    marginHorizontal: 10,
    padding: 10,
    width: "100%",
  },
  textBox: {
    flex: 1,
    marginHorizontal: 10,
  },
});
