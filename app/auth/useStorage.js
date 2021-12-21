import * as SecureStore from "expo-secure-store";
import { useState } from "react";

export default () => {
  const [user, setuser] = useState(false);
  const setUser = async (user) => {
    try {
      await SecureStore.setItemAsync("current_user", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (user) => {
    try {
      SecureStore.deleteItemAsync("current_user");
    } catch (error) {
      console.log(error);
    }
  };

  return { setUser, deleteUser, user };
};
