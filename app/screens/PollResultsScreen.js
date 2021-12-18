import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PollResultCard from "../components/PollResultCard";

export default function PollResultsScreen() {
  return (
    <View>
      <PollResultCard
        title="What's your name?"
        subtitle="Henish"
        onPress={() => {
          return;
        }}
        style={{ width: "90%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
