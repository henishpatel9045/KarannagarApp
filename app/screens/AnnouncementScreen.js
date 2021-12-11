import { Divider } from "@ui-kitten/components";
import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import AppCard from "../components/AppCard";
import AppLink from "../components/AppLink";
import AppText from "../components/AppText";
import colors from "../configs/colors";

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

export default function AnnouncementScreen() {
  const [data, setdata] = useState(messages);
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
                  image={item.image}
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
