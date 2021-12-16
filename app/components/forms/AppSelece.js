import { Select, SelectItem } from "@ui-kitten/components";
import { useFormikContext } from "formik";
import React from "react";
import { View } from "react-native";
import AppErrorMessage from "./AppErrorMessage";

export default function AppSelece({
  data,
  name = "",
  style,
  size,
  multiselect,
}) {
  const { setFieldValue, values, setFieldTouched, touched, errors } =
    useFormikContext();
  const displayOptions = values[name].map((index) => {
    return data[index.row];
  });
  return (
    <View style={style}>
      <Select
        multiSelect={multiselect}
        style={{ width: "100%" }}
        selectedIndex={values[name]}
        onSelect={(index) => setFieldValue(name, index)}
        value={displayOptions.join(", ")}
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
