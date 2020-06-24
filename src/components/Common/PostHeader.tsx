import React from "react"
import { View, Text, StyleSheet } from "react-native"
import useColors from "../../hooks/useColors"
import NativeLink from "./NativeLink"
import { HIGHLIGHT_FONT } from "../../assets/styles/fonts"

const PostHeader = () => {
  const colors = useColors()

  return (
    <NativeLink
      url={"/"}
      style={[styles.headerContainer, { color: colors.color2 }]}
      hoveredStyle={{ color: colors.color4 }}
    >
      <Text style={styles.homeText}>🏡 Home</Text>
    </NativeLink>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: "2rem",
    left: "2rem",
    padding: "1rem",
  },
  homeText: {
    fontFamily: HIGHLIGHT_FONT,
    fontSize: "1rem",
    letterSpacing: "0.2rem",
  },
})

export default PostHeader
