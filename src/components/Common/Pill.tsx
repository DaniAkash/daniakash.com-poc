import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { READING_FONT } from "../../assets/styles/fonts"
import NativeLink from "./NativeLink"
import useColors from "../../hooks/useColors"

const Pill = ({ text }: { text: string }) => {
  const colors = useColors()

  return (
    <NativeLink
      url={`/tags/${text}`}
      style={[
        styles.pillContainer,
        { backgroundColor: colors.gray6, color: colors.color4 },
      ]}
      hoveredStyle={{ backgroundColor: colors.color4, color: colors.gray6 }}
    >
      <Text style={styles.pillText}>{text}</Text>
    </NativeLink>
  )
}

const styles = StyleSheet.create({
  pillContainer: {
    margin: "1rem",
    paddingVertical: "0.5rem",
    paddingHorizontal: "0.75rem",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: READING_FONT,
  },
  pillText: {},
})

export default Pill
