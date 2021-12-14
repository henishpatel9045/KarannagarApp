import React from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../configs/colors";
import { Divider } from "react-native-elements";

const data = [
  {
    id: 1,
    iconName: "police-badge",
    title: "Police",
    sender: "Sarpanch",
    dateTime: Date.now(),
  },
  {
    id: 2,
    iconName: "fire",
    title: "Fire",
    sender: "Sarpanch",
    dateTime: Date.now(),
  },
  {
    id: 3,
    iconName: "car",
    title: "Accident",
    sender: "Sarpanch",
    dateTime: Date.now(),
  },
  {
    id: 4,
    iconName: "robber",
    title: "Robbery",
    sender: "Sarpanch",
    dateTime: Date.now(),
  },
  {
    id: 5,
    iconName: "fire",
    title: "Fire",
    sender: "Sarpanch",
    dateTime: Date.now(),
  },
];

const ListCardComponent = ({ title, iconName, sender, dateTime, onPress }) => (
  <>
    <View style={styles.itemContainer}>
      <TouchableHighlight
        underlayColor="rgba(255, 255, 255, 0.5)"
        onPress={() => console.log()}
        style={styles.emergencyMessageIndicator}
      >
        <MaterialCommunityIcons name={iconName} size={25} color={"white"} />
      </TouchableHighlight>
      <View style={styles.description}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.sender}>{sender}</Text>
      </View>

      <TouchableHighlight
        underlayColor="rgba(255, 255, 255, 0.5)"
        style={styles.deleteIcon}
        onPress={() => console.log()}
      >
        <MaterialCommunityIcons name="trash-can" color={"white"} size={25} />
      </TouchableHighlight>
    </View>
    <Text style={styles.time}>{dateTime}</Text>
  </>
);

export default function EmergencieDeleteScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "95%" }}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListCardComponent
            title={item.title}
            sender={item.sender}
            iconName={item.iconName}
            dateTime={item.dateTime}
            onPress={() => console.log()}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    alignItems: "center",
  },
  itemContainer: {
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

  deleteIcon: {
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
