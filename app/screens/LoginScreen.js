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
    <TouchableWithoutFeedback
      onPress={() => setpasswordVisible(!passwordVisible)}
    >
      {passwordVisible ? icon("eye-off") : icon("eye")}
    </TouchableWithoutFeedback>
  );
  return (
    <ImageBackground
      source={require("../assets/logn.jpg")}
      resizeMode="cover"
      style={styles.imagebg}
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
            label="Username"
            rightComponent={() => icon("person")}
            placeholder
          />
          <AppInput
            rightComponent={passicon}
            name="password"
            label="Password"
            placeholder
            secureTextEntry={passwordVisible}
          />
          <TouchableOpacity style={{ alignSelf: "flex-end", marginTop: 20 }}>
            <Text style={{ color: "white" }}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignSelf: "flex-end", marginTop: 10, marginBottom: 20 }}
          >
            <Text style={{ color: "white" }}>
              Not a user? Register yourself.
            </Text>
          </TouchableOpacity>
          <AppFormButton
            title="LogIn"
            width="100%"
            color={colors.primary}
            size={15}
            radius={5}
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
    width: "95%",
    // position: "absolute",
    marginTop: 170,
    elevation: 25,
    padding: 15,
    backgroundColor: "#6af3f0",
    borderRadius: 15,
  },
  username: {
    width: "95%",
  },
  directLoginbtn: {
    flexDirection: "row",
    marginTop: 120,
    width: "80%",
    justifyContent: "space-evenly",
  },
});
