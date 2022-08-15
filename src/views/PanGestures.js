import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  PanGestureHandler,
} from "react-native-gesture-handler"
const PanGestures = () => {
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
    </View>
  )
}

export default PanGestures

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  box: {
    marginVertical: 50,
    marginHorizontal: 10,
    height: 100,
    width: 100,
    backgroundColor: "rgba(0,0,256, 0.5)",
    borderRadius: 20
  }
})
