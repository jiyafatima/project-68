import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer} from "react-navigation"
import { createMaterialTopTabNavigator} from "react-navigation-tabs"

import InstagramScreen from "./screens/InstagramScreen";
import FaceBookScreen from "./screens/FaceBookScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer/>
   }
}
const TabNavigator = createMaterialTopTabNavigator({
  Instagram:{screen:InstagramScreen},
  FaceBookScreen:{screen:FaceBookScreen}
})

const AppContainer = createAppContainer(TabNavigator)






