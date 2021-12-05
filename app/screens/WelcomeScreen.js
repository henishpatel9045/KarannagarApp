import React from "react";
import { StyleSheet, Image } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import colors from "../configs/colors";

export default function WelcomeScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.bgImage} source={require("../assets/loginbg.png")} />
      <Layout level="1">
        <Text style={styles.text}>KarannagarApp</Text>
      </Layout>
      <Layout level="2" style={styles.btns}>
        <AppButton title="LogIn" width="100%" size={18} />
        <AppButton title="Register" width="100%" size={18} color="#6c63ff" />
      </Layout>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    top: 95,
  },
  text: {
    marginHorizontal: 8,
    fontSize: 28,
    color: colors.dark,
    top: 50,
    fontWeight: "bold",
    textShadowColor: colors.dark,
    textShadowRadius: 5,
  },
  btns: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  loginBtn: {
    backgroundColor: "tomato",
    borderRadius: 0,
    height: 70,
  },
  registerBtn: {
    borderRadius: 0,
    height: 70,
  },
});
