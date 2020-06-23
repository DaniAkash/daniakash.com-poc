import React from "react"
import { View, StyleSheet } from "react-native"
import "../../assets/styles/global.css"
import useColors from "../../hooks/useColors"

const PostLayout = ({ children }) => {
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
      {children}
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
