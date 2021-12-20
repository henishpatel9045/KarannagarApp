import { useState } from "react";
import { isUserRegistered, setUsers } from "../api/firebase";
import useGetLogInUser from "./useGetLogInUser";

export default () => {
  const [user, setUser] = useState();
  const [exists, setexists] = useState(false);
  const { authPopUp } = useGetLogInUser(setUser);
  const LoginPopUp = () => authPopUp();

  isUserRegistered(user?.email).then((res) => {
    setexists(res);
    if (user && res) {
      console.log("User Already Exist", user);
    } else if (user) {
      console.log("New User", user);
      setUsers(user).then((res) => console.log(res));
    }
  });

  return { user, LoginPopUp, exists };
};
