import React, { useState } from "react"
import {
  View,
  StyleSheet,
  Animated,
  Image,
  LayoutChangeEvent,
} from "react-native"
import {
  useResponsiveWidth,
  useResponsiveHeight,
} from "react-native-responsive-dimensions"
import { H1, P } from "@expo/html-elements"
import { HERO_FONT, HIGHLIGHT_FONT, INFO_FONT } from "../../assets/styles/fonts"
import useColors from "../../hooks/useColors"

const { createAnimatedComponent, Value } = Animated

const AnimatedView = createAnimatedComponent(View)
const AnimatedH1 = createAnimatedComponent(H1)
const AnimatedImage = createAnimatedComponent(Image)

export const HEADER_HEIGHT = 280

type HeaderProps = {
  animatedValue: Animated.Value
}

const HomeHeader = ({ animatedValue }: HeaderProps) => {
  const range = [0, HEADER_HEIGHT]

  const [titleWidth, setTitleWidth] = useState(136)

  const interpolator = (outputRange: [number, number]) =>
    animatedValue.interpolate({
      inputRange: range,
      outputRange: outputRange,
      extrapolate: "clamp",
    })

  const colors = useColors()

  const width = useResponsiveWidth(100)
  const height = useResponsiveHeight(100)

  const onTitleLayout = (event: LayoutChangeEvent) => {
    const { width: titleTextWidth } = event.nativeEvent.layout
    setTitleWidth(titleTextWidth)
  }

  return (
    <>
      <AnimatedView
        style={[
          styles.headerBar,
          {
            opacity: interpolator([0, 1]),
            width,
            backgroundColor: colors.color5,
          },
        ]}
      />
      <View
        style={[
          styles.headerBackground,
          { backgroundColor: colors.color4, width },
        ]}
      />
      <AnimatedImage
        style={[
          styles.profilePic,
          {
            height: interpolator([90, 24]),
            width: interpolator([90, 24]),
            borderRadius: interpolator([24, 4]),
            left: interpolator([24, 16]),
            top: interpolator([24, 12]),
          },
        ]}
        source={require("../../assets/images/profile-pic.jpg")}
      />
      <AnimatedH1
        style={[
          styles.pageTitle,
          {
            left: interpolator([16 + 24 + 90, width / 2 - titleWidth / 2]),
            margin: 0,
            padding: 0,
          },
          { top: interpolator([24, -8]), color: colors.backgroundColor },
        ]}
        onLayout={onTitleLayout}
      >
        Dani Akash
      </AnimatedH1>
      <P
        style={[
          styles.infoText,
          { color: colors.backgroundColor },
          {
            left: 16 + 24 + 90,
            margin: 0,
            padding: 0,
            top: 24 + 8 + 48,
          },
        ]}
      >
        Writer · Speaker · Hacker
      </P>
      <P
        style={[
          styles.triviaText,
          {
            color: colors.backgroundColor,
          },
          {
            left: 24,
            margin: 0,
            padding: 0,
            top: 24 + 24 + 90,
            width: width - 48,
          },
        ]}
      >
        I sometimes code while listening to music
      </P>
      <P>copyright</P>
    </>
  )
}

const styles = StyleSheet.create({
  headerBackground: {
    height: HEADER_HEIGHT,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -100,
  },
  pageTitle: {
    position: "absolute",
    fontFamily: HERO_FONT,
    fontSize: 48,
  },
  infoText: {
    position: "absolute",
    fontFamily: HIGHLIGHT_FONT,
    fontSize: 16,
  },
  triviaText: {
    position: "absolute",
    fontFamily: INFO_FONT,
    fontSize: 24,
    textAlign: "center",
  },
  profilePic: {
    position: "absolute",
  },
  headerBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 48,
  },
})

export default HomeHeader
