import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import AppCard from "../components/AppCard";

const messages = [
  {
    id: 1,
    title: "WaterDepartment",
    sender: "Sarpanch",
    reciever: "Vadipati",
    message: "Only for two hours",
    dateTIme: new Date().toLocaleString(),
    image: require("../assets/logn.jpg"),
  },
  {
    id: 2,
    title: "ElectricityRelated",
    sender: "HenishPatel",
    reciever: "Khadki",
    message: "Light CutDown",
    dateTIme: new Date().toLocaleString(),
  },
  {
    id: 3,
    title: "Event",
    sender: "SPG",
    reciever: "Vadipati",
    message: "Need 25 mens on 12th December",
    dateTIme: new Date().toLocaleString(),
    image: require("../assets/logn.jpg"),
  },
  {
    id: 4,
    title: "WaterDepartment",
    sender: "Sarpanch",
    reciever: "Vadipati",
    message: "Only for two hours",
    dateTIme: new Date().toLocaleString(),
    image: require("../assets/logn.jpg"),
  },
  {
    id: 5,
    title: "ElectricityRelated",
    sender: "HenishPatel",
    reciever: "Khadki",
    message: "Light CutDown",
    dateTIme: new Date().toLocaleString(),
  },
  {
    id: 6,
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
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            sender={item.sender}
            reciever={item.reciever}
            message={item.message}
            dateTime={item.dateTIme}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
}
