import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";

const Tab = createMaterialTopTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
