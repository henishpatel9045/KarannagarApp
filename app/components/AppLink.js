import React, { useRef } from "react";
import {
  TouchableNativeFeedback,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon, Text } from "@ui-kitten/components";
import * as Linking from "expo-linking";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../configs/colors";

export default function AppLink({ text: title, link }) {
  const zoomIconReference = useRef();
  return (
    <TouchableOpacity
      onPress={() => {
        // Linking.openURL(link);
        // zoomIconReference.current.startAnimation();
      }}
      style={styles.container}
    >
      <Text category="h6" style={styles.title}>
        {title}
      </Text>

      {/* <Icon name="facebook" ref={zoomIconReference} animation="zoom" /> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: colors.primary,
    padding: 10,
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
});
