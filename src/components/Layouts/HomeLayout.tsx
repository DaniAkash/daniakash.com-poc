/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"
import { View, StyleSheet } from "react-native"
import "../../assets/styles/global.css"

export interface LayoutProps {
  children: ReactNode
}

const HomeLayout = ({ children }: LayoutProps) => {
  return <View style={styles.pageContainer}>{children}</View>
}

const styles = StyleSheet.create({
  pageContainer: {
    height: "100vh",
    width: "100vw",
  },
})

export default HomeLayout
