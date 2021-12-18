import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../configs/colors";

export default function EmergencyMessage({
  Pack = MaterialCommunityIcons,
  iconName,
  title,
  sender,
  dateTime = new Date().toLocaleString(),
  phno,
  location,
}) {
  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor="rgba(255, 255, 255, 0.5)"
          onPress={() => {
            return;
          }}
          style={styles.emergencyMessageIndicator}
        >
          <Pack name={iconName} size={25} color={"white"} />
        </TouchableHighlight>
        <View style={styles.description}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.sender}>{sender}</Text>
        </View>
        <TouchableHighlight
          underlayColor="rgba(255, 255, 255, 0.5)"
          onPress={() => {
            return;
          }}
          style={styles.call}
        >
          <MaterialCommunityIcons name="phone" color={"white"} size={25} />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="rgba(255, 255, 255, 0.5)"
          style={styles.location}
          onPress={() => {
            return;
          }}
        >
          <MaterialCommunityIcons name="directions" color={"white"} size={25} />
        </TouchableHighlight>
      </View>
      <Text style={styles.time}>{dateTime}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ff4200",
    borderRadius: 10,
    padding: 5,
  },
  emergencyMessageIndicator: {
    alignItems: "center",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    padding: 10,
  },
  description: {
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  sender: {
    fontSize: 15,
    color: "white",
  },
  call: {
    alignItems: "center",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    padding: 10,
  },
  location: {
    alignItems: "center",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    padding: 10,
  },
  time: {
    alignSelf: "flex-end",
    fontSize: 12,
    color: colors.dark,
  },
});
