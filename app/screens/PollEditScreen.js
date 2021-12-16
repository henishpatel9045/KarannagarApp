import { Input, Layout, Select } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import AppPollOptionEdit from "../components/AppPollOptionEdit";
import AppForm from "../components/forms/AppForm";
import AppFormButton from "../components/forms/AppFormButton";
import AppInput from "../components/forms/AppInput";
import AppSelece from "../components/forms/AppSelece";
import colors from "../configs/colors";
import staticAppData from "../configs/staticAppData";

const areaName = staticAppData.area;

export default function PollEditScreen() {
  const [totalOptions, setoptions] = useState(0);

  let optionsComponent = [];
  for (let i = 0; i < totalOptions; i++) {
    optionsComponent.push(
      <AppPollOptionEdit
        style={styles.option}
        name="options"
        optionNum={i}
        key={i}
      />
    );
  }

  return (
    <AppForm
      values={{ receiver: [], question: "", options: [] }}
      style={styles.container}
      onSubmit={(values) => console.log(values)}
    >
      <AppSelece
        data={areaName}
        multiselect
        size="large"
        name="receiver"
        style={styles.receiver}
      />
      <AppInput
        placeholder="Question"
        name="question"
        width="90%"
        style={styles.question}
      />
      {optionsComponent}
      <View style={styles.footer}>
        <AppButton
          title="AddOption"
          color={colors.primary}
          radius={10}
          onPress={() => {
            totalOptions < 10 ? setoptions(totalOptions + 1) : null;
          }}
          width="30%"
        />
        <AppFormButton
          title="Post"
          color={colors.primary}
          radius={10}
          width="30%"
        />
      </View>
    </AppForm>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  receiver: {
    width: "80%",
    marginVertical: 20,
  },
  question: {},
  option: {
    width: "65%",
    marginVertical: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "90%",
    marginTop: 20,
    zIndex: -2,
  },
});
