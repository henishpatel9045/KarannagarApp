import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import colors from "../configs/colors";

const chartConfig = {
  backgroundGradientFrom: colors.secondary,
  backgroundGradientFromOpacity: 0.3,
  backgroundGradientTo: colors.secondary,
  backgroundGradientToOpacity: 0.3,
  color: () => "white",
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,

  useShadowColorFromDataset: false, // optional
};

export default function BarGraph({ data }) {
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
      <BarChart
        style={styles.graphStyle}
        data={data}
        height={280}
        width={Dimensions.get("window").width}
        yAxisLabel="$"
        showValuesOnTopOfBars={true}
        withInnerLines={false}
        chartConfig={chartConfig}
        verticalLabelRotation={0}
      />
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
    height: 290,
  },
  graphStyle: {},
  statDesc: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
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
