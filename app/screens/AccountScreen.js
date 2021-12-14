import React, { useState } from "react";
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
        component={<Image source={image} style={styles.roundImage} />}
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
    subTitle: 0,
    navName: "UserAnn",
    color: "#f09009",
  },
  {
    icon: "medical-bag",
    title: "Emergencies",
    subTitle: 0,
    navName: "UserEmer",
    color: "tomato",
  },
  {
    icon: "poll",
    title: "Polls",
    subTitle: 0,
    navName: "UserPolls",
    color: "#03c860",
  },
];

export default function AccountScreen({ navigation }) {
  const [data, setdata] = useState(menuList);
  return (
    <View style={styles.container}>
      <ImageListItem
        image={require("../assets/dp.jpg")}
        title={"Henish Patel"}
        subTitle={"ompatel9045@gmail.com"}
        onPress={() => console.log()}
      />
      <View style={{ height: 20 }} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.title.toString()}
        renderItem={({ item }) => (
          <IconListItem
            name={item.icon}
            title={item.title}
            subTitle={item.subTitle}
            onPress={() => navigation.navigate(item.navName)}
            color={"white"}
            bgColor={item.color}
          />
        )}
      />
      <View style={{ height: 20 }} />
      <IconListItem
        name={"logout"}
        title={"LogOut"}
        onPress={() => console.log()}
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
