import moment from "moment";
import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AuthContext from "../auth/context";
import AppCard from "../components/AppCard";
import AppLink from "../components/AppLink";
import AppText from "../components/AppText";
import colors from "../configs/colors";
import LoadingSceen from "./LoadingSceen";

export default function AnnouncementScreen() {
  const {
    lan: loading,
    announcements: data,
    loadAnnouncements: request,
  } = useContext(AuthContext);

  const Card = ({ item }) => (
    <>
      <AppCard
        title={item.title}
        sender={item.sender.firstName}
        reciever={item.receiver.join(", ")}
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
            width: "60%",
          }}
          numberOfLines={1}
        >
          {item.sender.name} : {item.receiver}
        </Text>
        <Text
          style={{
            alignSelf: "flex-end",
            color: colors.dark,
            marginRight: 15,
          }}
        >
          {moment(item.dateCreated.seconds).format("DD-MM-YYYY, hh:mm")}
        </Text>
      </View>
    </>
  );

  const Link = ({ item }) => (
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
            width: "60%",
          }}
          numberOfLines={1}
          numberOfLines={1}
        >
          {item.sender.name} : {item.receiver.join(", ")}
        </Text>
        <Text
          style={{
            alignSelf: "flex-end",
            color: colors.dark,
            marginRight: 15,
          }}
        >
          {moment(item.dateCreated.seconds).format("DD-MM-YYYY, hh:mm")}
        </Text>
      </View>
    </>
  );

  const TextCompo = ({ item }) => (
    <>
      <AppText>{item.message}</AppText>
      <View style={styles.footer}>
        <Text
          style={{
            alignSelf: "flex-start",
            color: colors.dark,
            marginRight: 15,
            width: "60%",
          }}
          numberOfLines={1}
        >
          {item.sender.name} : {item.receiver?.join(", ")}
        </Text>
        <Text
          style={{
            alignSelf: "flex-end",
            color: colors.dark,
            marginRight: 15,
          }}
        >
          {moment(item.dateCreated.seconds).format("DD-MM-YYYY, hh:mm")}
        </Text>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <LoadingSceen />
      ) : (
        <FlatList
          data={data.data}
          style={{ flex: 1, width: "100%" }}
          keyExtractor={(item) => item.dateCreated}
          renderItem={({ item }) => {
            if (item.type === "card") return <Card item={item} />;
            if (item.type === "link") return <Link item={item} />;
            if (item.type === "text") return <TextCompo item={item} />;
          }}
          ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
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
