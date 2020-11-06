import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";

import { THEME_COLOR } from "./src/styles/style";

import Main from "./src/screens/HomeScreen";
import SecondTab from "./src/screens/SecondTabScreen";
import ThirdTab from "./src/screens/ThirdTabScreen";
import FourthTab from "./src/screens/FourthTabScreen";

export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "main", title: "Home", icon: "home" },
    { key: "secondTab", title: "Tab2", icon: "folder" },
    { key: "thirdTab", title: "Tab3", icon: "folder" },
    { key: "fourthTab", title: "Tab4", icon: "folder" },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    main: Main,
    secondTab: SecondTab,
    thirdTab: ThirdTab,
    fourthTab: FourthTab,
  });

  return (
    <BottomNavigation
      style={{ flex: 1, marginTop: 20 }}
      barStyle={{ backgroundColor: THEME_COLOR }}
      shifting={false}
      activeColor="white"
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
