import { useState, useEffect } from "react";
import useGoogleLogIn from "./useGoogleLogIn";

export default (setFunction) => {
  const { logIn, fetchUserInfo } = useGoogleLogIn();
  const [error, setError] = useState();

  const authPopUp = () => {
    logIn().then((res) => {
      if (res.error) setError(res.errorCode);
      fetchUserInfo(res.authentication.accessToken).then((res) => {
        setFunction(res);
      });
    });
  };

  return { authPopUp, error };
};
