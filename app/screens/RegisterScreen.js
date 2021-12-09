import { IndexPath, Select, SelectItem } from "@ui-kitten/components";

import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
  StatusBar,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SocialMediaIcon from "../components/SocialMediaIcon";
import colors from "../configs/colors";

const areas = ["Vadiparti", "Khadki", "Thakor Vas"];

export default function RegisterScreen({ navigation }) {
  const [selectedArea, setselectedArea] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <Image
        source={require("../assets/register.png")}
        resizeMode="cover"
        style={styles.imagebg}
        width={100}
        height={100}
      />
      <Select
        selectedIndex={selectedArea}
        value={areas[selectedArea.row]}
        placeholder={"Select Area"}
        style={styles.areaSelector}
        onSelect={(index) => {
          setselectedArea(index);
        }}
        size={"large"}
      >
        {areas.map((item) => (
          <SelectItem title={item} key={item} style={{ zIndex: 5 }} />
        ))}
      </Select>
      <View style={{ zIndex: -2 }}>
        <SocialMediaIcon
          name={"google"}
          style={styles.google}
          title={"Register With Google"}
          onPress={() => {
            if (!selectedArea)
              return Alert.alert("Alert", "Please select area first", [
                {
                  text: "Ok",
                },
              ]);
          }}
        />
        <SocialMediaIcon
          name={"facebook"}
          style={styles.google}
          title="Register With Facebook"
          onPress={() => {
            if (!selectedArea)
              return Alert.alert("Alert", "Please select area first", [
                {
                  text: "Ok",
                },
              ]);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.footer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.txt}>Already a User? LogIn</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  imagebg: {
    width: Dimensions.get("screen").width,
    height: 200,
    marginTop: 120,
    marginBottom: 50,
  },
  heading: {
    color: colors.dark,
    fontSize: 38,
    fontFamily: "Roboto",
    fontWeight: "bold",
    left: 20,
    position: "absolute",
    top: StatusBar.currentHeight,
    textShadowColor: colors.dark,
    textShadowRadius: 3,
  },
  areaSelector: {
    minWidth: "50%",

    marginBottom: 20,
  },
  google: {
    minWidth: "80%",
  },
  footer: {
    marginTop: 80,
  },
  txt: {
    color: "#4267b2",
    fontSize: 20,
    fontWeight: "bold",
  },
});
