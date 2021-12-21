import { useState } from "react";
import { isUserRegistered, setUsers } from "../api/firebase";
import useStorage from "../auth/useStorage";
import useGetLogInUser from "./useGetLogInUser";

export default () => {
  const { setUser } = useStorage();
  const [exists, setexists] = useState(false);
  const { authPopUp, error } = useGetLogInUser(setUser);
  const LoginPopUp = () => authPopUp();

  if (error) console.log(error);

  isUserRegistered(user?.email).then((res) => {
    setexists(res);
    if (user && res) {
      console.log("User Already Exist");
    } else if (user) {
      console.log("New User");
      setUser(user);
    }
  });

  return { user, LoginPopUp, exists };
};
