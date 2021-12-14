import React from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../configs/colors";
import { Divider } from "react-native-elements";

const polls = [
  {
    id: 1,
    question: "What's your name?",
    dateTIme: Date.now().toLocaleString(),
    sender: "Henish",
    receiver: "Vadiparti",
  },
  {
    id: 2,
    question: "What do you want?",
    dateTIme: Date.now().toLocaleString(),
    sender: "Henish",
    receiver: "All",
  },
  {
    id: 3,
    question: "What is your average height in your growing days?",
    dateTIme: Date.now().toLocaleString(),
    sender: "Henish",
    receiver: "Khadki",
  },
];

const ListCardComponent = ({ question, sender, receiver, date, onPress }) => (
  <View style={styles.card}>
    <View style={styles.description}>
      <View style={styles.cardHeading}>
        <Text numberOfLines={2} style={styles.cardHeadingTxt}>
          {question}
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

export default function PollDeleteScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "95%" }}
        data={polls}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListCardComponent
            question={item.question}
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
