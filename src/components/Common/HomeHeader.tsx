import React from "react"
import { HeaderProps } from "./Mobile/MobileHomeHeader"
import { View, StyleSheet, Image } from "react-native"
import useColors from "../../hooks/useColors"
import { H1, P } from "@expo/html-elements"
import { HERO_FONT, INFO_FONT, HIGHLIGHT_FONT } from "../../assets/styles/fonts"

const HomeHeader = ({
  title,
  description,
  trivia,
  menu,
  containerStyle,
}: HeaderProps) => {
  const colors = useColors()

  return (
    <View style={[styles.homeHeaderContainer, containerStyle]}>
      <Image
        style={styles.profilePic}
        source={require("../../assets/images/profile-pic.jpg")}
      />
      <H1
        style={[
          styles.pageTitle,
          {
            color: colors.color4,
          },
        ]}
      >
        {title}
      </H1>
      <P
        style={[
          styles.infoText,
          {
            color: colors.color2,
          },
        ]}
      >
        {description}
      </P>
      <P
        style={[
          styles.triviaText,
          {
            color: colors.color2,
          },
        ]}
      >
        {trivia[Math.floor(Math.random() * trivia.length)]}
      </P>
    </View>
  )
}

const styles = StyleSheet.create({
  homeHeaderContainer: {},
  profilePic: {
    height: 175,
    width: 175,
    borderRadius: 24,
  },
  pageTitle: {
    fontFamily: HERO_FONT,
    fontSize: 56,
    marginVertical: 0,
  },
  infoText: {
    fontFamily: HIGHLIGHT_FONT,
    fontSize: 16,
    marginVertical: 0,
    marginTop: 0,
    maxWidth: 175,
  },
  triviaText: {
    fontFamily: INFO_FONT,
    fontSize: 12,
    marginVertical: 0,
    maxWidth: 175,
    marginTop: 16,
  },
})

export default HomeHeader
