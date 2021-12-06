import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function IconDetail({ Pack, name, size, color, text, style }) {
  return (
    <View style={[styles.container, style]}>
      <Pack name={name} size={size} color={color} style={styles.icon} />
      <Text style={[styles.title, { color: color, textShadowColor: color }]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    elevation: 5,
  },
  title: {
    textShadowRadius: 1,
  },
});
