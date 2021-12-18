import React from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../configs/colors";
import { Divider } from "react-native-elements";
import moment from "moment";

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

export default function AnnouncementsDeleteScreen({ route }) {
  const messages = route.params.data;
  console.log(messages[0]);
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "95%" }}
        data={messages}
        keyExtractor={(item) => item.dateCreated.toString()}
        renderItem={({ item }) => (
          <ListCardComponent
            message={item.message}
            sender={item.sender.firstName + " " + item.sender.lastName}
            receiver={item.receiver.join(", ")}
            date={moment(item.dateCreated.toDate()).format("DD/MM/YYYY, hh:mm")}
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
