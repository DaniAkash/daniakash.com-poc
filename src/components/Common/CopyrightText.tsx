import React from "react"
import { View, StyleSheet } from "react-native"
import { P } from "@expo/html-elements"
import NativeLink from "./NativeLink"
import GatsbyIcon from "../../assets/svg/gatsby.svg"
import ReactNativeIcon from "../../assets/svg/react-native.svg"
import { READING_FONT } from "../../assets/styles/fonts"
import useColors from "../../hooks/useColors"

const CopyrightText = ({ copyright }: { copyright: string }) => {
  const colors = useColors()

  return (
    <View style={styles.copyrightTextContainer}>
      <P style={[styles.copyrightText, { color: colors.color4 }]}>
        {copyright} Built with{" "}
      </P>
      <NativeLink openNewTab url={"https://www.gatsbyjs.org/"}>
        <View style={styles.iconWrapper}>
          <GatsbyIcon />
        </View>
      </NativeLink>
      <P style={[styles.copyrightText, { color: colors.color4 }]}>{" , "}</P>
      <NativeLink openNewTab url={"https://reactnative.dev/"}>
        <View style={styles.iconWrapper}>
          <ReactNativeIcon />
        </View>
      </NativeLink>
      <P style={[styles.copyrightText, { color: colors.color4 }]}>
        {" & "}
        <NativeLink
          openNewTab
          url={"https://github.com/daniakash/daniakash.com"}
        >
          ❤️
        </NativeLink>
      </P>
    </View>
  )
}

const styles = StyleSheet.create({
  copyrightTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  copyrightText: {
    fontFamily: READING_FONT,
    fontSize: "0.7rem",
    marginVertical: 0,
    maxWidth: 175,
  },
  iconWrapper: { height: "0.7rem", width: "0.7rem" },
})

export default CopyrightText
