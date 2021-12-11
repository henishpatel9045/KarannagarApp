import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import colors from "../configs/colors";

const PollCard = ({
  question,
  sender,
  receiver,
  remainingTime,
  totalResponse,
}) => (
  <View
    style={[
      styles.card,
      {
        backgroundColor: "rgba(0, 150, 40, 0.8)",
        shadowColor: "rgba(0, 150, 40, 0.8)",
      },
    ]}
  >
    <View style={styles.cardHeader}>
      <Text style={styles.cardHeader}>Poll</Text>
      <Text style={styles.sender}>
        {sender} : {receiver}
      </Text>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text numberOfLines={3} style={{ color: colors.secondary }}>
          {question}
        </Text>
        <TouchableHighlight
          onPress={() => console.log()}
          underlayColor={"rgba(255,255,255,0.5)"}
          style={{ padding: 5, borderRadius: 10 }}
        >
          <MaterialCommunityIcons name="vote" size={30} color={"white"} />
        </TouchableHighlight>
        <Text
          style={{
            fontSize: 12,
            marginTop: 5,
            alignSelf: "flex-end",
            color: "white",
          }}
        >
          {remainingTime}
        </Text>
      </View>
    </View>
  </View>
);

const AnnouncementCard = ({
  title = "Announcement",
  sender,
  receiver,
  dateTime,
  message,
}) => (
  <View
    style={[
      styles.card,
      {
        backgroundColor: "rgba(0, 50, 250, 0.7)",
        shadowColor: "rgb(0, 50, 250)",
      },
    ]}
  >
    <View style={styles.cardHeader}>
      <Text style={styles.cardHeader}>{title}</Text>
      <Text style={styles.sender}>
        {sender} : {receiver}
      </Text>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <View style={{ flex: 1 }}>
        <Text numberOfLines={2} style={{ color: colors.secondary }}>
          {message}
        </Text>
        <TouchableOpacity onPress={() => console.log()}>
          <Text style={{ fontSize: 12, color: "white", alignSelf: "flex-end" }}>
            Read More...
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 12,
            marginTop: 5,
            alignSelf: "flex-end",
            color: "white",
          }}
        >
          {dateTime}
        </Text>
      </View>
    </View>
  </View>
);

const EmergencyCard = ({
  title = "Emergency",
  sender,
  type,

  dateTime,
}) => (
  <View
    style={[
      styles.card,
      {
        backgroundColor: "rgba(245, 50, 0, 0.8)",
        shadowColor: "rgb(245, 50, 0)",
      },
    ]}
  >
    <View style={styles.cardHeader}>
      <Text style={styles.cardHeader}>{title}</Text>
      <Text style={styles.sender}>{sender}</Text>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <MaterialCommunityIcons name={type} size={60} color={"white"} />
      <View style={{ flexDirection: "row" }}>
        <TouchableHighlight
          underlayColor={"rgba(255,255,255,0.5)"}
          onPress={() => console.log()}
          style={{ padding: 5, borderRadius: 10 }}
        >
          <MaterialCommunityIcons name="phone" size={30} color={"white"} />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"rgba(255,255,255,0.5)"}
          onPress={() => console.log()}
          style={{ padding: 5, borderRadius: 10 }}
        >
          <MaterialCommunityIcons name="navigation" size={30} color={"white"} />
        </TouchableHighlight>
      </View>
    </View>
    <Text
      style={{
        fontSize: 12,

        alignSelf: "flex-end",
        color: "white",
      }}
    >
      {dateTime}
    </Text>
  </View>
);

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Emergencies</Text>
        <ScrollView horizontal>
          <EmergencyCard
            title="Fire"
            type={"fire"}
            sender={"Henish Patel"}
            dateTime={new Date().toLocaleString()}
          />
          <EmergencyCard
            title="Fire"
            type={"fire"}
            sender={"Henish Patel"}
            dateTime={new Date().toLocaleString()}
          />
          <EmergencyCard
            title="Fire"
            type={"fire"}
            sender={"Henish Patel"}
            dateTime={new Date().toLocaleString()}
          />
          <EmergencyCard
            title="Fire"
            type={"fire"}
            sender={"Henish Patel"}
            dateTime={new Date().toLocaleString()}
          />
        </ScrollView>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Announcements</Text>
        <ScrollView horizontal>
          <AnnouncementCard
            title={"Water Department"}
            sender={"Saepanch"}
            receiver={"Vadiparti"}
            message={
              "Announcement for vadiparti that today water is gonna run late because of pump malfunction."
            }
            dateTime={new Date().toLocaleString()}
          />
          <AnnouncementCard
            title={"Water Department"}
            sender={"Saepanch"}
            receiver={"Vadiparti"}
            message={
              "Announcement for vadiparti that today water is gonna run late because of pump malfunction."
            }
            dateTime={new Date().toLocaleString()}
          />
          <AnnouncementCard
            title={"Water Department"}
            sender={"Saepanch"}
            receiver={"Vadiparti"}
            message={
              "Announcement for vadiparti that today water is gonna run late because of pump malfunction."
            }
            dateTime={new Date().toLocaleString()}
          />
          <AnnouncementCard
            title={"Water Department"}
            sender={"Saepanch"}
            receiver={"Vadiparti"}
            message={
              "Announcement for vadiparti that today water is gonna run late because of pump malfunction."
            }
            dateTime={new Date().toLocaleString()}
          />
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Polls</Text>
        <ScrollView horizontal>
          <PollCard sender={"Sarpanch"} question={"What's your name?"} />
          <PollCard sender={"Sarpanch"} question={"What's your name?"} />
          <PollCard sender={"Sarpanch"} question={"What's your name?"} />
          <PollCard sender={"Sarpanch"} question={"What's your name?"} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: "#ededed",
    flex: 1,
  },
  card: {
    width: Dimensions.get("screen").width * 0.55,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
    // elevation: 50,
    height: 150,
  },

  section: {
    width: "100%",
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "baseline",
  },
  sender: {
    color: "white",
  },
  sectionHeader: {
    fontSize: 30,
    color: colors.dark,
    marginLeft: 15,
    textShadowColor: colors.dark,
    textShadowRadius: 2,
  },
  cardHeader: {
    color: "white",
    fontSize: 20,
    top: -5,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
});
