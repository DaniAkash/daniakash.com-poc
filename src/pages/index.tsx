import React from "react"
import { View, StyleSheet } from "react-native"
import PostSummary from "../components/Common/PostSummary"
import BlankSpacer from "react-native-blank-spacer"
import HomeLayout from "../components/Layouts/HomeLayout"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"

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

  const { title, twitterHandle, description, homepage } = data.site.siteMetadata

  return (
    <HomeLayout>
      <GatsbySeo
        title={title}
        description={description}
        canonical={homepage}
        twitter={{
          handle: twitterHandle,
          site: twitterHandle,
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: homepage,
          title,
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
          site_name: `Home - ${title}`,
        }}
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
