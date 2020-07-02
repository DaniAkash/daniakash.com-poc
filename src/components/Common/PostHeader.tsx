import React from "react"
import { Text, StyleSheet } from "react-native"
import useColors from "../../hooks/useColors"
import NativeLink from "./NativeLink"
import { READING_FONT } from "../../assets/styles/fonts"

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
    fontFamily: READING_FONT,
    fontSize: "1rem",
    letterSpacing: "0.1rem",
  },
})

export default PostHeader
