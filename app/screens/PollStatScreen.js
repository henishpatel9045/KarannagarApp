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
      <BarGraph data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
});
