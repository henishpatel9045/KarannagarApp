import React from "react";
import { View, Text } from "react-native";

import LottieView from "lottie-react-native";

export default function NetworkError() {
  return (
    <View style={{ flex: 1 }}>
      <LottieView
        source={require("../assets/animations/noInternet.json")}
        autoPlay
        style={{
          position: "absolute",
          top: 50,
          height: "80%",
          width: "100%",
        }}
        loop
      />
      <Text
        style={{
          color: "red",

          bottom: "20",
          alignSelf: "center",
          fontSize: 20,
          zIndex: 3,
        }}
      >
        No Internet Connection
      </Text>
    </View>
  );
}
