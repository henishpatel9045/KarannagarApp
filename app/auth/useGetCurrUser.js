import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export default (key, setFunc) => {
  useEffect(() => {
    SecureStore.getItemAsync(key).then((res) => setFunc(JSON.parse(res)));
  }, []);
};
