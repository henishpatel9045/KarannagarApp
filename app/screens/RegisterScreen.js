import { IndexPath, Layout, Text } from "@ui-kitten/components";
import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as Yup from "yup";

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
  return (
    <ImageBackground
      source={require("../assets/login.jpg")}
      resizeMode="cover"
      style={styles.imagebg}
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
                  }}
                >
                  <AppInput
                    label="FirstName"
                    placeholder
                    name="firstname"
                    width="50%"
                    style={styles.nameInput}
                  />
                  <AppInput
                    label="LastName"
                    placeholder
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
                  label="Email/Username"
                  placeholder
                  name="username"
                  width="100%"
                  style={styles.inputs}
                />
                <AppInput
                  label="Password"
                  placeholder
                  name="password"
                  width="100%"
                  style={styles.inputs}
                />
                <AppFormButton title="Register" size={18} radius={5} />
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
