import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PanGestures from "../views/PanGestures"
import IntroReanimated from "../views/IntroReanimated"

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={PanGestures} />
      <Stack.Screen name="Intro" component={IntroReanimated} />
    </Stack.Navigator>
  )
}

export default Router
