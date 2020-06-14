import React from "react"
import { Link } from "gatsby"
import HomeLayout from "../components/Layouts/HomeLayout"
import { View, Text, ScrollView } from "react-native"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />
    <ScrollView>
      {Array.from({ length: 1000 }, (_, i) => {
        return (
          <View key={i}>
            <Text>Hello...</Text>
          </View>
        )
      })}
    </ScrollView>
  </HomeLayout>
)

export default IndexPage
