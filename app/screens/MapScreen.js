import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

export default function MapScreen() {
  return (
    // <View style={{ backgroundColor: "red", flex: 1 }}>
    <MapView
      initialRegion={{
        latitude: 23.270122,
        longitude: 72.3787,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
    // </View>
  );
}

const styles = StyleSheet.create({});
