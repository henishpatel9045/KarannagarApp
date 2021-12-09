import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import colors from "../configs/colors";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/welcome.png")}
        width={100}
        height={100}
        style={styles.bgImage}
      />

      <Text style={styles.text}>KarannagarApp</Text>

      <Layout level="2" style={styles.btns}>
        <AppButton
          title="LogIn"
          width="100%"
          size={22}
          style={styles.loginBtn}
          color="tomato"
          onPress={() => navigation.navigate("Login")}
          radius={50}
        />
        <AppButton
          title="Register"
          width="100%"
          size={22}
          color={colors.primary}
          onPress={() => navigation.navigate("Register")}
          radius={50}
        />
      </Layout>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  bgImage: {
    position: "absolute",
    top: 130,
    height: 300,
    width: Dimensions.get("screen").width,
    zIndex: -5,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "tomato",
    marginHorizontal: 8,
    position: "absolute",
    textShadowColor: "tomato",
    textShadowRadius: 3,
    top: 70,
  },
  btns: {
    position: "absolute",
    bottom: 120,
    width: "90%",
    backgroundColor: "transparent",
  },
  loginBtn: { marginBottom: 20 },
  registerBtn: {},
});
