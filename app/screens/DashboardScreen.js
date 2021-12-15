import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  FlatList,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import colors from "../configs/colors";
import useApiRef from "../hooks/useApiRef";
import { getAnnouncements, getEmergencies, getPolls } from "../api/firebase";
import moment from "moment";
import { SpeedDial } from "react-native-elements";
import staticAppData from "../configs/staticAppData";
import LottieView from "lottie-react-native";

const remainingTime = (time) => {
  const remainingTime = moment(time).diff(moment(Date.now()), "seconds");
  // if (remainingTime <= 0) return "00:00:00";
  return moment(remainingTime).format("hh:mm:ss");
};
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
        shadowColor: "rgb(0, 150, 40)",
      },
    ]}
  >
    <View style={styles.cardHeader}>
      <Text style={styles.cardHeader}>Poll</Text>
      <Text style={styles.sender} numberOfLines={1}>
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
      </View>
    </View>
    <Text
      style={{
        fontSize: 12,
        marginTop: 5,
        alignSelf: "flex-end",
        color: "white",
      }}
    >
      Remaining Time: {remainingTime}
    </Text>
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
      <Text style={styles.sender} numberOfLines={1}>
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

const iconsList = staticAppData.emerIconList;
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
      <MaterialCommunityIcons
        name={iconsList[title]}
        size={60}
        color={"white"}
      />
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

export default function DashboardScreen({ navigation }) {
  const [open, setopen] = useState(false);
  const [EmerRefreshing, setEmerRefreshing] = useState(false);
  const [AnnRefreshing, setAnnRefreshing] = useState(false);
  const [PollRefreshing, setPollRefreshing] = useState(false);

  const {
    data: announcements,
    loading: lan,
    request: loadAnnouncements,
  } = useApiRef(getAnnouncements);
  const {
    data: emergencies,
    loading: lem,
    request: loademergency,
  } = useApiRef(getEmergencies);
  const {
    data: polls,
    loading: lpoll,
    request: loadPolls,
  } = useApiRef(getPolls);

  useEffect(() => {
    loademergency();
    loadAnnouncements();
    loadPolls();
  }, []);

  const Loading = () => (
    <LottieView
      source={require("../assets/animations/loadingCircle.json")}
      loop
      autoPlay
      style={{ height: 200, width: "100%", alignSelf: "center" }}
    />
  );

  return (
    <View style={styles.container}>
      <View style={[styles.section, { minHeight: 200 }]}>
        <Text style={styles.sectionHeader}>Emergencies</Text>
        {lem ? (
          <Loading />
        ) : (
          <FlatList
            horizontal
            contentContainerStyle={styles.scrollStyle}
            data={emergencies.data}
            keyExtractor={(item) => item.dateCreated.toString()}
            renderItem={({ item }) => (
              <EmergencyCard
                title={item.title}
                type={item.type}
                sender={`${item.sender.firstName} ${
                  item.sender.lastName ? item.sender.lastName : ""
                }`.trimEnd()}
                dateTime={moment(item.dateCreated.toDate()).format(
                  "DD-MM-YYYY, hh:mm:ss"
                )}
              />
            )}
            refreshing={EmerRefreshing}
            onRefresh={() => loademergency()}
          />
        )}
      </View>
      <View style={[styles.section, { minHeight: 200 }]}>
        <Text style={styles.sectionHeader}>Announcements</Text>
        {lan ? (
          <Loading />
        ) : (
          <FlatList
            data={announcements.data}
            keyExtractor={(item) => item.dateCreated.toString()}
            horizontal
            renderItem={({ item }) => (
              <AnnouncementCard
                title={item.title}
                sender={`${item.sender.firstName} ${
                  item.sender.lastName ? item.sender.lastName : ""
                }`.trimEnd()}
                receiver={item.receiver.join(", ")}
                message={item.message}
                dateTime={moment(item.dateCreated.toDate()).format(
                  "DD-MM-YYYY, hh:mm"
                )}
              />
            )}
            refreshing={AnnRefreshing}
            onRefresh={() => loadAnnouncements()}
          />
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Polls</Text>
        {lpoll ? (
          <Loading />
        ) : (
          <FlatList
            data={polls.data}
            keyExtractor={(item) => item.dateCreated.toString()}
            renderItem={({ item }) => (
              <PollCard
                sender={`${item.sender.firstName} ${
                  item.sender.lastName ? item.sender.lastName : ""
                }`.trimEnd()}
                question={item.question}
                receiver={item.receiver}
                remainingTime={remainingTime(item.endTime.toDate())}
              />
            )}
            horizontal
            contentContainerStyle={[styles.scrollStyle, { paddingBottom: 35 }]}
            refreshing={PollRefreshing}
            onRefresh={() => loadPolls()}
          />
        )}
      </View>
      <SpeedDial
        isOpen={open}
        icon={{ name: "add", color: "#fff" }}
        openIcon={{ name: "close", color: "#fff" }}
        onOpen={() => setopen(!open)}
        onClose={() => setopen(!open)}
      >
        <SpeedDial.Action
          icon={{ name: "message", color: "#fff" }}
          title="Create Announcement"
          onPress={() => navigation.navigate("AddAnnouncement")}
        />
        <SpeedDial.Action
          icon={{ name: "poll", color: "#fff" }}
          title="Create Poll"
          onPress={() => navigation.navigate("AddPoll")}
        />
      </SpeedDial>
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
    elevation: 500,
  },

  section: {
    width: "100%",
    marginBottom: 0,
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
  scrollStyle: { elevation: 100, paddingVertical: 20 },
});
