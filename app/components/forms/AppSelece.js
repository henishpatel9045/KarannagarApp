import { Select, SelectItem } from "@ui-kitten/components";
import { useFormikContext } from "formik";
import React from "react";
import { View } from "react-native";
import AppErrorMessage from "./AppErrorMessage";

export default function AppSelece({ data, name = "", style, size }) {
  const { setFieldValue, values, setFieldTouched, touched, errors } =
    useFormikContext();
  return (
    <View style={style}>
      <Select
        selectedIndex={values[name]}
        onSelect={(index) => setFieldValue(name, index)}
        value={data[values.row]}
        placeholder={name.toUpperCase()}
        onBlur={() => setFieldTouched(name)}
        size={size}
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
