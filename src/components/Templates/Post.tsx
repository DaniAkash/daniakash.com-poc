import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { graphql, useStaticQuery } from "gatsby"
import PostLayout from "../Layouts/PostLayout"
import { READING_FONT, CODING_FONT } from "../../assets/styles/fonts"
import NativeLink from "../Common/NativeLink"
import { useCurrentPrimaryLayout } from "../../LayoutEngine/Layout/PrimaryLayout"
import { H1 } from "@expo/html-elements"
import useColors from "../../hooks/useColors"
import BlankSpacer from "react-native-blank-spacer"
import Pill from "../Common/Pill"

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
font-size: 0.9rem;
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
  font-family: ${CODING_FONT};
}
a {
  color: ${colors.color4};
  text-decoration: underline;
}
a:hover {
  color: ${colors.color3};
}
p small {
  color: ${colors.color3};
  font-size: 0.75rem;
  text-align: center;
  display: block;
}
`}
      </style>
      <View
        style={[
          styles.contentContainer,
          isMobile ? styles.mobileContent : null,
        ]}
      >
        <BlankSpacer height={"3.5rem"} />
        <H1 style={[styles.title, { color: colors.color2 }]}>{title}</H1>
        <BlankSpacer height={"1rem"} />
        <div
          style={{
            color: colors.textColor,
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <BlankSpacer height={"2rem"} />
        <View style={styles.tagsRow}>
          {tags.map((tag, tagIndex) => {
            return <Pill text={tag} key={tagIndex} />
          })}
        </View>
        <BlankSpacer height={"2rem"} />
        <View style={[styles.linkRow, isMobile ? styles.linkMobileRow : null]}>
          <View style={styles.linkContainer}>
            {nextPost ? (
              <>
                <Text style={[styles.arrowIcon, { color: colors.color2 }]}>
                  {"<"}
                </Text>
                <NativeLink
                  style={[styles.previousLink, { color: colors.color4 }]}
                  hoveredStyle={{ color: colors.color2 }}
                  openNewTab
                  url={nextPost.frontmatter.path || ""}
                >
                  {nextPost.frontmatter.title}
                </NativeLink>
              </>
            ) : null}
          </View>
          <View style={styles.linkContainer}>
            {previousPost ? (
              <>
                <NativeLink
                  style={[styles.nextLink, { color: colors.color4 }]}
                  hoveredStyle={{ color: colors.color2 }}
                  openNewTab
                  url={previousPost.frontmatter.path || ""}
                >
                  {previousPost.frontmatter.title}
                </NativeLink>
                <Text style={styles.arrowIcon}>{">"}</Text>
              </>
            ) : null}
          </View>
        </View>
      </View>
      <BlankSpacer height={56} />
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
  linkRow: {
    flexDirection: "row",
  },
  linkMobileRow: {
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
    fontFamily: READING_FONT,
    marginVertical: 0,
  },
  linkContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    fontFamily: READING_FONT,
  },
  previousLink: {
    flex: 1,
    textAlign: "left",
    textAlignVertical: "center",
    fontSize: "0.8rem",
    marginLeft: "1rem",
  },
  nextLink: {
    flex: 1,
    textAlign: "right",
    textAlignVertical: "center",
    fontSize: "0.8rem",
    marginRight: "1rem",
  },
  arrowIcon: {
    fontFamily: READING_FONT,
    fontWeight: "100",
    fontSize: "3rem",
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
})

export default Post
