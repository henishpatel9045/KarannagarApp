import { useFormikContext } from "formik";
import React from "react";

import AppButton from "../AppButton";

export default function AppFormButton({ title, width, size, color, radius }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      onPress={() => {
        handleSubmit();
      }}
      width={width}
      radius={radius}
      size={size}
      color={color}
    ></AppButton>
  );
}
