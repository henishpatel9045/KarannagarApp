import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Divider } from "@ui-kitten/components";
import colors from "../configs/colors";

export default function PollResultCard({ title, subtitle, onPress, style }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>
        <Divider />
        <Text style={styles.subtitle}>Majority Answer: {subtitle}</Text>
      </View>
      <TouchableOpacity style={styles.right} onPress={onPress}>
        <View style={{ justifyContent: "center" }}>
          <MaterialIcons name="arrow-forward-ios" size={25} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: colors.primary,
    flexDirection: "row",
    elevation: 15,
    padding: 15,
  },
  left: {
    flex: 1,
    padding: 5,
    alignSelf: "flex-start",
  },
  right: {
    alignSelf: "flex-end",
    alignItems: "center",
    flexDirection: "column",

    width: "15%",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: { color: "white" },
});
