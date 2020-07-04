import React from "react"
import { View, StyleSheet } from "react-native"
import useColors from "../../hooks/useColors"
import { usePageStateStore } from "../../store/PageState"

const Overlay = () => {
  const colors = useColors()

  const { isPageLoaded } = usePageStateStore()

  if (isPageLoaded) {
    return null
  }

  return (
    <View
      style={[
        styles.overlayContainer,
        {
          backgroundColor: colors.backgroundColor,
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  overlayContainer: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    top: 0,
    right: 0,
  },
})

export default Overlay
