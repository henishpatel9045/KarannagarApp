import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import AppCard from "../components/AppCard";
import AppLink from "../components/AppLink";
import AppText from "../components/AppText";

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
    text: "Flipkart",
    url: "https://www.flipkart.com/",
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
    type: "text",
    text: "Hey man just testing the app.",
  },
  {
    id: 9,
    type: "text",
    text: "Its working fine.",
  },
  {
    id: 10,
    type: "text",
    text: "Now i have found a bug.",
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
    text: "હેનીશ પટેલ",
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
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          if (item.type === "card")
            return (
              <AppCard
                title={item.title}
                sender={item.sender}
                reciever={item.reciever}
                message={item.message}
                dateTime={item.dateTIme}
                image={item.image}
              />
            );
          if (item.type === "link")
            return <AppLink text={item.text} link={item.url} />;
          if (item.type === "text") return <AppText>{item.text}</AppText>;
        }}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
}
