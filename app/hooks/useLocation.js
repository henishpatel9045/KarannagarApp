import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default () => {
  const [location, setlocation] = useState({});
  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) return;
    const {
      coords: { latitude, longitude },
    } = await Location.getLastKnownPositionAsync();
    setlocation({ latitude, longitude });
    return;
  };

  useEffect(() => {
    getLocation();
  }, []);
  return location;
};
