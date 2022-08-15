import React from "react"
import { StyleSheet, Button, View } from "react-native"

// Reanimated
import Animated, {
  useSharedValue,
  useAnimatedStyle
} from "react-native-reanimated"

const TestAnimation = () => {
  const offset = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }]
    }
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button
        title="Move"
        onPress={() => (offset.value = Math.random() * 255)}
      />
    </View>
  )
}

export default TestAnimation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white"
  },
  box: {
    marginVertical: 50,
    marginHorizontal: 10,
    height: 50,
    width: 50,
    backgroundColor: "blue"
  }
})
