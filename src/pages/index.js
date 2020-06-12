import React from "react"
import { Link } from "gatsby"
import { View, Text, ScrollView } from "react-native"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
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
  </Layout>
)

export default IndexPage
