import React, { useRef } from "react"
import HomeLayout from "../components/Layouts/HomeLayout"
import { View, ScrollView, StyleSheet, Animated } from "react-native"
import SEO from "../components/seo"

import useColors from "../hooks/useColors"
import { useStaticQuery, graphql } from "gatsby"
import HomeHeader, { HEADER_HEIGHT } from "../components/Common/HomeHeader"
import PostSummary from "../components/Common/PostSummary"
import BlankSpacer from "react-native-blank-spacer"

const { createAnimatedComponent, Value, event } = Animated

const AnimatedScrollView = createAnimatedComponent(ScrollView)

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
          copyright
          menu {
            label
            path
          }
          trivia
        }
      }
    }
  `)

  const animatedScrollIndex = useRef(new Value(0)).current

  const colors = useColors()

  const { siteMetadata } = data.site

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
        <BlankSpacer height={48} />
        {Array.from({ length: 10 }, (_, i) => {
          return (
            <View key={i}>
              <PostSummary containerStyle={styles.postContainer} />
              <BlankSpacer height={24} />
            </View>
          )
        })}
        <BlankSpacer height={24} />
      </AnimatedScrollView>
      <HomeHeader {...siteMetadata} animatedValue={animatedScrollIndex} />
    </HomeLayout>
  )
}

const styles = StyleSheet.create({
  scrollViewBodyContainer: {
    marginTop: HEADER_HEIGHT - 16,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  postContainer: { marginHorizontal: 24 },
})

export default IndexPage
