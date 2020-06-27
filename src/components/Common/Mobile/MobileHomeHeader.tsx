import React, { useState, useRef } from "react"
import {
  View,
  StyleSheet,
  Animated,
  Image,
  LayoutChangeEvent,
  Text,
  TouchableOpacity,
  StyleProp,
} from "react-native"
import Switch from "expo-dark-mode-switch"
import { H1, P } from "@expo/html-elements"
import {
  HERO_FONT,
  HIGHLIGHT_FONT,
  INFO_FONT,
} from "../../../assets/styles/fonts"
import useColors from "../../../hooks/useColors"
import MobileNavBar, { MenuType } from "./MobileNavBar"
import useResponsiveWidth from "../../../hooks/useResponsiveWidth"
import { ViewStyle } from "@expo/html-elements/build/primitives/View"
import MobileHamburgerMenu from "./MobileHamburgerMenu"

const { createAnimatedComponent, Value } = Animated

const AnimatedView = createAnimatedComponent(View)
const AnimatedH1 = createAnimatedComponent(H1)
const AnimatedImage = createAnimatedComponent(Image)
const AnimatedP = createAnimatedComponent(P)
const AnimatedText = createAnimatedComponent(Text)

export const HEADER_HEIGHT = 280
export const STICKY_HEADER_HEIGHT = 48

export type HeaderProps = {
  animatedValue: Animated.Value
  title: string
  description: string
  trivia: string[]
  menu: MenuType[]
  copyright: string
  containerStyle?: StyleProp<ViewStyle>
}

const AnimatedTitle = ({
  interpolator,
  title,
}: {
  title: string
  interpolator: (
    outputRange: [number, number],
    customInputRange?: [number, number] | undefined
  ) => Animated.AnimatedInterpolation
}) => {
  const colors = useColors()
  const screenWidth = useResponsiveWidth(100)
  const [titleWidth, setTitleWidth] = useState(136)
  const [titleHeight, setTitleHeight] = useState(48)
  const onTitleLayout = (event: LayoutChangeEvent) => {
    const {
      width: titleTextWidth,
      height: titleTextHeight,
    } = event.nativeEvent.layout
    setTitleHeight(titleTextHeight)
    setTitleWidth(titleTextWidth)
  }
  return (
    <AnimatedH1
      style={[
        styles.pageTitle,
        {
          left: interpolator([16 + 24 + 90, screenWidth / 2 - titleWidth / 2]),
          top: interpolator([24, (STICKY_HEADER_HEIGHT - titleHeight) / 2]),
          color: colors.color4,
        },
      ]}
      onLayout={onTitleLayout}
    >
      {title}
    </AnimatedH1>
  )
}

const MobileHomeHeader = ({
  animatedValue,
  title,
  description,
  trivia,
  menu,
}: HeaderProps) => {
  const triviaText = useRef(trivia[Math.floor(Math.random() * trivia.length)])
    .current
  const range = [0, HEADER_HEIGHT]

  const [value, setValue] = useState(true)
  const [hamburgerActive, setHamburgerActive] = useState(false)

  const toggleHamburger = () => setHamburgerActive(!hamburgerActive)

  const interpolator = (
    outputRange: [number, number],
    customInputRange?: [number, number]
  ) =>
    animatedValue.interpolate({
      inputRange: customInputRange || range,
      outputRange: outputRange,
      extrapolate: "clamp",
    })

  const colors = useColors()

  const disapper = {
    transform: [{ translateY: interpolator([0, 24]) }],
    opacity: interpolator([1, 0], [0, HEADER_HEIGHT / 6]),
  }

  return (
    <>
      <AnimatedView
        style={[
          styles.headerBar,
          {
            height: interpolator([0, STICKY_HEADER_HEIGHT]),
            opacity: interpolator([0, 0.9]),
            backgroundColor: colors.backgroundColor,
          },
        ]}
      />
      <TouchableOpacity
        onPress={toggleHamburger}
        style={[styles.hamburgerClicked]}
      >
        <AnimatedText
          style={[styles.hamburgerText, { fontSize: interpolator([0, 24]) }]}
        >
          🍔
        </AnimatedText>
      </TouchableOpacity>
      <View style={styles.switchWrapper}>
        <Switch
          value={value}
          onChange={(newValue: boolean) => setValue(newValue)}
        />
      </View>
      <View
        style={[
          styles.headerBackground,
          { backgroundColor: colors.backgroundColor },
        ]}
      />
      {/** TODO: Make Animated Image fluid */}
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
        source={require("../../../assets/images/profile-pic.jpg")}
      />
      <AnimatedTitle title={title} interpolator={interpolator} />
      <AnimatedP style={[styles.infoText, { color: colors.color4 }, disapper]}>
        {description}
      </AnimatedP>
      <AnimatedP
        numberOfLines={2}
        ellipsizeMode={"tail"}
        style={[
          styles.triviaText,
          {
            color: colors.color4,
          },
          disapper,
        ]}
      >
        {triviaText}
      </AnimatedP>
      <AnimatedView style={[styles.navbar, disapper]}>
        <MobileNavBar menu={menu} />
      </AnimatedView>
      <MobileHamburgerMenu
        toggleHamburger={toggleHamburger}
        isVisible={hamburgerActive}
        menu={menu}
      />
    </>
  )
}

const styles = StyleSheet.create({
  headerBackground: {
    height: HEADER_HEIGHT,
    width: "100vw",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -100,
  },
  pageTitle: {
    position: "absolute",
    fontFamily: HERO_FONT,
    fontSize: 48,
    marginVertical: 0,
    lineHeight: 48,
  },
  infoText: {
    position: "absolute",
    fontFamily: HIGHLIGHT_FONT,
    fontSize: 16,
    left: 16 + 24 + 90,
    marginVertical: 0,
    top: 24 + 8 + 48,
  },
  triviaText: {
    position: "absolute",
    fontFamily: INFO_FONT,
    fontSize: 14,
    textAlign: "center",
    left: 24,
    marginVertical: 0,
    top: 24 + 36 + 90,
    marginHorizontal: 48,
  },
  profilePic: {
    position: "absolute",
  },
  headerBar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
  },
  switchWrapper: {
    position: "absolute",
    top: 8,
    right: -4,
    transform: [
      {
        scale: 0.5,
      },
    ],
  },
  hamburgerClicked: {
    position: "absolute",
    top: 10,
    right: 64,
  },
  hamburgerText: {
    fontSize: 24,
  },
  navbar: {
    position: "absolute",
    top: 24 + 24 + 90 + 72,
  },
})

export default MobileHomeHeader
