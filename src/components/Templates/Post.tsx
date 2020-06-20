import React from "react"
import { View, Text } from "react-native"
import { graphql, useStaticQuery } from "gatsby"
import PostLayout from "../Layouts/PostLayout"
import { READING_FONT } from "../../assets/styles/fonts"
import NativeLink from "../Common/NativeLink"

const Post = ({
  data: {
    markdownRemark: { html },
  },
  pageContext: { previousPost, nextPost },
}: any) => {
  console.log(previousPost, nextPost)

  return (
    <PostLayout>
      <Text>Blog Post</Text>
      <div
        style={{ fontFamily: READING_FONT }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {previousPost ? (
        <NativeLink openNewTab url={previousPost.frontmatter.path || ""}>
          Previous
        </NativeLink>
      ) : null}
      {nextPost ? (
        <NativeLink openNewTab url={nextPost.frontmatter.path || ""}>
          Next
        </NativeLink>
      ) : null}
    </PostLayout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      id
      html
      frontmatter {
        category
        date
        description
        draft
        layout
        path
        tags
        title
        url
      }
    }
  }
`

export default Post
