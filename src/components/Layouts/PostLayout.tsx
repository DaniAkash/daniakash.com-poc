import React from "react"
import { View, StyleSheet } from "react-native"
import "../../assets/styles/global.css"

const PostLayout = ({ children }) => {
  return <View style={styles.postContainer}>{children}</View>
}

const styles = StyleSheet.create({
  postContainer: {
    height: "100vh",
    width: "100vw",
  },
})

export default PostLayout
