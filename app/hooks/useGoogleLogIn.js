import { useState, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

export default () => {
  const [loading, setloading] = useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    // expoClientId:
    //   "451510403937-d5ibi7lg91uig4iqflq9ccr6fpfihcbq.apps.googleusercontent.com",
    // iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    androidClientId:
      "451510403937-t260tf27sq32tqljhmmeppr3rvcggecq.apps.googleusercontent.com",
    // webClientId:
    //   "451510403937-d5ibi7lg91uig4iqflq9ccr6fpfihcbq.apps.googleusercontent.com",
  });

  const fetchUserInfo = async (token) => {
    setloading(true);
    const data = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => res.json());
    setloading(false);

    return data;
  };

  const logIn = () => promptAsync();

  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);
  // useEffect(() => {
  //   if (response?.type === "success") {
  //     const { authentication } = response;
  //   }
  // }, [response]);

  // if (accessToken) fetchUserInfo(accessToken);

  return { logIn, request, fetchUserInfo, loading };
};
