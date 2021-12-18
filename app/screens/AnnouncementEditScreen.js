import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
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
import colors from "../configs/colors";
import AppButton from "../components/AppButton";
import AppFormButton from "../components/forms/AppFormButton";
import staticAppData from "../configs/staticAppData";
import { setAnnouncements } from "../api/firebase";
import LottieView from "lottie-react-native";

const choices = ["card", "link", "text"];
const areaName = staticAppData.area;

export default function AnnouncementEditScreen() {
  const [choice, setchoice] = useState([]);
  const [uploadLoading, setUploadLoading] = useState(false);
  const Card = () => (
    <AppForm
      values={{
        title: "",
        receiver: [],
        message: "",
        image: null,
      }}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      style={styles.form}
    >
      <AppInput
        placeholder="Title"
        width="93%"
        multiselect
        name="title"
        radius={50}
        size="large"
        style={{ marginBottom: 15 }}
      />
      <AppSelece
        multiselect={true}
        data={areaName}
        name="receiver"
        size="large"
        style={{ marginBottom: 15, width: "93%" }}
      />

      <AppInput
        placeholder="Message"
        radius={50}
        multiline={true}
        width="93%"
        name="message"
        size="large"
        textStyle={{ minHeight: 64 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          marginTop: 15,
        }}
      >
        <AppButton
          title="Clear Form"
          width="40%"
          radius={15}
          color="tomato"
          size={20}
          onPress={() => handleClear()}
        />
        <AppFormButton
          title="POST"
          width="40%"
          size={20}
          color={colors.primary}
          radius={15}
        />
      </View>
    </AppForm>
  );

  const Link = () => (
    <AppForm
      values={{
        title: "",
        receiver: [],
        url: "",
      }}
      onSubmit={(values) => {
        return;
      }}
      style={styles.form}
    >
      <AppInput
        placeholder="Title"
        radius={50}
        width="93%"
        name="title"
        size="large"
        style={{ marginBottom: 15 }}
      />

      <AppSelece
        data={areaName}
        name="receiver"
        multiselect={true}
        size="large"
        style={{ marginBottom: 15, width: "93%" }}
      />
      <AppInput
        placeholder="URL"
        radius={50}
        width="93%"
        name="message"
        size="large"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          marginTop: 15,
        }}
      >
        <AppButton
          title="Clear Form"
          width="40%"
          radius={15}
          color="tomato"
          size={20}
        />
        <AppFormButton
          title="POST"
          width="40%"
          size={20}
          color={colors.primary}
          radius={15}
        />
      </View>
    </AppForm>
  );

  const TextCompo = () => (
    <AppForm
      values={{
        title: "",
        receiver: [],
        message: "",
      }}
      onSubmit={(values) => {
        return;
      }}
      style={styles.form}
    >
      <AppSelece
        multiselect={true}
        data={areaName}
        name="receiver"
        size="large"
        style={{ marginBottom: 15, width: "93%" }}
      />
      <AppInput
        placeholder="Message"
        radius={50}
        multiline={true}
        width="93%"
        name="message"
        size="large"
        textStyle={{ minHeight: 64 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          marginTop: 15,
        }}
      >
        <AppButton
          title="Clear Form"
          width="40%"
          radius={15}
          color="tomato"
          size={20}
        />
        <AppFormButton
          title="POST"
          width="40%"
          size={20}
          color={colors.primary}
          radius={15}
        />
      </View>
    </AppForm>
  );

  const handleSubmit = async (values) => {
    const type = choices[choice.row];
    let receiverFinal = [];
    values.receiver.forEach((element) => {
      receiverFinal.push(areaName[element.row]);
    });
    setUploadLoading(true);
    await setAnnouncements({
      ...values,
      receiver: receiverFinal,
      type: choices[choice.row],
    });
  };

  const handleClear = () => {
    return;
  };

  return (
    <Layout style={styles.container}>
      <Select
        onSelect={setchoice}
        selectedIndex={choice}
        value={choices[choice.row]}
        style={styles.select}
        size="large"
        placeholder="Select Template"
      >
        {choices.map((item) => (
          <SelectItem title={item} key={item} />
        ))}
      </Select>

      {choice.row === 0 && <Card />}
      {choice.row === 1 && <Link />}
      {choice.row === 2 && <TextCompo />}
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    flex: 1,
  },
  select: {
    width: "50%",
    backgroundColor: colors.primary,
    elevation: 30,
    top: 10,
    alignSelf: "center",
    borderRadius: 20,
  },
  form: {
    backgroundColor: colors.gray,
    shadowColor: colors.dark,
    elevation: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    alignSelf: "center",
    top: 50,
    paddingVertical: 25,
    width: "90%",
  },
});
