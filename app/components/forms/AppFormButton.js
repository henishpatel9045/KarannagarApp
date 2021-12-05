import { Spinner } from "@ui-kitten/components";
import { useFormikContext } from "formik";
import React, { useState } from "react";
import { View, Text } from "react-native";
import AppButton from "../AppButton";

export default function AppFormButton({ title, width, size, color, radius }) {
  const { handleSubmit } = useFormikContext();

  const [spinner, setSpinners] = useState(false);

  return (
    <AppButton
      title={title}
      onPress={() => {
        handleSubmit();
        setSpinners(!spinner);
      }}
      width={width}
      radius={radius}
      size={size}
      color={color}
    >
      {spinner && <Spinner status="danger" style={{ marginRight: 8 }} />}
    </AppButton>
  );
}
