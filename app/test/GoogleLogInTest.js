import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import { ResponseType } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { Button } from "react-native";
import firebaseConfig from "../configs/firebaseConfig";

initializeApp(firebaseConfig);

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLogInTest() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "451510403937-d5ibi7lg91uig4iqflq9ccr6fpfihcbq.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const credential = provider.credential(id_token);
      console.log("Id Token: ", id_token, "\ncredentials: ", credential);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
