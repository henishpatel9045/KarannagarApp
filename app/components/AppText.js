import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";

export default function AppText({ children }) {
  return (
    <View style={styles.container}>
      <Text category="h6" style={{ fontFamily: "Roboto" }}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 13,
    backgroundColor: "white",
    elevation: 5,
    marginHorizontal: 10,
  },
});
