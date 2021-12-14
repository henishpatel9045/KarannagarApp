import moment from "moment";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../configs/colors";

export default function DateTagMessage({ date }) {
  let days = moment(new Date().toDateString()).diff(moment(date), "days");
  date = moment(date).format("DD-MM-YYYY");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {days === 0 ? "Today" : days === 1 ? "Yesterday" : date}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    padding: 10,
  },
  title: {
    color: colors.dark,
  },
});
