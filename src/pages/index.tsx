import React from "react"
import { View, StyleSheet } from "react-native"
import PostSummary from "../components/Common/PostSummary"
import BlankSpacer from "react-native-blank-spacer"
import HomeLayout from "../components/Layouts/HomeLayout"

const IndexPage = () => {
  return (
    <HomeLayout>
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
    </HomeLayout>
  )
}

const styles = StyleSheet.create({
  postContainer: { marginHorizontal: 24 },
})

export default IndexPage
