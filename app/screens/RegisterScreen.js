import { IndexPath, Layout, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";

import AppForm from "../components/forms/AppForm";
import AppFormButton from "../components/forms/AppFormButton";
import AppInput from "../components/forms/AppInput";
import AppSelece from "../components/forms/AppSelece";
import Screen from "../components/Screen";
import colors from "../configs/colors";

const areaName = ["Vadipati", "Khadki", "Tichudiyu", "ThakorVas"];
// const groups = ["SPG", "Vadipati Boys Group"];

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required().max(20, "Firstname to long."),
  lastname: Yup.string().max(20, "Lastname to long."),
  // groups: Yup.array().label("Groups"),
  username: Yup.string().required().label("Username"),
  password: Yup.string()
    .required()
    .min(6, "Password must be greater than six charachters."),
});

export default function RegisterScreen() {
  const [passwordVisible, setpasswordVisible] = useState(false);

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
      <Screen style={{ alignItems: "center" }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <Text category="h1" style={styles.header}>
              KarannagarApp
            </Text>
            <Layout style={styles.container}>
              <Text
                style={{ marginBottom: 10, fontWeight: "bold" }}
                category="h4"
              >
                Register YourSelf
              </Text>
              <AppForm
                values={{
                  firstname: "",
                  lastname: "",
                  area: new IndexPath(0),
                  // groups: [],
                  username: "",
                  password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    alignSelf: "center",
                  }}
                >
                  <AppInput
                    placeholder="FirstName"
                    name="firstname"
                    width="50%"
                    style={styles.nameInput}
                  />
                  <AppInput
                    placeholder="LastName"
                    name="lastname"
                    width="50%"
                    style={styles.nameInput}
                  />
                </View>
                <AppSelece data={areaName} name="area" />
                {/* <Select
              selectedIndex={selectedGroup}
              value={groups[selectedGroup.row]}
              onSelect={(index) => setselectedGroup(index)}
              style={styles.select}
              name="groups"
            >
              {groups.map((item) => (
                <SelectItem title={item} key={item} />
              ))}
            </Select> */}
                <AppInput
                  placeholder="Email/Username"
                  name="username"
                  width="100%"
                  style={styles.inputs}
                  leftComponent={icon("person")}
                />
                <AppInput
                  placeholder="Password"
                  name="password"
                  width="100%"
                  style={styles.inputs}
                  leftComponent={icon("key")}
                  rightComponent={passicon()}
                  secureTextEntry={passwordVisible}
                />
                <AppFormButton title="Register" size={20} radius={50} />
              </AppForm>
            </Layout>
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 20,
                marginTop: 20,
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>
                Already a user? SignIn
              </Text>
            </TouchableOpacity>
          </>
        </TouchableWithoutFeedback>
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignItems: "center",
    top: 70,
    borderRadius: 12,
    elevation: 20,
    padding: 15,
    paddingBottom: 25,
  },
  imagebg: {
    flex: 1,
    width: "100%",
  },
  header: {
    top: 30,
    fontWeight: "bold",
    color: colors.white,
  },
  nameInput: { marginVertical: 8 },
  inputs: { alignSelf: "center", marginVertical: 8 },
  select: {
    marginVertical: 8,
  },
});
