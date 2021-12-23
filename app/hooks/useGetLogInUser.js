import { useContext, useState } from "react";
import { isUserRegistered } from "../api/firebase";
import AuthContext from "../auth/context";
import useStorage from "../auth/useStorage";
import useGoogleLogIn from "./useGoogleLogIn";

export default (setFunction) => {
  const { setcurrUser } = useContext(AuthContext);
  const { logIn, fetchUserInfo, loading } = useGoogleLogIn();
  const [error, setError] = useState();

  const authPopUp = () => {
    logIn().then((res) => {
      if (res.error) setError(res.errorCode);
      else if (res.type === "success") {
        fetchUserInfo(res.authentication.accessToken).then((user) => {
          isUserRegistered(user.email).then((exists) => {
            if (exists) {
              setFunction(user);
              setcurrUser(user);
            } else setError("User not registered.");
          });
        });
      }
    });
  };

  return { authPopUp, error, loading };
};
