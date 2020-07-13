import React from "react"
import { View, StyleSheet } from "react-native"
import PostSummary from "../Common/PostSummary"
import BlankSpacer from "react-native-blank-spacer"
import HomeLayout from "../Layouts/HomeLayout"
import { graphql } from "gatsby"
import { H1 } from "@expo/html-elements"
import useColors from "../../hooks/useColors"
import { startCase, kebabCase } from "lodash"
import { GatsbySeo, BreadcrumbJsonLd } from "gatsby-plugin-next-seo"

const Tags = ({
  pageContext: { tag },
  data,
}: {
  pageContext: any
  data: any
}) => {
  const posts: any[] = data.allMarkdownRemark.edges.map(
    (each: any) => each.node.frontmatter
  )

  const colors = useColors()

  const tagName = startCase(tag)
  const tagUrl = "/" + kebabCase(tag)

  const { title, twitterHandle, homepage, menu } = data.site.siteMetadata

  const pageTitle = `${tagName} | ${title}`

  const description = `${title}'s posts tagged as ${tagName}`

  const canonical = homepage + tagUrl

  return (
    <HomeLayout isHeader={false}>
      <GatsbySeo
        title={pageTitle}
        description={description}
        canonical={canonical}
        twitter={{
          handle: twitterHandle,
          site: twitterHandle,
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: canonical,
          title: pageTitle,
          description,
          images: [
            {
              url: homepage + require("../../assets/images/profile-pic.jpg"),
              width: 460,
              height: 460,
              alt: "Dani Akash",
            },
            {
              url: homepage + require("../../assets/images/favicon.png"),
              width: 600,
              height: 600,
              alt: "Dani Akash",
            },
          ],
          site_name: pageTitle,
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: menu[0].label,
            item: homepage + menu[0].path,
          },
          {
            position: 2,
            name: tagName,
            item: canonical,
          },
        ]}
      />
      <BlankSpacer height={48} />
      <H1 style={[styles.categoryTitle, { color: colors.color2 }]}>
        {`Posts tagged as "${tagName}"`}
      </H1>
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
  query($tag: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          layout: { eq: "post" }
          draft: { ne: true }
          tags: { eq: $tag }
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
    site {
      siteMetadata {
        homepage
        twitterHandle
        title
        description
        copyright
        menu {
          label
          path
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

export default Tags
