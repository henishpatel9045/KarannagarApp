import React, { useEffect, useState } from "react";
import { View, TouchableHighlight, Alert } from "react-native";
import staticAppData from "../../configs/staticAppData";
import LottieScreen from "lottie-react-native";
import AppForm from "../../components/forms/AppForm";
import AppInput from "../../components/forms/AppInput";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../configs/colors";
import Input from "../../components/Input";
import AppButton from "../../components/AppButton";

const devInfo = staticAppData.developerInfo;

export default function DevLogInScreen({ navigation }) {
  const [visible, setVisible] = useState(false);
  const [code, setcode] = useState("");
  const rightCompo = (
    <TouchableHighlight
      style={{ alignItems: "center" }}
      onPress={() => setVisible(!visible)}
    >
      <MaterialCommunityIcons
        name={visible ? "eye" : "eye-off"}
        color={colors.dark}
        size={20}
      />
    </TouchableHighlight>
  );

  const handleSubmit = () => {
    if (code === devInfo.password) return navigation.navigate("AccountScreen");
    alert("Wrong Code Try Again..");
  };

  return (
    <>
      <LottieScreen
        source={require("../../assets/animations/developerSignIn.json")}
        autoPlay
        loop
        style={{ zIndex: -1, position: "absolute", top: 10, width: "100%" }}
      />
      <View
        style={{
          position: "absolute",
          top: 350,
          width: "90%",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Input
          placeholder={"PassCode"}
          secureTextEntry={!visible}
          rightComponent={rightCompo}
          onChangeText={setcode}
        />
        <AppButton
          style={{ marginVertical: 25 }}
          title={"LogIn"}
          width={"90%"}
          radius={50}
          onPress={handleSubmit}
          size={18}
        />
      </View>
    </>
  );
}
