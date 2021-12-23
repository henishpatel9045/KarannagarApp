import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export default (key, setFunc) => {
  useEffect(() => {
    SecureStore.getItemAsync(key).then((res) => {
      if (res) setFunc(JSON.parse(res));
      else setFunc(null);
    });
  }, []);
};
