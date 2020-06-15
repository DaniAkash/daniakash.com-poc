import React, { useRef } from "react"
import { Link } from "gatsby"

import HomeLayout from "../components/Layouts/HomeLayout"
import { View, Text, ScrollView, StyleSheet, Animated } from "react-native"
import SEO from "../components/seo"

import useColors from "../hooks/useColors"
import { HERO_FONT, HIGHLIGHT_FONT, INFO_FONT } from "../assets/styles/fonts"
import HomeHeader, { HEADER_HEIGHT } from "../components/Common/HomeHeader"

const { createAnimatedComponent, Value, event } = Animated

const AnimatedScrollView = createAnimatedComponent(ScrollView)

const IndexPage = () => {
  const animatedScrollIndex = useRef(new Value(0)).current

  const colors = useColors()

  return (
    <HomeLayout>
      <SEO title="Home" />
      <AnimatedScrollView
        contentContainerStyle={[
          styles.scrollViewBodyContainer,
          { backgroundColor: colors.backgroundColor },
        ]}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
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
      <HomeHeader animatedValue={animatedScrollIndex} />
    </HomeLayout>
  )
}

const styles = StyleSheet.create({
  scrollViewBodyContainer: {
    marginTop: HEADER_HEIGHT - 16,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
})

export default IndexPage
