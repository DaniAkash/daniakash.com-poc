import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { graphql, useStaticQuery } from "gatsby"
import PostLayout from "../Layouts/PostLayout"
import { READING_FONT, CODING_FONT } from "../../assets/styles/fonts"
import NativeLink from "../Common/NativeLink"
import { useCurrentPrimaryLayout } from "../../LayoutEngine/Layout/PrimaryLayout"
import { H1 } from "@expo/html-elements"
import useColors from "../../hooks/useColors"

const Post = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: {
        category,
        date,
        description,
        draft,
        layout,
        path,
        tags,
        title,
        url,
      },
    },
  },
  pageContext: { previousPost, nextPost },
}: any) => {
  const displayLayout = useCurrentPrimaryLayout()

  const colors = useColors()

  const isMobile = displayLayout === "mobile"

  return (
    <PostLayout>
      <style>
        {`p {
font-size: 1rem;
margin-top: 1.5rem;
line-height: 1.5rem;
font-weight: 400;
letter-spacing: 0.03rem;
}
strong {
color: ${colors.color2};
font-weight: 600;
font-size: 1.1rem;
}
strong em {
  font-size: 1rem;
  font-weight: 500;
}
ol {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
li {
  line-height: 1.5rem;
  margin-top: 1rem;
  margin-left: 24px;
}
blockquote {
  line-height: 1.5rem;
  font-style: italic;
  color: ${colors.color3};
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}
h2 {
color: ${colors.color2};
font-weight: bold;
font-size: 1.7rem;
margin-top: 2rem;
}
h3 {
color: ${colors.color2};
font-weight: bold;
font-size: 1.3rem;
margin-top: 2rem;
}
h4 {
color: ${colors.color2};
font-weight: bold;
font-size: 1.1rem;
margin-top: 2rem;
}
code {
  background-color: ${colors.color5};
  color: ${colors.color2};
  border-radius: 5px;
  padding: 2px;
  font-family: ${CODING_FONT}
}
`}
      </style>
      <View
        style={[
          styles.contentContainer,
          isMobile ? styles.mobileContent : null,
        ]}
      >
        <H1 style={[styles.title, { color: colors.color2 }]}>{title}</H1>
        <div
          style={{ color: colors.textColor }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <View style={styles.linkRow}>
          {nextPost ? (
            <NativeLink
              style={styles.nextLink}
              openNewTab
              url={nextPost.frontmatter.path || ""}
            >
              Next
            </NativeLink>
          ) : null}
          {previousPost ? (
            <NativeLink
              style={styles.previousLink}
              openNewTab
              url={previousPost.frontmatter.path || ""}
            >
              Previous
            </NativeLink>
          ) : null}
        </View>
      </View>
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

const styles = StyleSheet.create({
  contentContainer: {
    fontFamily: READING_FONT,
    wordBreak: "break-word",
    maxWidth: "40rem",
    alignSelf: "center",
  },
  mobileContent: {
    marginHorizontal: "1.5rem",
  },
  linkRow: {},
  title: {
    textAlign: "center",
    fontFamily: READING_FONT,
    marginTop: "3.5rem",
    marginBottom: "1rem",
  },
  nextLink: {},
  previousLink: {},
})

export default Post
