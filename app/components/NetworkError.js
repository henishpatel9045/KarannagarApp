import React from "react";

import LottieView from "lottie-react-native";

export default function NetworkError() {
  return (
    <LottieView
      source={require("../assets/animations/noInternet.json")}
      autoPlay
      style={{ zIndex: 5 }}
      loop
    />
  );
}
