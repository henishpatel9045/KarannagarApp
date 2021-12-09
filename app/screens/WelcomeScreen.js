import React from "react";
import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import colors from "../configs/colors";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/welcome.png")}
      style={styles.bgImage}
    >
      <View style={styles.container}>
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(255, 99, 71, 0.15)",
  },
  bgImage: {
    flex: 1,
    resizeMode: "contain",
    width: Dimensions.get("screen").width,
    zIndex: -2,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "tomato",
    marginHorizontal: 8,
    position: "absolute",
    textShadowColor: "white",
    textShadowRadius: 2,
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
