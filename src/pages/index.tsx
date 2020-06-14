import React, { useRef, useState } from "react"
import { Link } from "gatsby"
// import Animated from "react-native-reanimated"
import { responsiveWidth } from "react-native-responsive-dimensions"
import HomeLayout from "../components/Layouts/HomeLayout"
import { View, Text, ScrollView, StyleSheet, Animated } from "react-native"
import SEO from "../components/seo"
import { H1, P } from "@expo/html-elements"

const {
  createAnimatedComponent,
  Value,
  event,
  // interpolate,
  // Extrapolate,
} = Animated

const AnimatedScrollView = createAnimatedComponent(ScrollView)
const AnimatedView = createAnimatedComponent(View)
const AnimatedH1 = createAnimatedComponent(H1)

const HEADER_HEIGHT = 250

const IndexPage = () => {
  const [animatedScrollIndex] = useState(new Value(0))
  const range = [0, HEADER_HEIGHT]

  const titlePostionY = animatedScrollIndex.interpolate({
    inputRange: range,
    outputRange: [24, 8],
    extrapolate: "clamp",
  })

  const headerOpacity = animatedScrollIndex.interpolate({
    inputRange: range,
    outputRange: [0, 1],
    extrapolate: "clamp",
  })

  return (
    <HomeLayout>
      <SEO title="Home" />
      <View style={styles.header}>
        <P>description</P>
        <P>author</P>
        <P>copyright</P>
      </View>
      <AnimatedScrollView
        contentContainerStyle={styles.scrollViewBodyContainer}
        scrollEventThrottle={16}
        onScroll={event([
          {
            nativeEvent: {
              contentOffset: {
                y: animatedScrollIndex,
              },
            },
          },
        ])}
      >
        {Array.from({ length: 1000 }, (_, i) => {
          return (
            <View key={i}>
              <Text>Hello...</Text>
            </View>
          )
        })}
        <Text>END of Scroll!</Text>
      </AnimatedScrollView>
      <AnimatedView
        style={[
          styles.pageTitle,
          { top: titlePostionY },
          { transform: [{ translateX: titlePostionY }] },
        ]}
      >
        <AnimatedH1>title</AnimatedH1>
      </AnimatedView>
      <AnimatedView style={[styles.headerBar, { opacity: headerOpacity }]} />
    </HomeLayout>
  )
}

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    left: 0,
    width: responsiveWidth(100),
  },
  scrollViewBodyContainer: {
    backgroundColor: "white",
    marginTop: HEADER_HEIGHT - 16,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  pageTitle: {
    position: "absolute",
    left: 16,
  },
  headerBar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: responsiveWidth(100),
    height: 24,
    backgroundColor: "silver",
  },
})

export default IndexPage
