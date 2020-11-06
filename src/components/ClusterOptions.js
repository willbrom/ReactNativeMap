import React from "react";
import { Text, TouchableHighlight } from "react-native";
import { Searchbar } from "react-native-paper";

import RadioButton from "./RadioButton";
import CheckBox from "./CheckBox";

export default function ClusterOptions(props) {
  if (props.section == "vendor") return <VendorOptionSection />;
  else if (props.section == "area") return <AreaOptionSection />;
  else return <LacOptionSection />;
}

function VendorOptionSection(props) {
  return (
    <>
      <TouchableHighlight
        underlayColor="#ffffff00"
        style={{
          flexDirection: "row",
          paddingVertical: 5,
          alignItems: "center",
        }}
        onPress={() => console.log("All")}
      >
        <>
          <RadioButton selected={true} />
          <Text style={{ marginLeft: 5 }}>All</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#ffffff00"
        style={{
          flexDirection: "row",
          paddingVertical: 5,
          alignItems: "center",
        }}
        onPress={() => console.log("Ericsson")}
      >
        <>
          <RadioButton />
          <Text style={{ marginLeft: 5 }}>Ericsson</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#ffffff00"
        style={{
          flexDirection: "row",
          paddingVertical: 5,
          alignItems: "center",
        }}
        onPress={() => console.log("Nokia")}
      >
        <>
          <RadioButton />
          <Text style={{ marginLeft: 5 }}>Nokia</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#ffffff00"
        style={{
          flexDirection: "row",
          paddingVertical: 5,
          alignItems: "center",
        }}
        onPress={() => console.log("Huawei")}
      >
        <>
          <RadioButton />
          <Text style={{ marginLeft: 5 }}>Huawei</Text>
        </>
      </TouchableHighlight>
    </>
  );
}

function AreaOptionSection(props) {
  return (
    <>
      <Searchbar
        placeholder="Search"
        style={{ marginBottom: 12, width: 250, alignSelf: "center" }}
      />
      <TouchableHighlight
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 5,
        }}
      >
        <>
          <CheckBox />
          <Text style={{ marginLeft: 5 }}>All</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 5,
        }}
      >
        <>
          <CheckBox selected={true} />
          <Text style={{ marginLeft: 5 }}>Makkah</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 5,
        }}
      >
        <>
          <CheckBox selected={true} />
          <Text style={{ marginLeft: 5 }}>Jeddah</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 5,
        }}
      >
        <>
          <CheckBox />
          <Text style={{ marginLeft: 5 }}>Taif</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 5,
        }}
      >
        <>
          <CheckBox />
          <Text style={{ marginLeft: 5 }}>Qunfudah</Text>
        </>
      </TouchableHighlight>
    </>
  );
}

function LacOptionSection(props) {
  return <Text>LAC</Text>;
}
