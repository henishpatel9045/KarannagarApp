import React, { useState } from "react";
import { View } from "react-native";
import {
  Text,
  Layout,
  IndexPath,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import AppSelece from "../components/forms/AppSelece";
import AppForm from "../components/forms/AppForm";
import { useFormikContext } from "formik";
import AppInput from "../components/forms/AppInput";

const choices = ["card", "link", "text"];

export default function AnnouncementEditScreen() {
  const [choice, setchoice] = useState("");
  return (
    <Layout>
      <Select
        onSelect={setchoice}
        selectedIndex={choice}
        value={choices[choice.row]}
      >
        {choices.map((item) => (
          <SelectItem title={item} key={item} />
        ))}
      </Select>

      {choice.row === 0 && (
        <AppForm
          values={{
            title: "",
            sender: "",
            receiver: "",
            message: "",
            date: "",
          }}
        >
          <AppInput label="Title" placeholder width="93%" name="title" />
          <AppInput label="Sender" placeholder width="93%" name="sender" />
          <AppInput label="Reciever" placeholder width="93%" name="receiver" />
          <AppInput label="Message" placeholder width="93%" name="message" />
        </AppForm>
      )}
    </Layout>
  );
}
