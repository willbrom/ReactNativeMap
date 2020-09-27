import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

import { Searchbar, Banner, Button } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [visible, setVisible] = useState(true);
  let searchRef = React.createRef();

  const mapRegion = {
    latitude: 21.4228,
    longitude: 39.825363,
    latitudeDelta: 1,
    longitudeDelta: 1,
  };

  const markers = [
    {
      key: 1,
      title: "2003",
      description: "status: up",
      latlng: { latitude: 21.420087, longitude: 39.828325 },
    },
    {
      key: 2,
      title: "1923",
      description: "status: down",
      latlng: { latitude: 21.429042, longitude: 39.832721 },
    },
    {
      key: 3,
      title: "3123",
      description: "status: down",
      latlng: { latitude: 21.42631, longitude: 39.819262 },
    },
    {
      key: 4,
      title: "4213",
      description: "status: up",
      latlng: { latitude: 21.422033, longitude: 39.826677 },
    },
    {
      key: 5,
      title: "2132",
      description: "status: up",
      latlng: { latitude: 21.385234, longitude: 39.764184 },
    },
    {
      key: 6,
      title: "2311",
      description: "status: down",
      latlng: { latitude: 21.350818, longitude: 39.803525 },
    },
    {
      key: 7,
      title: "6131",
      description: "status: up",
      latlng: { latitude: 21.359551, longitude: 39.87371 },
    },
    {
      key: 8,
      title: "2134",
      description: "status: up",
      latlng: { latitude: 21.455801, longitude: 39.807876 },
    },
    {
      key: 9,
      title: "5231",
      description: "status: up",
      latlng: { latitude: 21.454688, longitude: 39.812666 },
    },
    {
      key: 10,
      title: "3213",
      description: "status: up",
      latlng: { latitude: 21.440646, longitude: 39.839242 },
    },
  ];

  return (
    <View style={styles.container}>
      <Banner
        visible={visible}
        actions={[
          {
            label: "Fix it",
            onPress: () => setVisible(false),
          },
          {
            label: "Learn more",
            onPress: () => setVisible(false),
          },
        ]}
      >
        <Text>Hello</Text>
        <Icon name="rocket" size={30} color="#900" />
      </Banner>

      <Searchbar
        style={styles.searchbar}
        ref={(r) => (searchRef = r)}
        placeholder="Search"
        value={searchValue}
        onChangeText={(query) => setSearchValue(query)}
      />

      <MapView
        style={styles.mapStyle}
        region={mapRegion}
        onPress={() => searchRef.blur()}
      >
        {markers.map((marker) => {
          return (
            <Marker
              key={marker.key}
              title={marker.title}
              description={marker.description}
              coordinate={marker.latlng}
            />
          );
        })}
      </MapView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchbar: {},
});
