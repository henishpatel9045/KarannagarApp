import moment from "moment";
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getAnnouncements } from "../api/firebase";
import AppButton from "../components/AppButton";
import AppCard from "../components/AppCard";
import AppLink from "../components/AppLink";
import AppText from "../components/AppText";
import colors from "../configs/colors";
import useApiRef from "../hooks/useApiRef";
import LoadingSceen from "./LoadingSceen";

export default function AnnouncementScreen() {
  const { data, loading, request } = useApiRef(getAnnouncements);

  useEffect(() => {
    request();
  }, []);

  const [refreshing, setrefreshing] = useState(false);
  return (
    <View style={styles.container}>
      {loading ? (
        <LoadingSceen />
      ) : data.error !== false ? (
        <View>
          <Text>Couldn't fetch data from server.</Text>
          <AppButton title={"Retry"} onPress={() => request()} />
        </View>
      ) : (
        <FlatList
          data={data.data}
          style={{ flex: 1, width: "100%" }}
          keyExtractor={(item) => item.aid.toString()}
          renderItem={({ item }) => {
            if (item.type === "card")
              return (
                <>
                  <AppCard
                    title={item.title}
                    sender={item.sender.firstName}
                    reciever={item.reciever}
                    message={item.message}
                    image={item.image ? item.image : null}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      marginHorizontal: 15,
                      justifyContent: "space-between",
                      width: "95%",
                    }}
                  >
                    <Text
                      style={{
                        alignSelf: "flex-start",
                        color: colors.dark,
                        marginRight: 15,
                      }}
                    >
                      {item.sender.firstName + " " + item.sender.lastName} :{" "}
                      {item.receiver}
                    </Text>
                    <Text
                      style={{
                        alignSelf: "flex-end",
                        color: colors.dark,
                        marginRight: 15,
                      }}
                    >
                      {moment(item.dateCreated.seconds).format(
                        "DD-MM-YYYY, hh:mm"
                      )}
                    </Text>
                  </View>
                </>
              );
            if (item.type === "link")
              return (
                <>
                  <AppLink text={item.message} link={item.url} />
                  <View
                    style={{
                      flexDirection: "row",
                      marginHorizontal: 15,
                      justifyContent: "space-between",
                      width: "95%",
                    }}
                  >
                    <Text
                      style={{
                        alignSelf: "flex-start",
                        color: colors.dark,
                        marginRight: 15,
                      }}
                    >
                      {item.sender.firstName} : {item.reciever}
                    </Text>
                    <Text
                      style={{
                        alignSelf: "flex-end",
                        color: colors.dark,
                        marginRight: 15,
                      }}
                    >
                      {item.dateCreated.nanoseconds}
                    </Text>
                  </View>
                </>
              );
            if (item.type === "text")
              return (
                <>
                  <AppText>{item.message}</AppText>
                  <View style={styles.footer}>
                    <Text
                      style={{
                        alignSelf: "flex-start",
                        color: colors.dark,
                      }}
                    >
                      {item.sender.firstName} : {item.reciever}
                    </Text>
                    <Text
                      style={{
                        alignSelf: "flex-end",
                        color: colors.dark,
                      }}
                    >
                      {item.dateCreated.nanoseconds}
                    </Text>
                  </View>
                </>
              );
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
  itemSeperator: {
    alignItems: "center",
    alignSelf: "center",
    borderTopColor: colors.gray,
    borderWidth: 1,
    marginVertical: 15,
    justifyContent: "center",
    width: "90%",
  },
  footer: {
    flexDirection: "row",
    marginHorizontal: 15,
    justifyContent: "space-between",
    width: "95%",
  },
});
