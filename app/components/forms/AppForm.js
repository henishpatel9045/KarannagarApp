import React from "react";
import { View, Text } from "react-native";
import { Formik } from "formik";

export default function AppForm({
  values,
  validationSchema,
  onSubmit,
  children,
  style,
  ...otherProps
}) {
  return (
    <Formik
      initialValues={values}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      {...otherProps}
    >
      {() => <View style={style}>{children}</View>}
    </Formik>
  );
}
