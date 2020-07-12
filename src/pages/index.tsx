import React from "react"
import { View, StyleSheet } from "react-native"
import PostSummary from "../components/Common/PostSummary"
import BlankSpacer from "react-native-blank-spacer"
import HomeLayout from "../components/Layouts/HomeLayout"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbySeo, BreadcrumbJsonLd } from "gatsby-plugin-next-seo"
import { MenuType } from "../components/Common/Mobile/MobileNavBar"

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
          links {
            twitter
          }
        }
      }
    }
  `)

  const posts: any[] = data.allMarkdownRemark.edges.map(
    (each: any) => each.node.frontmatter
  )

  const {
    title,
    twitterHandle,
    description,
    homepage,
    menu,
  } = data.site.siteMetadata

  const pageTitle = `${title}'s personal blog | ${title}`

  return (
    <HomeLayout>
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
              url: homepage + require("../assets/images/profile-pic.jpg"),
              width: 460,
              height: 460,
              alt: "Dani Akash",
            },
            {
              url: homepage + require("../assets/images/favicon.png"),
              width: 600,
              height: 600,
              alt: "Dani Akash",
            },
          ],
          site_name: pageTitle,
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={menu
          .slice(0, 1)
          .map((menuItem: MenuType, menuItemIndex: number) => {
            return {
              position: menuItemIndex + 1,
              name: menuItem.label,
              item: homepage + menuItem.path,
            }
          })}
      />
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
