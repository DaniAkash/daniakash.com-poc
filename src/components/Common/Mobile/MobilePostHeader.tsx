import React from "react"
import { View, StyleSheet, Text } from "react-native"
import NativeLink from "../NativeLink"
import useColors from "../../../hooks/useColors"
import { READING_FONT } from "../../../assets/styles/fonts"

const MobilePostHeader = () => {
  const colors = useColors()

  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor: colors.backgroundColor },
      ]}
    >
      <NativeLink
        url={"/"}
        style={[styles.homeLink, { color: colors.color2 }]}
        hoveredStyle={{ color: colors.color4 }}
      >
        <Text style={styles.homeText}>🏡 Home</Text>
      </NativeLink>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.9,
  },
  homeLink: {
    padding: "1rem",
  },
  homeText: {
    fontFamily: READING_FONT,
    fontSize: "1rem",
  },
})

export default MobilePostHeader
