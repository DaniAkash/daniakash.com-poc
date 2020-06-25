import React, { ReactNode } from "react"
import { View, StyleSheet, ScrollView } from "react-native"
import "../../assets/styles/global.css"
import useColors from "../../hooks/useColors"
import PostHeader from "../Common/PostHeader"
import { useCurrentPrimaryLayout } from "../../LayoutEngine/Layout/PrimaryLayout"
import MobilePostHeader from "../Common/Mobile/MobilePostHeader"

const PostLayout = ({ children }: { children: ReactNode }) => {
  const colors = useColors()
  const displayLayout = useCurrentPrimaryLayout()

  const isDesktop = displayLayout === "desktop"

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
      {isDesktop ? <PostHeader /> : null}
      {!isDesktop ? <MobilePostHeader /> : null}
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
