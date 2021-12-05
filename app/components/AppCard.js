import { Card, Text } from "@ui-kitten/components";
import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import colors from "../configs/colors";

export default function AppCard({
  message,
  title,
  image,
  onPress,
  sender,
  reciever,
  dateTime,
}) {
  const header = () => (
    <ImageBackground
      source={image}
      style={[
        styles.header,
        {
          width: "100%",
          backgroundColor: image ? "transparent" : colors.primary,
        },
      ]}
      resizeMode="cover"
    >
      <Text category="h3" style={styles.headertxt}>
        {title}
      </Text>
      <Text category="h6" style={styles.headertxt}>
        From: {sender} To: {reciever}
      </Text>
    </ImageBackground>
  );

  const footer = () => (
    <View style={styles.footer}>
      <Text category="label" style={styles.footertxt}>
        {dateTime}
      </Text>
    </View>
  );

  return (
    <TouchableOpacity onPress={onPress}>
      <Card header={header} footer={footer} style={styles.container}>
        <Text>{message}</Text>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 0,
    elevation: 10,
  },
  header: {
    padding: 10,
  },
  headertxt: {
    color: "white",
    textShadowColor: colors.dark,
    textShadowRadius: 8,
  },
  footer: {
    width: "100%",
    alignItems: "flex-end",
    padding: 10,
    backgroundColor: colors.gray,
  },
  footertxt: {
    color: colors.dark,
  },
});
