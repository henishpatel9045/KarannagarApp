import { useContext, useState } from "react";
import AuthContext from "../auth/context";
import useStorage from "../auth/useStorage";
import useGoogleLogIn from "./useGoogleLogIn";

export default (setFunction) => {
  const { setcurrUser } = useContext(AuthContext);
  const { logIn, fetchUserInfo } = useGoogleLogIn();
  const [error, setError] = useState();

  const authPopUp = () => {
    logIn().then((res) => {
      if (res.error) setError(res.errorCode);
      else if (res.type === "success") {
        fetchUserInfo(res.authentication.accessToken).then((res) => {
          setFunction(res);
          setcurrUser(res);
        });
      }
    });
  };

  return { authPopUp, error };
};
