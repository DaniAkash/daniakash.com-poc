import React from "react"
import { Text, StyleSheet } from "react-native"
import HomeLayout from "../components/Layouts/HomeLayout"
import useColors from "../hooks/useColors"
import { READING_FONT } from "../assets/styles/fonts"
import { ResponsiveView } from "../LayoutEngine/PrimaryLayout"
import { useStaticQuery, graphql } from "gatsby"
import { BreadcrumbJsonLd, GatsbySeo } from "gatsby-plugin-next-seo"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectPageQuery {
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
  `)

  const {
    title,
    twitterHandle,
    description,
    homepage,
    menu,
  } = data.site.siteMetadata

  const colors = useColors()

  const pageTitle = `Projects | ${title}`

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
        itemListElements={[
          {
            position: 1,
            name: menu[0].label,
            item: homepage + menu[0].path,
          },
          {
            position: 2,
            name: menu[3].label,
            item: homepage + menu[3].path,
          },
        ]}
      />
      <ResponsiveView
        style={styles.projectContainer}
        mobileStyle={styles.mobileContainer}
      >
        <Text style={[styles.comingSoonText, { color: colors.textColor }]}>
          👷🏽‍♂️ I'm working on this page...
        </Text>
      </ResponsiveView>
    </HomeLayout>
  )
}

const styles = StyleSheet.create({
  projectContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mobileContainer: {
    marginTop: "25vh",
  },
  comingSoonText: {
    fontFamily: READING_FONT,
    fontSize: "1rem",
  },
})

export default Projects
