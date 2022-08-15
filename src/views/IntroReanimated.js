import React, { useEffect } from "react"
import { StyleSheet, Button, View } from "react-native"

// Reanimated
import Animated, {
  withRepeat,
  withSpring,
  useSharedValue,
  useAnimatedStyle
} from "react-native-reanimated"

const IntroReanimated = () => {
  const progress = useSharedValue(1)
  const scale = useSharedValue(2)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * 100) / 2,
      transform: [
        { scale: scale.value },
        { rotate: `${progress.value * 2 * Math.PI}rad` }
      ]
    }
  }, [])

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), 3, true)
    scale.value = withRepeat(withSpring(1), 3, true)
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
    </View>
  )
}

export default IntroReanimated

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
    backgroundColor: "blue",
    borderRadius: 20
  }
})
