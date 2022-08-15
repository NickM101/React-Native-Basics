import React from "react"
import { NavigationContainer } from "@react-navigation/native"

// Navigation
import Router from "./src/routes/MainNavigator"

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}
