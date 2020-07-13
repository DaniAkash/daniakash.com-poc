import React, { useRef } from "react"
import { HeaderProps } from "./Mobile/MobileHomeHeader"
import { View, StyleSheet } from "react-native"
import useColors from "../../hooks/useColors"
import { H1, P, A, H2 } from "@expo/html-elements"
import { HERO_FONT, READING_FONT } from "../../assets/styles/fonts"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./NavBar"
import BlankSpacer from "react-native-blank-spacer"
import CopyrightText from "./CopyrightText"
import { ResponsiveView } from "../../LayoutEngine/PrimaryLayout"

const HomeHeader = ({
  title,
  info,
  trivia,
  menu,
  copyright,
  containerStyle,
  isHeader = true,
}: HeaderProps) => {
  const triviaText = useRef(trivia[Math.floor(Math.random() * trivia.length)])
    .current

  const query = useStaticQuery(graphql`
    query DesktopProfilePicQuery {
      file(relativePath: { eq: "profile-pic.jpg" }) {
        id
        childImageSharp {
          fluid {
            base64
            aspectRatio
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)

  const colors = useColors()

  const profilePicStyle = {
    height: "175px",
    width: "175px",
    borderRadius: "24px",
  }

  const HeaderComponent = isHeader ? H1 : H2

  return (
    <ResponsiveView
      desktopStyle={styles.desktopContainer}
      tabletStyle={styles.tabletContainer}
      style={[styles.homeHeaderContainer, containerStyle]}
    >
      {/** TODO: Add a tooltip */}
      <A href={require("../../assets/images/profile-pic.jpg")}>
        <Img
          style={profilePicStyle}
          fluid={query.file.childImageSharp.fluid}
          alt="dani-akash"
          loading="eager"
        />
      </A>
      <HeaderComponent
        style={[
          styles.pageTitle,
          {
            color: colors.color4,
          },
        ]}
      >
        {title}
      </HeaderComponent>
      <P
        style={[
          styles.infoText,
          {
            color: colors.color4,
          },
        ]}
      >
        {info}
      </P>
      <BlankSpacer height={16} />
      <P
        style={[
          styles.triviaText,
          {
            color: colors.color4,
          },
        ]}
      >
        {triviaText}
      </P>
      <BlankSpacer height={16} />
      <NavBar menu={menu} />
      <BlankSpacer height={48} />
      <CopyrightText copyright={copyright} />
    </ResponsiveView>
  )
}

const styles = StyleSheet.create({
  homeHeaderContainer: {
    height: "100vh",
    justifyContent: "center",
  },
  desktopContainer: {
    paddingHorizontal: "12vw",
  },
  tabletContainer: {
    paddingHorizontal: "8vw",
  },
  pageTitle: {
    fontFamily: HERO_FONT,
    fontSize: "3rem",
    marginVertical: 0,
  },
  infoText: {
    fontFamily: READING_FONT,
    fontSize: "0.8rem",
    marginVertical: 0,
    marginTop: 0,
    maxWidth: 175,
  },
  triviaText: {
    fontFamily: READING_FONT,
    fontSize: "0.7rem",
    fontWeight: "300",
    lineHeight: "1rem",
    marginVertical: 0,
    maxWidth: 175,
    minHeight: 48,
  },
})

export default HomeHeader
