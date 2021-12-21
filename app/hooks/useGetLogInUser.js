import { useState } from "react";
import useStorage from "../auth/useStorage";
import useGoogleLogIn from "./useGoogleLogIn";

export default (setFunction) => {
  const { logIn, fetchUserInfo } = useGoogleLogIn();
  const [error, setError] = useState();

  const authPopUp = () => {
    logIn().then((res) => {
      if (res.error) setError(res.errorCode);
      else if (res.type === "success") {
        fetchUserInfo(res.authentication.accessToken).then((res) => {
          setFunction(res);
        });
      }
    });
  };

  return { authPopUp, error };
};
