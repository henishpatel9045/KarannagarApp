import React from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../configs/colors";
import { Divider } from "react-native-elements";

const messages = [
  {
    id: 1,
    type: "card",
    title: "WaterDepartment",
    sender: "Sarpanch",
    reciever: "Vadipati",
    message: "Only for two hours",
    dateTIme: new Date().toLocaleString(),
    image: require("../assets/logn.jpg"),
  },
  {
    id: 2,
    type: "card",
    title: "ElectricityRelated",
    sender: "HenishPatel",
    reciever: "Khadki",
    message: "Light CutDown",
    dateTIme: new Date().toLocaleString(),
  },
  {
    id: 3,
    type: "card",
    title: "Event",
    sender: "SPG",
    reciever: "Vadipati",
    message: "Need 25 mens on 12th December",
    dateTIme: new Date().toLocaleString(),
    image: require("../assets/logn.jpg"),
  },
  {
    id: 7,
    type: "link",
    sender: "SPG",
    reciever: "Vadipati",
    message: "Flipkart",
    url: "https://www.flipkart.com/",
    dateTIme: new Date().toLocaleString(),
  },
  {
    id: 4,
    type: "card",
    title: "WaterDepartment",
    sender: "Sarpanch",
    reciever: "Vadipati",
    message: "Only for two hours",
    dateTIme: new Date().toLocaleString(),
    image: require("../assets/logn.jpg"),
  },
  {
    id: 8,
    sender: "SPG",
    reciever: "Vadipati",
    type: "text",
    message: "Hey man just testing the app.",
    dateTIme: new Date().toLocaleString(),
  },
  {
    id: 9,
    type: "text",
    sender: "SPG",
    reciever: "Vadipati",
    message: "Its working fine.",
    dateTIme: new Date().toLocaleString(),
  },
  {
    id: 10,
    sender: "SPG",
    reciever: "Vadipati",
    type: "text",
    message: "Now i have found a bug.",
    dateTIme: new Date().toLocaleString(),
  },
  {
    id: 5,
    type: "card",
    title: "ElectricityRelated",
    sender: "HenishPatel",
    reciever: "Khadki",
    message: "Light CutDown",
    dateTIme: new Date().toLocaleString(),
  },
  {
    id: 11,
    type: "text",
    sender: "SPG",
    reciever: "Vadipati",
    message: "હેનીશ પટેલ",
    dateTIme: new Date().toLocaleString(),
  },
  {
    id: 6,
    type: "card",
    title: "Event",
    sender: "SPG",
    reciever: "Vadipati",
    message: "Need 25 mens on 12th December",
    dateTIme: new Date().toLocaleString(),
    image: require("../assets/logn.jpg"),
  },
];

const ListCardComponent = ({ message, sender, receiver, date, onPress }) => (
  <View style={styles.card}>
    <View style={styles.description}>
      <View style={styles.cardHeading}>
        <Text numberOfLines={2} style={styles.cardHeadingTxt}>
          {message}
        </Text>
      </View>
      <Text style={styles.subTitle}>
        {sender} : {receiver}
      </Text>
      <Text style={styles.date}>{date}</Text>
    </View>
    <Divider orientation="vertical" width={1} />
    <TouchableHighlight
      style={styles.deleteIcon}
      onPress={onPress}
      underlayColor={"rgba(255,255,255,0.5)"}
    >
      <MaterialCommunityIcons name="trash-can" size={40} color={"white"} />
    </TouchableHighlight>
  </View>
);

export default function AnnouncementsDeleteScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "95%" }}
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListCardComponent
            message={item.message}
            sender={item.sender}
            receiver={item.reciever}
            date={item.dateTIme}
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
  card: {
    backgroundColor: "rgba(250, 70, 0, 0.8)",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  description: {
    flexDirection: "column",
    flex: 1,
  },
  cardHeadingTxt: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.secondary,
  },
  date: {
    color: colors.dark,
  },
  deleteIcon: {
    padding: 10,
  },
});
