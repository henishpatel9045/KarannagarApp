import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../configs/colors";

export default function SocialMediaIcon({ name, ...otherProps }) {
  return (
    <TouchableOpacity style={[styles.container, otherProps.style]}>
      <MaterialCommunityIcons name={name} size={25} color={colors.medium} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.medium,
    borderWidth: 3,
    backgroundColor: colors.gray,
    borderRadius: 10,
  },
});
