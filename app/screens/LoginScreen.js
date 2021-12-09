import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Layout } from "@ui-kitten/components";
import React, { useState } from "react";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import * as Yup from "yup";

import AppForm from "../components/forms/AppForm";
import AppInput from "../components/forms/AppInput";
import AppFormButton from "../components/forms/AppFormButton";
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
    <ImageBackground
      source={require("../assets/blue0.jpg")}
      resizeMode="cover"
      style={styles.imagebg}
      blurRadius={3}
    >
      <Screen style={styles.container}>
        <AppForm
          values={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
          style={styles.loginform}
        >
          <AppInput
            style={{ marginBottom: 20 }}
            name="username"
            placeholder="Username"
            leftComponent={icon("person")}
            width="100%"
          />
          <AppInput
            rightComponent={passicon()}
            leftComponent={icon("key")}
            name="password"
            placeholder="Password"
            width="100%"
            secureTextEntry={passwordVisible}
          />
          <TouchableOpacity style={{ alignSelf: "flex-end", marginTop: 20 }}>
            <Text style={{ color: colors.primary }}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignSelf: "flex-end", marginTop: 10, marginBottom: 20 }}
          >
            <Text style={{ color: colors.primary }}>
              Not a user? Register yourself.
            </Text>
          </TouchableOpacity>
          <AppFormButton
            title="LogIn"
            width="100%"
            color={colors.primary}
            size={15}
            radius={50}
          />
        </AppForm>
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imagebg: {
    flex: 1,
    width: "100%",
  },
  loginform: {
    alignItems: "center",
    width: "95%",
    // position: "absolute",
    marginTop: 170,
    elevation: 35,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 15,
  },
  username: {},
  directLoginbtn: {
    flexDirection: "row",
    marginTop: 120,
    width: "80%",
    justifyContent: "space-evenly",
  },
});
