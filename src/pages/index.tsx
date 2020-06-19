import React from "react"
import { View, StyleSheet } from "react-native"
import PostSummary from "../components/Common/PostSummary"
import BlankSpacer from "react-native-blank-spacer"
import HomeLayout from "../components/Layouts/HomeLayout"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              date
              category
              url
              path
            }
          }
        }
      }
    }
  `)

  const posts: any[] = data.allMarkdownRemark.edges.map(
    (each: any) => each.node.frontmatter
  )

  return (
    <HomeLayout>
      <BlankSpacer height={48} />
      {posts.map((post, i) => {
        return (
          <View key={i}>
            <PostSummary {...post} containerStyle={styles.postContainer} />
            <BlankSpacer height={32} />
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
