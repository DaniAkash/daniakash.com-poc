/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"
import { View, ScrollView, StyleSheet, Text } from "react-native"
import {
  useResponsiveHeight,
  useResponsiveWidth,
} from "react-native-responsive-dimensions"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import {
  useLayoutStyle,
  Layout as LayoutComp,
} from "../LayoutEngine/Layout/PrimaryLayout"

export interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <View style={[styles.pageContainer]}>
      <LayoutComp mode={["desktop"]}>
        <TextComp text={"desktop"} />
      </LayoutComp>
      <LayoutComp mode={["tablet"]}>
        <TextComp text={"tablet"} />
      </LayoutComp>
      <LayoutComp mode={["mobile"]}>
        <TextComp text={"mobile"} />
      </LayoutComp>
    </View>
  )
}

const TextComp = ({ text }) => {
  console.log("re-rendering")
  const style = useLayoutStyle({
    mobile: {
      backgroundColor: "black",
    },
    tablet: {
      backgroundColor: "green",
    },
    desktop: {
      backgroundColor: "yellow",
    },
  })
  console.log(style)
  return <Text style={style}>{text}</Text>
}

const styles = StyleSheet.create({
  pageContainer: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "red",
  },
  layoutContainer: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
})

export default Layout
