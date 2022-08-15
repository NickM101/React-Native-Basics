import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TestAnimation from "../views/TestAnimation"

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TestAnimation} />
    </Stack.Navigator>
  )
}

export default Router
