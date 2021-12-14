import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { getAnnouncements } from "../api/firebase";
import AppCard from "../components/AppCard";
import AppLink from "../components/AppLink";
import AppText from "../components/AppText";
import colors from "../configs/colors";
import useApiRef from "../hooks/useApiRef";

export default function AnnouncementScreen() {
  const [data, setdata] = useState([]);

  const [refreshing, setrefreshing] = useState(false);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          if (item.type === "card")
            return (
              <>
                <AppCard
                  title={item.title}
                  sender={item.sender}
                  reciever={item.reciever}
                  message={item.message}
                  dateTime={item.dateTIme}
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
                    {item.sender} : {item.reciever}
                  </Text>
                  <Text
                    style={{
                      alignSelf: "flex-end",
                      color: colors.dark,
                      marginRight: 15,
                    }}
                  >
                    {item.dateTIme}
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
                    {item.sender} : {item.reciever}
                  </Text>
                  <Text
                    style={{
                      alignSelf: "flex-end",
                      color: colors.dark,
                      marginRight: 15,
                    }}
                  >
                    {item.dateTIme}
                  </Text>
                </View>
              </>
            );
          if (item.type === "text")
            return (
              <>
                <AppText>{item.message}</AppText>
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
                    }}
                  >
                    {item.sender} : {item.reciever}
                  </Text>
                  <Text
                    style={{
                      alignSelf: "flex-end",
                      color: colors.dark,
                    }}
                  >
                    {item.dateTIme}
                  </Text>
                </View>
              </>
            );
        }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              alignItems: "center",
              alignSelf: "center",
              borderTopColor: colors.gray,
              borderWidth: 1,
              marginVertical: 15,
              justifyContent: "center",
              width: "90%",
            }}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => setdata([messages[1]])}
      />
    </View>
  );
}
