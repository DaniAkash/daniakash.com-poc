import React from "react"
import { StyleSheet } from "react-native"
import HomeLayout from "../components/Layouts/HomeLayout"
import BlankSpacer from "react-native-blank-spacer"
import { H2, P } from "@expo/html-elements"
import { READING_FONT } from "../assets/styles/fonts"
import useColors from "../hooks/useColors"
import NativeLink from "../components/Common/NativeLink"
import { useStaticQuery, graphql } from "gatsby"
import { ResponsiveView, PrimaryLayout } from "../LayoutEngine/PrimaryLayout"
import { GatsbySeo, BreadcrumbJsonLd } from "gatsby-plugin-next-seo"
import { MenuType } from "../components/Common/Mobile/MobileNavBar"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
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
            trello
            stackoverflow
            scienceandstardust
            reddit
            nodemodules
            myanimelist
            javascriptByExample
            linkedIn
            instagram
            github
            facebook
          }
        }
      }
    }
  `)

  const colors = useColors()

  const regularStyle = [styles.regularText, { color: colors.textColor }]

  const {
    title,
    twitterHandle,
    description,
    homepage,
    menu,
    links,
  } = data.site.siteMetadata

  const {
    twitter,
    trello,
    stackoverflow,
    scienceandstardust,
    reddit,
    nodemodules,
    myanimelist,
    javascriptByExample,
    linkedIn,
    instagram,
    github,
    facebook,
  } = links

  const pageTitle = `About | ${title}`

  const canonical = homepage + menu[1].path

  return (
    <HomeLayout>
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
          .slice(0, 2)
          .map((menuItem: MenuType, menuItemIndex: number) => {
            return {
              position: menuItemIndex + 1,
              name: menuItem.label,
              item: homepage + menuItem.path,
            }
          })}
      />
      <PrimaryLayout lessThan={"tablet"}>
        <BlankSpacer height={48} />
      </PrimaryLayout>
      <ResponsiveView
        style={styles.aboutContainer}
        desktopStyle={styles.centerPage}
        tabletStyle={styles.centerPage}
      >
        <H2 style={[styles.welcomeTitle, { color: colors.color4 }]}>Hi!</H2>
        <P style={regularStyle}>
          <P style={[styles.boldText, { color: colors.color4 }]}>I'm Dani</P>, I
          build & teach people to build quality software. I mostly do
          programming work but I also love to write, travel & plan fun projects
          over the weekend
        </P>
        <P style={regularStyle}>
          I do lots of{" "}
          <NativeLink
            openNewTab
            url={github}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            open source
          </NativeLink>{" "}
          work which you can follow in my{" "}
          <NativeLink
            openNewTab
            url={trello}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            Trello Board
          </NativeLink>
          . Most of my work is based on the React & React Native ecosystem but I
          can work relatively well with other JavaScript libraries & frameworks
          too! 😁
        </P>
        <P style={regularStyle}>
          Checkout my tech blog{" "}
          <NativeLink
            openNewTab
            url={nodemodules}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            node_modules
          </NativeLink>{" "}
          📦 & my book{" "}
          <NativeLink
            openNewTab
            url={javascriptByExample}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            JavaScript By Example
          </NativeLink>{" "}
          📕
        </P>
        <P style={regularStyle}>
          I'd love to talk science, DM me on{" "}
          <NativeLink
            openNewTab
            url={twitter}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            twitter
          </NativeLink>{" "}
          if you want to talk about quantum mechanics or string theory. Also
          checkout my tiny science blog{" "}
          <NativeLink
            openNewTab
            url={scienceandstardust}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            Science & Stardust
          </NativeLink>{" "}
          🛰
        </P>
        <P style={regularStyle}>
          If you like watching anime, send me a friend request on{" "}
          <NativeLink
            openNewTab
            url={myanimelist}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            MyAnimeList
          </NativeLink>
        </P>
        <BlankSpacer height={"2rem"} />
        <P style={[regularStyle, styles.linkArea]}>
          <NativeLink
            openNewTab
            url={twitter}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            Twitter
          </NativeLink>{" "}
          ﹣{" "}
          <NativeLink
            openNewTab
            url={github}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            Github
          </NativeLink>{" "}
          ﹣{" "}
          <NativeLink
            openNewTab
            url={linkedIn}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            LinkedIn
          </NativeLink>{" "}
          ﹣{" "}
          <NativeLink
            openNewTab
            url={stackoverflow}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            Stack Overflow
          </NativeLink>{" "}
          ﹣{" "}
          <NativeLink
            openNewTab
            url={instagram}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            Instagram
          </NativeLink>{" "}
          ﹣{" "}
          <NativeLink
            openNewTab
            url={reddit}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            Reddit
          </NativeLink>{" "}
          ﹣{" "}
          <NativeLink
            openNewTab
            url={facebook}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            Facebook
          </NativeLink>
        </P>
      </ResponsiveView>
      <PrimaryLayout lessThan={"tablet"}>
        <BlankSpacer height={"2rem"} />
      </PrimaryLayout>
    </HomeLayout>
  )
}

const styles = StyleSheet.create({
  aboutContainer: {
    marginHorizontal: 24,
  },
  centerPage: {
    height: "100vh",
    justifyContent: "center",
  },
  welcomeTitle: {
    fontFamily: READING_FONT,
    fontSize: "3rem",
    lineHeight: "1.5rem",
    letterSpacing: "0.03rem",
  },
  regularText: {
    fontFamily: READING_FONT,
    fontSize: "0.9rem",
    lineHeight: "1.5rem",
    letterSpacing: "0.02rem",
    fontWeight: "400",
  },
  boldText: {
    fontSize: "1.1rem",
    fontWeight: "600",
  },
  linkText: {
    textDecorationLine: "underline",
  },
  linkArea: { textAlign: "center" },
})

export default About
