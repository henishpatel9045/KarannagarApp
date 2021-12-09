import React from "react";
import { TouchableOpacity } from "react-native";
import { SocialIcon } from "react-native-elements";

export default function SocialMediaIcon({
  name,
  title,
  onPress,
  ...otherProps
}) {
  return (
    <SocialIcon
      type={name}
      raised={true}
      title={title}
      button={true}
      onPress={onPress}
      fontStyle={{ fontSize: 18 }}
      fontFamily="Roboto"
      Component={TouchableOpacity}
      {...otherProps}
    />
  );
}
