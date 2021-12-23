import { useState, useContext } from "react";
import { isUserRegistered, setUsers } from "../api/firebase";
import useStorage from "../auth/useStorage";
import useGoogleLogIn from "./useGoogleLogIn";
import AuthContext from "../auth/context";

export default () => {
  const { setUser } = useStorage();
  const { setcurrUser } = useContext(AuthContext);
  const { logIn, fetchUserInfo } = useGoogleLogIn();
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  const LoginPopUp = async (area, number) => {
    setloading(true);
    await logIn().then((res) => {
      if (res.error) console.log(res.errorCode);
      else if (res.type === "success") {
        fetchUserInfo(res.authentication.accessToken).then((user) => {
          isUserRegistered(user.email).then((exists) => {
            if (!exists) {
              setUsers({ ...user, area: area, phoneNo: number });
              setUser({ ...user, area: area, phoneNo: number });
              setcurrUser({ ...user, area: area, phoneNo: number });
            } else seterror("User already exist.");
          });
        });
      }
    });
    setloading(false);
  };

  if (error) console.log(error);

  return { LoginPopUp, error, loading };
};
