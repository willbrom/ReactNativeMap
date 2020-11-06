import React from "react";
import { Text, TouchableHighlight } from "react-native";

export default function RadioTab(props) {
  return (
    <TouchableHighlight
      underlayColor="#3BA9E5"
      style={[
        {
          height: 30,
          width: 50,
          backgroundColor: props.selected ? "#3BA9E5" : "#7E8386",
          borderColor: "#000",
          borderRadius: 5,
          borderWidth: 0,
          alignItems: "center",
          justifyContent: "center",
        },
        props.style,
      ]}
      onPress={props.radioTabPressed}
    >
      <Text style={{ fontSize: 10 }}>{props.title}</Text>
    </TouchableHighlight>
  );
}
