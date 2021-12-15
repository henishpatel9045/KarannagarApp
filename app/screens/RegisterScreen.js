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
  KeyboardAvoidingView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppInput from "../components/forms/AppInput";
import SocialMediaIcon from "../components/SocialMediaIcon";
import colors from "../configs/colors";
import staticAppData from "../configs/staticAppData";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Input from "../components/Input";

const areas = staticAppData.area;

export default function RegisterScreen({ navigation }) {
  const [selectedArea, setselectedArea] = useState([]);
  const [mobileNumber, setMobileNumber] = useState("");
  const [errors, setErrors] = useState([false, false]);
  const displayOptions = selectedArea.map((index) => {
    return areas[index.row];
  });
  const checkError = () => {
    setErrors([selectedArea.length === 0, mobileNumber.length != 10]);
  };
  const handleSubmit = () => {
    let area = [];
    selectedArea.forEach((item) => area.push(areas[item.row]));
  };

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
        value={displayOptions.join(", ")}
        placeholder={"Select Area"}
        multiSelect={true}
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
      {errors[0] && (
        <Text style={{ color: "red", top: -5 }}>
          Please select at least one area.
        </Text>
      )}
      <Input
        maxLength={10}
        placeholder={"Mobile Number"}
        name={"mobileNo"}
        onChangeText={setMobileNumber}
        keyboardType="number-pad"
        leftComponent={
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="phone"
              size={25}
              color={colors.dark}
            />
            <Text style={{ color: colors.dark }}>+91</Text>
          </View>
        }
        width={"80%"}
      />
      {errors[1] && (
        <Text style={{ color: "red" }}>Please enter your Mobile Number.</Text>
      )}
      <View style={{ zIndex: -2, marginTop: 20 }}>
        <SocialMediaIcon
          name={"google"}
          style={styles.google}
          title={"Register With Google"}
          onPress={() => {
            checkError();
            // else {
            //   registration();
            // }
          }}
        />
        {/* <SocialMediaIcon
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
        /> */}
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
    minWidth: "80%",
    marginBottom: 5,
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
