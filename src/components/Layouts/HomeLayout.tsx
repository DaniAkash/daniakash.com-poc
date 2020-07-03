/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode, useRef } from "react"
import { View, StyleSheet, Animated, ScrollView } from "react-native"
import "../../assets/styles/global.css"
import MobileHomeHeader, {
  HEADER_HEIGHT,
} from "../Common/Mobile/MobileHomeHeader"
import { useStaticQuery, graphql } from "gatsby"
import useColors from "../../hooks/useColors"
import SEO from "../seo"
import HomeHeader from "../Common/HomeHeader"
import { PrimaryLayout } from "../../LayoutEngine/PrimaryLayout"

const { createAnimatedComponent, Value, event } = Animated

const AnimatedScrollView = createAnimatedComponent(ScrollView)

export interface LayoutProps {
  children: ReactNode
}

const HomeLayout = ({ children }: LayoutProps) => {
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
    <>
      <PrimaryLayout greaterThan={"mobile"}>
        <View
          style={[
            styles.pageContainer,
            styles.desktopPageContainer,
            { backgroundColor: colors.backgroundColor },
          ]}
        >
          <SEO title="Home" />
          <HomeHeader containerStyle={styles.desktopHeader} {...siteMetadata} />
          <ScrollView contentContainerStyle={styles.desktopContentSection}>
            {children}
          </ScrollView>
        </View>
      </PrimaryLayout>
      <PrimaryLayout at="mobile">
        <View
          style={[
            styles.pageContainer,
            { backgroundColor: colors.backgroundColor },
          ]}
        >
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
            {children}
          </AnimatedScrollView>
          <MobileHomeHeader
            {...siteMetadata}
            animatedValue={animatedScrollIndex}
          />
        </View>
      </PrimaryLayout>
    </>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    height: "100vh",
    width: "100vw",
  },
  desktopPageContainer: {
    flexDirection: "row",
  },
  desktopHeader: {
    alignSelf: "center",
  },
  desktopContentSection: {},
  scrollViewBodyContainer: {
    marginTop: HEADER_HEIGHT - 16,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
})

export default HomeLayout
