import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BarGraph from "../components/BarGraph";
import colors from "../configs/colors";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 5, // optional
    },
  ],
  legend: ["Rainy Days"], // optional
};

export default function PollStatScreen() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
          fontSize: 22,
          fontWeight: "bold",
          margin: 10,
          marginVertical: 25,
          textShadowColor: colors.primary,
          textShadowRadius: 1,
        }}
      >
        What's your name?
      </Text>
      <BarGraph data={data} style={{ elevation: 10, padding: 15 }} />
      <View style={styles.statDesc}>
        <View>
          <Text style={styles.deschead}>Total People Responded</Text>
          <Text style={styles.deschead}>Receiver Area</Text>
          <Text style={styles.deschead}>Majority Answer</Text>
        </View>
        <View>
          <Text style={styles.descdesc}>232</Text>
          <Text style={styles.descdesc}>Vaiparti</Text>
          <Text style={styles.descdesc}>Henish</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  graphStyle: {},
  statDesc: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
    padding: 10,
    width: "90%",
  },
  deschead: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
  descdesc: {
    fontSize: 16,
  },
});
