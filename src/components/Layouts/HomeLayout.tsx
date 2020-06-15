/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"
import { View, StyleSheet } from "react-native"
import { useStaticQuery, graphql } from "gatsby"
import ProfileCard from "../ProfileCard"
import "../../assets/styles/global.css"

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
        }
      }
    }
  `)

  console.log(data)

  return (
    <View style={styles.pageContainer}>
      {/* <ProfileCard data={data} /> */}
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    height: "100vh",
    width: "100vw",
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

export default HomeLayout
