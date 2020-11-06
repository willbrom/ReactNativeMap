import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function CheckBox(props) {
  return (
    <View
      style={[
        {
          height: 20,
          width: 20,
          borderRadius: 4,
          borderWidth: 2,
          borderColor: "#000",
          alignItems: "center",
          justifyContent: "center",
        },
        props.style,
      ]}
    >
      {props.selected ? <Icon name="check" size={16} color="#3BA9E5" /> : null}
    </View>
  );
}
