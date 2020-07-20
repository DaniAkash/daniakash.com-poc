import React, { useState, useRef } from "react"
import {
  View,
  StyleSheet,
  Animated,
  LayoutChangeEvent,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  useWindowDimensions,
} from "react-native"
import { H1, P, H2 } from "@expo/html-elements"
import { HERO_FONT, READING_FONT } from "../../../assets/styles/fonts"
import useColors from "../../../hooks/useColors"
import { MenuType } from "./MobileNavBar"
import MobileHamburgerMenu from "./MobileHamburgerMenu"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const { createAnimatedComponent } = Animated

const AnimatedView = createAnimatedComponent(View)
const AnimatedH1 = createAnimatedComponent(H1)
const AnimatedH2 = createAnimatedComponent(H2)
const AnimatedP = createAnimatedComponent(P)
const AnimatedText = createAnimatedComponent(Text)

export const HEADER_HEIGHT = 200
export const STICKY_HEADER_HEIGHT = 48

export type HeaderProps = {
  animatedValue: Animated.Value
  title: string
  description: string
  info: string
  trivia: string[]
  menu: MenuType[]
  copyright: string
  containerStyle?: StyleProp<ViewStyle>
  isHeader?: boolean
}

const profilePicStyle = {
  height: "100%",
  width: "100%",
}

const AnimatedTitle = ({
  interpolator,
  title,
  isHeader = true,
}: {
  title: string
  isHeader?: boolean
  interpolator: (
    outputRange: [number, number],
    customInputRange?: [number, number] | undefined
  ) => Animated.AnimatedInterpolation
}) => {
  const { width: screenWidth } = useWindowDimensions()
  const colors = useColors()
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
  const AnimatedHeader = isHeader ? AnimatedH1 : AnimatedH2
  return (
    <AnimatedHeader
      style={[
        styles.pageTitle,
        {
          left: interpolator([16 + 24 + 90, screenWidth / 2 - titleWidth / 2]),
          top: interpolator([45, (STICKY_HEADER_HEIGHT - titleHeight) / 2]),
          color: colors.color4,
        },
      ]}
      onLayout={onTitleLayout}
    >
      {title}
    </AnimatedHeader>
  )
}

const MobileHomeHeader = ({
  animatedValue,
  title,
  info,
  trivia,
  menu,
  copyright,
  isHeader = true,
}: HeaderProps) => {
  const query = useStaticQuery(graphql`
    query MobileProfilePicQuery {
      file(relativePath: { eq: "profile-pic.jpg" }) {
        id
        childImageSharp {
          fluid {
            base64
            aspectRatio
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)

  const triviaText = useRef(trivia[Math.floor(Math.random() * trivia.length)])
    .current
  const range = [0, HEADER_HEIGHT]

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
        <AnimatedText style={[styles.hamburgerText, { color: colors.color4 }]}>
          ☰
        </AnimatedText>
      </TouchableOpacity>
      <View
        style={[
          styles.headerBackground,
          { backgroundColor: colors.backgroundColor },
        ]}
      />
      <AnimatedView
        style={[
          styles.profilePic,
          {
            height: interpolator([90, 24]),
            width: interpolator([90, 24]),
            borderRadius: interpolator([24, 4]),
            left: interpolator([24, 16]),
            top: interpolator([40, 12]),
          },
        ]}
      >
        <Img
          style={profilePicStyle}
          fluid={query.file.childImageSharp.fluid}
          alt="dani-akash"
          loading="eager"
        />
      </AnimatedView>
      <AnimatedTitle
        isHeader={isHeader}
        title={title}
        interpolator={interpolator}
      />
      <AnimatedP style={[styles.infoText, { color: colors.color4 }, disapper]}>
        {info}
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
      <MobileHamburgerMenu
        toggleHamburger={toggleHamburger}
        isVisible={hamburgerActive}
        menu={menu}
        copyright={copyright}
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
    fontFamily: READING_FONT,
    fontSize: "0.8rem",
    left: 16 + 24 + 90,
    marginVertical: 0,
    top: 45 + 8 + 48,
  },
  triviaText: {
    position: "absolute",
    fontFamily: READING_FONT,
    alignItems: "center",
    fontSize: "0.8rem",
    fontWeight: 300,
    textAlign: "center",
    marginVertical: 0,
    top: 40 + 36 + 90,
    width: "100vw",
    paddingHorizontal: 24,
  },
  profilePic: {
    position: "absolute",
    overflow: "hidden",
  },
  headerBar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
  },
  hamburgerClicked: {
    position: "absolute",
    top: 10,
    right: 64,
  },
  hamburgerText: {
    fontSize: 24,
    marginTop: -2,
  },
})

export default MobileHomeHeader
