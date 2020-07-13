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

  const categoryName = startCase(category)
  const categoryUrl = "/" + kebabCase(category)

  const {
    title,
    twitterHandle,
    description,
    homepage,
    menu,
  } = data.site.siteMetadata

  const pageTitle = `${categoryName} | ${title}`

  return (
    <HomeLayout isHeader={false}>
      <GatsbySeo
        title={pageTitle}
        description={description}
        canonical={homepage}
        twitter={{
          handle: twitterHandle,
          site: twitterHandle,
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: homepage,
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
            name: categoryName,
            item: homepage + categoryUrl,
          },
        ]}
      />
      <BlankSpacer height={48} />
      <H1 style={[styles.categoryTitle, { color: colors.color2 }]}>
        {categoryName}
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

export default Category
