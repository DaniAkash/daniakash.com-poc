import React from "react"
import { View, Text } from "react-native"
import { graphql, useStaticQuery } from "gatsby"
import PostLayout from "../Layouts/PostLayout"
import { READING_FONT } from "../../assets/styles/fonts"
import NativeLink from "../Common/NativeLink"
import { useCurrentPrimaryLayout } from "../../LayoutEngine/Layout/PrimaryLayout"

const Post = ({
  data: {
    markdownRemark: { html },
  },
  pageContext: { previousPost, nextPost },
}: any) => {
  const layout = useCurrentPrimaryLayout()

  const isMobile = layout === "mobile"

  let style = {
    fontFamily: READING_FONT,
    wordBreak: "break-word",
  }

  if (isMobile) {
    style = {
      ...style,
      margin: "0 15px 1.5rem",
    }
  } else {
    style = {
      ...style,
      maxWidth: "35rem",
      marginLeft: "auto",
      marginRight: "auto",
    }
  }

  return (
    <PostLayout>
      <Text>Blog Post</Text>
      <div style={style} dangerouslySetInnerHTML={{ __html: html }}></div>
      <div style={style}>
        {nextPost ? (
          <NativeLink openNewTab url={nextPost.frontmatter.path || ""}>
            Next
          </NativeLink>
        ) : null}
        {previousPost ? (
          <NativeLink openNewTab url={previousPost.frontmatter.path || ""}>
            Previous
          </NativeLink>
        ) : null}
      </div>
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
