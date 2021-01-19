import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  TouchableHighlight,
  ScrollView,
  FlatList,
  Platform,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Searchbar, FAB, Provider, Portal } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";

import Alarms from "./AlarmScreen";

import HomeCard from "../components/HomeCard";
import RadioButton from "../components/RadioButton";
import RadioTab from "../components/RadioTab";
import ClusterOptions from "../components/ClusterOptions";
import DetailModalView from "../components/DetailModal";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: Platform.OS === "ios" }}
        />
        <Stack.Screen
          name="Alarms"
          component={Alarms}
          options={{ headerShown: Platform.OS === "ios" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  let data = [
    { id: 1, title: "Map", path: "Map", icon: "map" },
    { id: 0, title: "Charts", path: "null", icon: "bar-chart" },
    { id: 2, title: "Alarms", path: "Alarms", icon: "bell" },
    { id: 3, title: "Vendors", path: "null", icon: "connectdevelop" },
  ];

  const navigateTo = (path) => {
    switch (path) {
      case "Map":
        navigation.navigate(path);
        break;
      case "Alarms":
        navigation.navigate(path);
      default:
        break;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <HomeCard item={item} navigate={navigateTo} />
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

function Map({ navigation }) {
  const [searchValue, setSearchValue] = useState("");
  const [visible, setVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const [sitePerformanceRadio, setSitePerformanceRadio] = useState(true);
  const [siteRadio, setSiteRadio] = useState(false);
  const [performanceRadio, setPerformanceRadio] = useState(false);

  const [siteIdRadio, setSiteIdRadio] = useState(true);
  const [areaRadio, setAreaRadio] = useState(false);
  const [nodesRadio, setNodesRadio] = useState(false);

  const [selectedTab, setSelectedTab] = useState("vendor");

  const [fabState, setFabState] = useState(false);

  let searchRef = React.createRef();

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

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

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon
              name="close"
              size={25}
              color="gray"
              style={styles.modalCloseIcon}
              onPress={() => setModalVisible(false)}
            />
            <Text style={styles.optionTitle}>Set options</Text>

            <ScrollView>
              <Text style={{ fontWeight: "600" }}>Display:</Text>
              <View
                style={{
                  width: 170,
                  height: 60,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <TouchableHighlight
                  style={[
                    styles.radioGroup,
                    { width: 105, justifyContent: "flex-start" },
                  ]}
                  underlayColor="#ffffff00"
                  onPress={() => {
                    setSitePerformanceRadio(true);
                    setSiteRadio(false);
                    setPerformanceRadio(false);
                  }}
                >
                  <>
                    <RadioButton selected={sitePerformanceRadio} />
                    <>
                      <Text style={{ fontSize: 10, textAlign: "center" }}>
                        Site &#38;
                      </Text>
                      <Text style={{ fontSize: 10, textAlign: "center" }}>
                        Performance
                      </Text>
                    </>
                  </>
                </TouchableHighlight>
                <TouchableHighlight
                  style={[
                    styles.radioGroup,
                    { width: 100, justifyContent: "flex-start" },
                  ]}
                  underlayColor="#ffffff00"
                  onPress={() => {
                    setSiteRadio(true);
                    setSitePerformanceRadio(false);
                    setPerformanceRadio(false);
                  }}
                >
                  <>
                    <RadioButton selected={siteRadio} />
                    <Text style={{ fontSize: 10 }}>Site</Text>
                  </>
                </TouchableHighlight>
                <TouchableHighlight
                  style={[
                    styles.radioGroup,
                    { width: 100, justifyContent: "flex-start" },
                  ]}
                  underlayColor="#ffffff00"
                  onPress={() => {
                    setPerformanceRadio(true);
                    setSitePerformanceRadio(false);
                    setSiteRadio(false);
                  }}
                >
                  <>
                    <RadioButton selected={performanceRadio} />
                    <Text style={{ fontSize: 10 }}>Performance</Text>
                  </>
                </TouchableHighlight>
              </View>

              <Text style={{ fontWeight: "600" }}>Search for:</Text>
              <View
                style={{
                  width: 170,
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <TouchableHighlight
                  style={styles.radioGroup}
                  underlayColor="#ffffff00"
                  onPress={() => {
                    setSiteIdRadio(true);
                    setAreaRadio(false);
                    setNodesRadio(false);
                  }}
                >
                  <>
                    <RadioButton selected={siteIdRadio} />
                    <Text style={{ fontSize: 10 }}>Site Id</Text>
                  </>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.radioGroup}
                  underlayColor="#ffffff00"
                  onPress={() => {
                    setAreaRadio(true);
                    setSiteIdRadio(false);
                    setNodesRadio(false);
                  }}
                >
                  <>
                    <RadioButton selected={areaRadio} />
                    <Text style={{ fontSize: 10 }}>Area</Text>
                  </>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.radioGroup}
                  underlayColor="#ffffff00"
                  onPress={() => {
                    setNodesRadio(true);
                    setSiteIdRadio(false);
                    setAreaRadio(false);
                  }}
                >
                  <>
                    <RadioButton selected={nodesRadio} />
                    <Text style={{ fontSize: 10 }}>Nodes</Text>
                  </>
                </TouchableHighlight>
              </View>

              <Text style={{ fontWeight: "600" }}>Cluster:</Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 5,
                }}
              >
                <RadioTab
                  title="Vendor"
                  selected={selectedTab == "vendor" ? true : false}
                  radioTabPressed={() => setSelectedTab("vendor")}
                  style={{ marginLeft: 2 }}
                />
                <RadioTab
                  title="Area"
                  selected={selectedTab == "area" ? true : false}
                  radioTabPressed={() => setSelectedTab("area")}
                  style={{ marginLeft: 2 }}
                />
                <RadioTab
                  title="LAC"
                  selected={selectedTab == "lac" ? true : false}
                  radioTabPressed={() => setSelectedTab("lac")}
                  style={{ marginLeft: 2 }}
                />
              </View>

              <ClusterOptions section={selectedTab} />
            </ScrollView>
          </View>
        </View>
      </Modal>

      <DetailModalView
        visible={detailModalVisible}
        close={() => setDetailModalVisible(false)}
      />

      <Provider>
        <Portal>
          <FAB.Group
            fabStyle={{ backgroundColor: "#3BA9E5" }}
            color="white"
            icon={fabState ? "map" : "plus"}
            open={fabState}
            actions={[
              {
                icon: "chart-arc",
                label: "Details",
                onPress: () => setDetailModalVisible(true),
              },
              {
                icon: "settings",
                label: "Settings",
                onPress: () => setModalVisible(true),
              },
            ]}
            onStateChange={() => setFabState(!fabState)}
            onPress={() => {
              // do something if the fab is open
            }}
          />
        </Portal>
      </Provider>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "ios" ? 0 : 22,
  },
  mapStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  searchbar: {},
  modalView: {
    backgroundColor: "white",
    width: 300,
    height: 400,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalCloseIcon: {
    position: "absolute",
    right: 0,
    top: 0,
    margin: 10,
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  radioGroup: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
