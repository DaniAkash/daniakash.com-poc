import React from "react"
import { View, StyleSheet } from "react-native"
import PostSummary from "../Common/PostSummary"
import BlankSpacer from "react-native-blank-spacer"
import HomeLayout from "../Layouts/HomeLayout"
import { graphql } from "gatsby"
import { H2 } from "@expo/html-elements"
import useColors from "../../hooks/useColors"
import { startCase } from "lodash"

const Category = ({
  pageContext: { category },
  data,
}: {
  pageContext: any
  data: any
}) => {
  const posts: any[] = data.allMarkdownRemark.edges.map(
    (each: any) => each.node.frontmatter
  )

  const colors = useColors()

  return (
    <HomeLayout>
      <BlankSpacer height={48} />
      <H2 style={[styles.categoryTitle, { color: colors.color2 }]}>
        {startCase(category)}
      </H2>
      <BlankSpacer height={32} />
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

export const query = graphql`
  query($category: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          layout: { eq: "post" }
          draft: { ne: true }
          category: { eq: $category }
        }
      }
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
`

const styles = StyleSheet.create({
  postContainer: {
    marginHorizontal: 24,
  },
  categoryTitle: {
    fontSize: "2rem",
    marginHorizontal: 24,
  },
})

export default Category
