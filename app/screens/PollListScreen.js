import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getPolls } from "../api/firebase";
import useApiRef from "../hooks/useApiRef";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import LoadingSceen from "./LoadingSceen";
import moment from "moment";
import colors from "../configs/colors";

export default function PollListScreen({ navigation }) {
  const { data, loading, request } = useApiRef(getPolls);
  const [refreshing, setrefreshing] = useState(false);

  useEffect(() => {
    request();
  }, []);

  const remainingTime = (time) => {
    const remainingTime = moment(time).diff(moment(Date.now()), "seconds");
    // if (remainingTime <= 0) return "00:00:00";
    return moment(remainingTime).format("hh:mm:ss");
  };

  const renderItem = (info) => (
    <View style={styles.cardContainer}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={styles.left}>
          <Text numberOfLines={2} style={styles.question}>
            {info.question}
          </Text>
          <Text style={styles.senderDetail}>
            {info.sender.firstName} {info.sender.lastName} :{" "}
            {info.receiver.join(", ")}
          </Text>
          {/* <Text style={styles.remTime}>
            Voting ends on{" "}
            {moment(info.endTime.seconds).format("DD-MM-YYYY, hh:mm:ss")}
          </Text> */}
        </View>
        <TouchableHighlight
          underlayColor={"rgba(255,255,255,0.5)"}
          onPress={() =>
            navigation.navigate("PollResponse", {
              ...info,
            })
          }
          style={styles.right}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <MaterialCommunityIcons
              name="vote"
              size={35}
              color={"white"}
              style={styles.icon}
            />
            <Text style={styles.voteDesc}>Vote Here</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <LoadingSceen />
      ) : (
        <FlatList
          data={data.data}
          style={styles.list}
          keyExtractor={(item) => item.dateCreated.seconds.toString()}
          renderItem={({ item }) => {
            return renderItem(item);
          }}
          ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
          refreshing={refreshing}
          onRefresh={() => request()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    flex: 1,
  },
  cardContainer: {
    alignSelf: "center",
    backgroundColor: "rgba(0, 10, 180, 0.7)",
    borderRadius: 15,
    padding: 10,
    width: "95%",
  },
  list: {
    width: "100%",

    flex: 1,
  },
  left: {
    flex: 1,
  },
  right: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 15,
    justifyContent: "center",
  },
  question: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  senderDetail: {
    color: "white",
  },
  remTime: {
    color: colors.secondary,
  },
  voteDesc: {
    color: "white",
  },
  itemSeperator: {
    alignItems: "center",
    alignSelf: "center",
    borderTopColor: colors.gray,
    borderWidth: 1,
    marginVertical: 15,
    justifyContent: "center",
    width: "90%",
  },
});
