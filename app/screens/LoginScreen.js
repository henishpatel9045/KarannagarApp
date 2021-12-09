import { Ionicons } from "@expo/vector-icons";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
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
    flex: 1,
  },
  imagebg: {
    alignSelf: "center",
    height: 300,
    marginTop: 50,
    width: Dimensions.get("screen").width - 10,
  },
  google: {
    alignSelf: "center",
    width: "80%",
  },
});

// // Old Form Pattern
// <AppForm
//   values={{ username: "", password: "" }}
//   validationSchema={validationSchema}
//   onSubmit={(values) => console.log(values)}
//   style={styles.loginform}
// >
//   <AppInput
//     style={{ marginBottom: 20 }}
//     name="username"
//     placeholder="Username"
//     leftComponent={icon("person")}
//     width="100%"
//   />
//   <AppInput
//     rightComponent={passicon()}
//     leftComponent={icon("key")}
//     name="password"
//     placeholder="Password"
//     width="100%"
//     secureTextEntry={passwordVisible}
//   />
//   <TouchableOpacity style={{ alignSelf: "flex-end", marginTop: 20 }}>
//     <Text style={{ color: colors.primary }}>Forgot Password?</Text>
//   </TouchableOpacity>
//   <TouchableOpacity
//     style={{ alignSelf: "flex-end", marginTop: 10, marginBottom: 20 }}
//   >
//     <Text style={{ color: colors.primary }}>
//       Not a user? Register yourself.
//     </Text>
//   </TouchableOpacity>
//   <AppFormButton
//     title="LogIn"
//     width="100%"
//     color={colors.primary}
//     size={15}
//     radius={50}
//   />
// </AppForm>;
