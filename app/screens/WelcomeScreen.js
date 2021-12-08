import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import colors from "../configs/colors";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.bgImage} source={require("../assets/blue0.jpg")} />

      <Text style={styles.text}>KarannagarApp</Text>

      <Layout level="2" style={styles.btns}>
        <AppButton
          title="LogIn"
          width="100%"
          size={22}
          color="tomato"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title="Register"
          width="100%"
          size={22}
          color={colors.primary}
          onPress={() => navigation.navigate("Register")}
        />
      </Layout>
    </View>
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
    width: "100%",
    zIndex: -2,
  },
  text: {
    color: "#ededed",
    fontSize: 32,
    fontWeight: "bold",
    marginHorizontal: 8,
    position: "absolute",
    textShadowColor: "white",
    textShadowRadius: 2,
    top: 50,
  },
  btns: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  loginBtn: {},
  registerBtn: {},
});
