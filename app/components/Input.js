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
  onChangeText,
  onBlur,
  caption,
  color,
  maxLength,
  ...otherProps
}) {
  return (
    <View style={{ width: width }}>
      <View style={[styles.container, { borderRadius: radius ? radius : 200 }]}>
        {leftComponent}
        <TextInput
          maxLength={maxLength}
          style={[style, styles.textBox]}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onBlur={onBlur}
          {...otherProps}
        />
        {rightComponent}
      </View>
      {caption && <View style={[styles.caption]}>{caption}</View>}
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
    overflow: "hidden",
    padding: 10,
    width: "100%",
  },
  textBox: {
    flex: 1,
    marginHorizontal: 10,
  },
  caption: {
    alignSelf: "flex-start",
    marginLeft: 15,
  },
});
