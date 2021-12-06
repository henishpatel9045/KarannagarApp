import { Input } from "@ui-kitten/components";
import { useFormikContext } from "formik";
import React from "react";
import { View, Text } from "react-native";

export default function AppPollOptionEdit({ name, optionNum, style }) {
  const { values, setFieldValue } = useFormikContext();
  return (
    <View style={style}>
      <Input
        placeholder={`Option-${optionNum + 1}`}
        onChangeText={(text) => {
          values[name][optionNum] = text;
          setFieldValue(name, values[name]);
        }}
      />
    </View>
  );
}
