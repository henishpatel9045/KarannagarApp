import { Select, SelectItem } from "@ui-kitten/components";
import { useFormikContext } from "formik";
import React from "react";
import { View, Text } from "react-native";
import AppErrorMessage from "./AppErrorMessage";

export default function AppSelece({ data, name }) {
  const { setFieldValue, values, setFieldTouched, touched, errors } =
    useFormikContext();
  return (
    <View>
      <Select
        selectedIndex={values[name]}
        onSelect={(index) => setFieldValue(name, index)}
        value={data[values[name].row]}
        onBlur={() => setFieldTouched(name)}
        // value={data[values["area"].rows]}
      >
        {data.map((item) => (
          <SelectItem title={item} key={item} />
        ))}
      </Select>
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}
