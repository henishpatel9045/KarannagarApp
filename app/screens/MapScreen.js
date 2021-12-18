import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getEmergencies } from "../api/firebase";
import useApiRef from "../hooks/useApiRef";
import LoadingSceen from "./LoadingSceen";

export default function MapScreen() {
  const { data, loading, request } = useApiRef(getEmergencies);
  const [coords, setcoords] = useState([]);
  useEffect(() => {
    request();
    data.data?.forEach((element) => {
      setcoords([...coords, element.location]);
    });
  }, []);

  console.log(coords);

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 23.270122,
        longitude: 72.3787,
        latitudeDelta: 0.029,
        longitudeDelta: 0.025,
      }}
    >
      {!loading &&
        coords.map((element, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: element.latitude,
              longitude: element.longitude,
            }}
          />
        ))}
      {coords.map((item, index) => (
        <Marker key={index} coordinate={item} />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({});
