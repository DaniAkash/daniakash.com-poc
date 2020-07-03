import React, { ReactNode } from "react"
import { View, StyleSheet, ScrollView } from "react-native"
import "../../assets/styles/global.css"
import useColors from "../../hooks/useColors"
import PostHeader from "../Common/PostHeader"
import { PrimaryLayout } from "../../LayoutEngine/PrimaryLayout"
import MobilePostHeader from "../Common/Mobile/MobilePostHeader"

const PostLayout = ({ children }: { children: ReactNode }) => {
  const colors = useColors()

  return (
    <View
      style={[
        styles.postContainer,
        {
          backgroundColor: colors.backgroundColor,
        },
      ]}
    >
      <ScrollView>{children}</ScrollView>
      <PrimaryLayout greaterThanOrEqual="desktop">
        <PostHeader />
      </PrimaryLayout>
      <PrimaryLayout lessThan="desktop">
        <MobilePostHeader />
      </PrimaryLayout>
    </View>
  )
}

const styles = StyleSheet.create({
  postContainer: {
    height: "100vh",
    width: "100vw",
  },
})

export default PostLayout
