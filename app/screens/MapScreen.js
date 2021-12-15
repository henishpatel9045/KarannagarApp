import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getEmergencies } from "../api/firebase";
import useApiRef from "../hooks/useApiRef";
import LoadingSceen from "./LoadingSceen";

export default function MapScreen() {
  const { data, loading, request } = useApiRef(getEmergencies);
  useEffect(() => {
    request();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSceen />
      ) : (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 23.270122,
            longitude: 72.3787,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {data.data.array.forEach((item, index) =>
            console.log(
              index,
              "=> ",
              item.location,
              " ",
              item.title,
              item.firstName
            )
          )}
        </MapView>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
