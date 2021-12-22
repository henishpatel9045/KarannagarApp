import React, { useState, useEffect, useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import colors from "../configs/colors";
import useApiRef from "../hooks/useApiRef";
import { getUserGenerations } from "../api/firebase";
import useStorage from "../auth/useStorage";
import AuthContext from "../auth/context";

const RoundComponent = ({ component, width, color }) => (
  <View
    style={[
      styles.roundComponent,
      {
        backgroundColor: color,
        borderRadius: width * 2,
        height: width,
        width: width,
      },
    ]}
  >
    {component}
  </View>
);
const RoundIconComponent = ({ component, width, color }) => (
  <View
    style={[
      styles.roundIconComponent,
      {
        backgroundColor: color,
        borderRadius: width * 2,
        height: width,
        width: width,
      },
    ]}
  >
    {component}
  </View>
);

const IconListItem = ({
  name,
  title,
  subTitle,
  color,
  onPress,
  logOut = false,
  bgColor,
  style,
}) => (
  <TouchableHighlight onPress={onPress} style={style}>
    <View style={[styles.listItem]}>
      <RoundIconComponent
        component={
          <MaterialCommunityIcons name={name} size={25} color={color} />
        }
        width={50}
        color={bgColor}
      />

      <View style={styles.description}>
        <Text style={[styles.listItemHeader, { fontSize: 16 }]}>{title}</Text>
        {!logOut && <Text>{subTitle}</Text>}
      </View>
      <MaterialCommunityIcons
        style={styles.arrowRight}
        name="arrow-right"
        size={25}
        color={colors.dark}
      />
    </View>
  </TouchableHighlight>
);

const ImageListItem = ({ image, title, subTitle, onPress, bgColor }) => (
  <TouchableHighlight onPress={onPress} underlayColor={"white"}>
    <View style={[styles.listItem]}>
      <RoundComponent
        component={<Image source={{ uri: image }} style={styles.roundImage} />}
        width={70}
      />

      <View style={styles.description}>
        <Text style={styles.listItemHeader}>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
      <MaterialCommunityIcons
        style={styles.arrowRight}
        name="arrow-right"
        size={25}
        color={colors.dark}
      />
    </View>
  </TouchableHighlight>
);

const menuList = [
  {
    icon: "android-messages",
    title: "Announcements",
    navName: "UserAnn",
    color: "#f09009",
  },
  {
    icon: "medical-bag",
    title: "Emergencies",
    navName: "UserEmer",
    color: "tomato",
  },
  {
    icon: "poll",
    title: "Polls",
    navName: "UserPolls",
    color: "#03c860",
  },
];

export default function AccountScreen({ navigation }) {
  const { currUser, setcurrUser } = useContext(AuthContext);
  const { deleteUser } = useStorage();
  const [userServerData, setuserServerData] = useState();

  getUserGenerations(currUser.email).then((res) => setuserServerData(res.data));

  const [data, setdata] = useState(menuList);
  const mainData = [
    userServerData?.announcements,
    userServerData?.emergencies,
    userServerData?.polls,
  ];
  let totals = [
    userServerData?.announcements.length,
    userServerData?.emergencies.length,
    userServerData?.polls.length,
  ];

  return (
    <View style={styles.container}>
      <ImageListItem
        image={currUser.picture}
        title={currUser.name}
        subTitle={currUser.email}
        onPress={() => {
          return;
        }}
      />
      <View style={{ height: 20 }} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.title.toString()}
        renderItem={({ item, index }) => {
          return (
            <IconListItem
              name={item.icon}
              title={item.title}
              subTitle={totals[index]}
              onPress={() =>
                navigation.navigate(item.navName, { data: mainData[index] })
              }
              color={"white"}
              bgColor={item.color}
            />
          );
        }}
      />
      <View style={{ height: 20 }} />
      <IconListItem
        name={"logout"}
        title={"LogOut"}
        onPress={() => {
          deleteUser();
          setcurrUser(false);
        }}
        logOut
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ededed",
    flex: 1,
  },
  roundComponent: {
    overflow: "hidden",
  },
  roundIconComponent: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: 10,
  },
  roundImage: {
    width: 70,
    height: 70,
  },
  listItem: {
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
  },
  listItemHeader: { fontSize: 20, fontWeight: "bold" },
  description: {
    marginHorizontal: 10,
    flex: 1,
    justifyContent: "center",
  },
});
