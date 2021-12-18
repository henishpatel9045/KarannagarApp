import { Ionicons } from "@expo/vector-icons";
import { Text, StyleSheet, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import * as Google from "expo-google-app-auth";

import colors from "../configs/colors";
import SocialMediaIcon from "../components/SocialMediaIcon";
import Screen from "../components/Screen";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function LoginScreen({ navigation }) {
  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "451510403937-lkhkffu80dskj6ts9koa67pus9kvq9e7.apps.googleusercontent.com",
        behavior: "web",
        //   iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        return result;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e);
      return { error: true };
    }
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
        onPress={() => navigation.navigate("Loading")}
      />
      <SocialMediaIcon
        name={"facebook"}
        style={styles.google}
        title="Facebook LogIn"
        onPress={() => {
          return;
        }}
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
