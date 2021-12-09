import React from "react";
import { View, Text } from "react-native";
import { useFormikContext } from "formik";
import AppErrorMessage from "./AppErrorMessage";

import Input from "../Input";

export default function AppInput({
  name,
  placeholder,
  rightComponent,
  leftComponent,
  width,
  secureTextEntry,
  style,
  ...otherProps
}) {
  const { errors, handleChange, touched, setFieldTouched } = useFormikContext();

  return (
    <View style={[{ width: width ? width : "95%" }, style]}>
      <Input
        placeholder={placeholder}
        rightComponent={rightComponent}
        leftComponent={leftComponent}
        onChangeText={handleChange(name)}
        width="100%"
        secureTextEntry={secureTextEntry}
        caption={
          <AppErrorMessage error={errors[name]} visible={touched[name]} />
        }
        onBlur={(name) => setFieldTouched(name)}
        {...otherProps}
      />
    </View>
  );
}
