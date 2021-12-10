import * as firebase from "firebase";
import "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const registration = async () => {
  const [user, setuser] = useState({});
  const auth = getAuth();

  signInWithPopup(auth, provider)
    .then((result) => {
      const credentials = GoogleAuthProvider.credentialFromResult(result);
      const token = credentials.accessToken;
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      const emailerror = error.email;
      alert("Error happened " + errorMessage);
    });
};
