import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export default (key) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    SecureStore.getItemAsync(key).then((res) => setUser(JSON.parse(res)));
  }, []);

  return { user };
};
