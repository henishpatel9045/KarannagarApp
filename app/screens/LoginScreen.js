import { Ionicons } from "@expo/vector-icons";
import { Text, StyleSheet, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import colors from "../configs/colors";
import SocialMediaIcon from "../components/SocialMediaIcon";
import Screen from "../components/Screen";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function LoginScreen() {
  const [passwordVisible, setpasswordVisible] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    password: Yup.string()
      .required()
      .min(4, "Password must be longer than four charachters."),
  });
  const icon = (name) => <Ionicons name={name} size={20} color={colors.dark} />;
  const passicon = () => (
    <TouchableHighlight
      onPress={() => setpasswordVisible(!passwordVisible)}
      underlayColor={"#ededed"}
      style={{ padding: 3, borderRadius: 20 }}
    >
      {passwordVisible ? icon("eye-off") : icon("eye")}
    </TouchableHighlight>
  );
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
        onPress={() => console.log()}
      />
      <SocialMediaIcon
        name={"facebook"}
        style={styles.google}
        title="Facebook LogIn"
        onPress={() => console.log()}
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
