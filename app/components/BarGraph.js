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

export default function BarGraph({ data, style }) {
  return (
    <View style={styles.container}>
      <BarChart
        style={[styles.graphStyle, style]}
        data={data}
        height={280}
        width={Dimensions.get("window").width * 0.95}
        yAxisLabel="$"
        showValuesOnTopOfBars={true}
        withInnerLines={false}
        chartConfig={chartConfig}
        verticalLabelRotation={0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 290,
    borderRadius: 10,
    alignItems: "center",
  },
  graphStyle: {
    borderRadius: 10,
  },
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
