import React from "react"
import { View, StyleSheet } from "react-native"
import { H2, P } from "@expo/html-elements"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { HERO_FONT, READING_FONT } from "../assets/styles/fonts"
import useColors from "../hooks/useColors"
import NativeLink from "./Common/NativeLink"

export type ProfileCardProps = {
  title: string
  twitterHandle: string
}

const ProfileCard = ({ title, twitterHandle }: ProfileCardProps) => {
  const query = useStaticQuery(graphql`
    query ProfileCardImageQuery {
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
    height: "75px",
    width: "75px",
    borderRadius: "8px",
  }

  return (
    <View style={styles.profileCardContainer}>
      <NativeLink url={"/"}>
        <Img
          style={profilePicStyle}
          fluid={query.file.childImageSharp.fluid}
          alt="dani-akash"
        />
      </NativeLink>
      <View style={styles.textContainer}>
        <NativeLink
          style={{ color: colors.color4 }}
          hoveredStyle={{ color: colors.color2 }}
          url={`/`}
        >
          <H2 style={styles.titleText}>{title}</H2>
        </NativeLink>
        <NativeLink
          style={{ color: colors.color4 }}
          hoveredStyle={{ color: colors.color2 }}
          openNewTab
          url={`https://twitter.com/${twitterHandle}`}
        >
          <P style={styles.followText}>Follow me on twitter</P>
        </NativeLink>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileCardContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: "1rem",
  },
  titleText: {
    marginVertical: 0,
    fontFamily: HERO_FONT,
    fontSize: "2rem",
  },
  followText: {
    marginVertical: 0,
    fontFamily: READING_FONT,
    fontSize: "0.8rem",
  },
})

export default ProfileCard
