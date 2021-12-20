import { Text, StyleSheet, Image, Dimensions } from "react-native";
import React, { useContext } from "react";
import colors from "../configs/colors";
import SocialMediaIcon from "../components/SocialMediaIcon";
import Screen from "../components/Screen";
import useGoogleLogIn from "../hooks/useGoogleLogIn";
import AuthContext from "../auth/context";

export default function LoginScreen({ navigation }) {
  const authContext = useContext(AuthContext);

  const { logIn, fetchUserInfo } = useGoogleLogIn();
  const handleLogin = () => {
    logIn().then((res) => {
      fetchUserInfo(res.authentication.accessToken).then((res) =>
        authContext.setUser(res)
      );
    });
  };

  return (
    <Screen style={styles.container}>
      <Text style={styles.heading}>Login</Text>
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
        onPress={handleLogin}
      />
      <SocialMediaIcon
        name={"facebook"}
        style={styles.google}
        title="Facebook LogIn"
        onPress={handleLogin}
      />
    </Screen>
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
});
