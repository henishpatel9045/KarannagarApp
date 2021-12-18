import { Divider, Layout, List } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "@ui-kitten/components";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import * as Linking from "expo-linking";

import colors from "../configs/colors";
import IconDetail from "../components/IconDetail";
import EmergencyMessage from "../components/EmergencyMessage";
import { ErrorMessage } from "formik";
import useApiRef from "../hooks/useApiRef";
import { getEmergencies } from "../api/firebase";
import moment from "moment";
import { FlatList } from "react-native-gesture-handler";
import staticAppData from "../configs/staticAppData";
import { Overlay } from "react-native-elements";
import AppButton from "../components/AppButton";
import useLocation from "../hooks/useLocation";

const iconsList = staticAppData.emerIconList;
const emergencies = ["Fire", "Robbery", "Police", "Accident", "CanalAccident"];

export default function EmergencyScreen() {
  const { data, loading, request } = useApiRef(getEmergencies);
  const [overlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    request();
  }, []);

  const handleSubmit = (item) => {
    console.log(item);
  };

  const CallOverLay = () => (
    <Overlay
      isVisible={overlayVisible}
      onBackdropPress={() => setOverlayVisible(false)}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <AppButton
          style={{ width: "45%" }}
          title={"108"}
          txtColor={colors.dark}
          color={"white"}
          size={50}
          onPress={() => Linking.openURL("tel:108")}
        />
        <AppButton
          style={{ width: "45%" }}
          txtColor={colors.dark}
          size={30}
          color={"white"}
          title={"Local"}
          onPress={() => Linking.openURL("tel:+919925320460")}
        />
      </View>
    </Overlay>
  );
  const renderItem = (info) => {
    return (
      <EmergencyMessage
        Pack={MaterialCommunityIcons}
        iconName={iconsList[info.title]}
        title={info.title}
        sender={`${info.sender.firstName} ${info.sender.lastName}`}
        dateTime={moment(info.dateCreated.seconds).format("DD-MM, hh:mm:ss")}
        location={info.location}
        pnno={info.sender.phoneNo}
      />
    );
  };
  return (
    <Layout style={styles.container}>
      <View style={styles.outerSOS}>
        <TouchableOpacity
          onPress={() =>
            Alert.alert("Alert", "Are you sure?", [
              { text: "Ok", onPress: () => handleSubmit(true) },
              {
                text: "Cancle",
                onPress: () => {
                  return;
                },
              },
            ])
          }
          style={styles.innerSOS}
        >
          <Text style={styles.txtSOS}>SOS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.emergencyChooser}>
        {emergencies.map((emerType) => (
          <TouchableHighlight
            key={emerType}
            onPress={() => {
              Alert.alert("Alert", "Are you sure?", [
                { text: "Ok", onPress: () => handleSubmit(true) },
                {
                  text: "Cancle",
                  onPress: () => {
                    return;
                  },
                },
              ]);
            }}
            style={styles.emergencyIcons}
            underlayColor="rgba(61, 104, 255, 0.5)"
          >
            <IconDetail
              Pack={MaterialCommunityIcons}
              name={iconsList[emerType]}
              size={25}
              color={colors.primary}
              text={emerType}
            />
          </TouchableHighlight>
        ))}
        <TouchableHighlight
          onPress={() => {
            setOverlayVisible(true);
          }}
          style={styles.emergencyIcons}
          underlayColor="rgba(61, 104, 255, 0.5)"
        >
          <>
            <IconDetail
              Pack={MaterialCommunityIcons}
              name={iconsList["Ambulance"]}
              size={25}
              color={colors.primary}
              text={"Ambulance"}
            />

            <CallOverLay />
          </>
        </TouchableHighlight>
      </View>
      <View style={styles.emergenctMessageList}>
        <Text style={styles.emergenctMessageListTitle}>Emergency Messages</Text>
        <Divider style={{ marginTop: 30 }} />
        <FlatList
          data={data.data}
          keyExtractor={(item) => item.dateCreated.seconds}
          renderItem={({ item }) => renderItem(item)}
          ItemSeparatorComponent={Divider}
        />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  txtSOS: {
    fontSize: 50,
    color: colors.primary,
    fontWeight: "bold",
  },
  innerSOS: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 80,
    borderWidth: 10,
    borderColor: "rgba(255, 255, 255, 0.5)",
    height: 150,
    justifyContent: "center",
    width: 150,
  },
  outerSOS: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 100,
    height: 170,
    justifyContent: "center",
    top: 40,
    width: 170,
  },
  emergencyChooser: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: 15,
    top: 55,

    width: "90%",
  },
  emergencyIcons: {
    borderRadius: 10,
    minWidth: 70,
    padding: 10,
  },
  emergenctMessageList: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 20,
    padding: 15,
    width: "90%",
    position: "absolute",
    bottom: -10,
    height: 300,
  },
  emergenctMessageListTitle: {
    position: "absolute",
    top: 10,
    left: 15,
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    textShadowColor: colors.primary,
    textShadowRadius: 2,
  },
});
