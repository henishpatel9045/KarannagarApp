import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import colors from "../configs/colors";
import SocialMediaIcon from "../components/SocialMediaIcon";
import Screen from "../components/Screen";
import useGetLogInUser from "../hooks/useGetLogInUser";
import useStorage from "../auth/useStorage";
import LottieView from "lottie-react-native";

export default function LoginScreen({ navigation }) {
  const { setUser, user } = useStorage();
  const { authPopUp, error, loading } = useGetLogInUser(setUser);

  return (
    <>
      {user ? (
        <LottieView
          source={require("../assets/animations/loadingSpinner.json")}
          autoPlay
          loop
        />
      ) : (
        <Screen style={styles.container}>
          <Text style={styles.heading}>Login</Text>
          {error && <Text style={styles.error}>{error}</Text>}
          <Image
            source={require("../assets/login.png")}
            width={100}
            height={100}
            style={styles.imagebg}
          />
          <SocialMediaIcon
            name={"google"}
            style={styles.google}
            title={"Google LogIn"}
            onPress={authPopUp}
          />
          <SocialMediaIcon
            name={"facebook"}
            style={styles.google}
            title="Facebook LogIn"
            onPress={authPopUp}
          />
          <TouchableOpacity
            style={styles.footer}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.txt}>Not a user? Register yourself.</Text>
          </TouchableOpacity>
        </Screen>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  heading: {
    color: colors.dark,
    fontSize: 38,
    fontFamily: "Roboto",
    fontWeight: "bold",
    left: 20,
    top: 10,
    textShadowColor: colors.dark,
    textShadowRadius: 3,
  },
  error: {
    color: "red",
    fontSize: 20,
    top: 60,
    fontFamily: "Roboto",
    fontWeight: "bold",
    alignSelf: "center",
  },
  imagebg: {
    alignSelf: "center",
    height: 300,
    marginTop: 80,
    marginBottom: 80,
    width: Dimensions.get("screen").width - 10,
  },
  google: {
    alignSelf: "center",

    width: "80%",
  },
  footer: {
    position: "absolute",
    bottom: 25,
    alignSelf: "center",
  },
  txt: {
    color: "#4267b2",
    fontSize: 20,
    fontWeight: "bold",
  },
});
