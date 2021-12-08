import React from "react";
import { View, Text } from "react-native";
import { Input } from "@ui-kitten/components";
import { useFormikContext } from "formik";
import AppErrorMessage from "./AppErrorMessage";

export default function AppInput({
  label,
  name,
  placeholder,
  rightComponent,
  leftComponent,
  width,
  ...otherProps
}) {
  const { errors, handleChange, touched, setFieldTouched } = useFormikContext();

  return (
    <View style={{ width: width ? width : "95%" }}>
      <Input
        label={placeholder ? "" : label}
        placeholder={placeholder ? label : " "}
        accessoryRight={rightComponent}
        accessoryLeft={leftComponent}
        onChangeText={handleChange(name)}
        caption={() => (
          <AppErrorMessage error={errors[name]} visible={touched[name]} />
        )}
        onBlur={(name) => setFieldTouched(name)}
        {...otherProps}
      />
    </View>
  );
}
