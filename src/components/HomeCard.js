import React from "react";
import { Text, View, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { styles } from "../styles/style";

export default function HomeCard(props) {
  return (
    <TouchableHighlight
      style={styles.homeCard}
      underlayColor="#3BA9E5"
      onPress={() => props.navigate(props.item.path)}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Icon name={props.item.icon} size={45} color="white" />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textTransform: "capitalize",
            color: "white",
          }}
        >
          {props.item.title}
        </Text>
      </View>
    </TouchableHighlight>
  );
}
