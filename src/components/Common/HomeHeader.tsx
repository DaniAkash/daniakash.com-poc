import React, { useRef } from "react"
import { HeaderProps } from "./Mobile/MobileHomeHeader"
import { View, StyleSheet } from "react-native"
import useColors from "../../hooks/useColors"
import { H1, P, A } from "@expo/html-elements"
import { HERO_FONT, READING_FONT } from "../../assets/styles/fonts"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./NavBar"
import BlankSpacer from "react-native-blank-spacer"
import CopyrightText from "./CopyrightText"

const HomeHeader = ({
  title,
  description,
  trivia,
  menu,
  copyright,
  containerStyle,
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

  return (
    <View style={[styles.homeHeaderContainer, containerStyle]}>
      {/** TODO: Add a tooltip */}
      <A href={require("../../assets/images/profile-pic.jpg")}>
        <Img
          style={profilePicStyle}
          fluid={query.file.childImageSharp.fluid}
          alt="dani-akash"
          loading="eager"
        />
      </A>
      <H1
        style={[
          styles.pageTitle,
          {
            color: colors.color4,
          },
        ]}
      >
        {title}
      </H1>
      <P
        style={[
          styles.infoText,
          {
            color: colors.color4,
          },
        ]}
      >
        {description}
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
    </View>
  )
}

const styles = StyleSheet.create({
  homeHeaderContainer: {},
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
    marginVertical: 0,
    maxWidth: 175,
    minHeight: 44,
  },
})

export default HomeHeader
