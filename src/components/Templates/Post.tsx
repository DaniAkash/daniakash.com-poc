import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { graphql } from "gatsby"
import PostLayout from "../Layouts/PostLayout"
import { READING_FONT } from "../../assets/styles/fonts"
import NativeLink from "../Common/NativeLink"
import { H1, P, Time } from "@expo/html-elements"
import useColors from "../../hooks/useColors"
import BlankSpacer from "react-native-blank-spacer"
import Pill from "../Common/Pill"
import { POST_DATE_FORMAT } from "../../assets/styles/dateformats"
import dayjs from "dayjs"
import FacebookIcon from "../../assets/svg/facebook-icon.min.svg"
import TwitterIcon from "../../assets/svg/twitter-icon.min.svg"
import ProfileCard from "../ProfileCard"
import PostStyle from "../Common/PostStyle"
import { PrimaryLayout, ResponsiveView } from "../../LayoutEngine/PrimaryLayout"

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
    site: {
      siteMetadata: { twitterHandle, title: authorTitle },
    },
  },
  pageContext: { previousPost, nextPost },
}: any) => {
  const [currentUrl, setCurrentUrl] = useState("")

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  const colors = useColors()

  return (
    <PostLayout>
      <PostStyle />
      <ResponsiveView
        style={styles.contentContainer}
        mobileStyle={styles.mobileContent}
      >
        <PrimaryLayout greaterThanOrEqual="desktop">
          <BlankSpacer height={"3.5rem"} />
        </PrimaryLayout>
        <PrimaryLayout lessThan="desktop">
          <BlankSpacer height="4.5rem" />
        </PrimaryLayout>
        <H1 style={[styles.title, { color: colors.color2 }]}>{title}</H1>
        <BlankSpacer height={"1rem"} />
        <div
          style={{
            color: colors.textColor,
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <BlankSpacer height={"2rem"} />
        <ResponsiveView
          style={styles.infoTextRow}
          mobileStyle={styles.infoTextRowMobile}
        >
          <P style={[styles.infoText, { color: colors.textColor }]}>
            Published{" "}
            <Time
              style={[styles.publishedTime, { color: colors.color3 }]}
              dateTime={dayjs(date).format(POST_DATE_FORMAT)}
            >
              {dayjs(date).format(POST_DATE_FORMAT)}
            </Time>
          </P>
          <View style={styles.infoText}>
            <NativeLink
              openNewTab
              url={`https://twitter.com/search?q=${encodeURI(currentUrl)}`}
              style={{
                color: colors.color4,
              }}
              hoveredStyle={[
                {
                  color: colors.color2,
                },
                styles.infoLink,
              ]}
            >
              Discuss on Twitter
            </NativeLink>
            <P style={{ color: colors.textColor }}>{` or Share on `}</P>
            <NativeLink
              openNewTab
              url={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                currentUrl
              )}`}
            >
              <View style={styles.facebookIcon}>
                <FacebookIcon />
              </View>
            </NativeLink>{" "}
            <NativeLink
              openNewTab
              url={`https://twitter.com/intent/tweet?url=${encodeURI(
                currentUrl
              )}&text=${title}`}
            >
              <View style={styles.twitterIcon}>
                <TwitterIcon />
              </View>
            </NativeLink>
          </View>
        </ResponsiveView>
        <BlankSpacer height={"2rem"} />
        <View style={styles.tagsRow}>
          {tags.map((tag, tagIndex) => {
            return <Pill text={tag} key={tagIndex} />
          })}
        </View>
        <BlankSpacer height={"2rem"} />
        <ResponsiveView
          style={styles.linkRow}
          mobileStyle={styles.linkMobileRow}
        >
          <View style={styles.linkContainer}>
            {nextPost ? (
              <>
                <NativeLink url={nextPost.frontmatter.path || ""}>
                  <Text style={[styles.arrowIcon, { color: colors.color2 }]}>
                    {"<"}
                  </Text>
                </NativeLink>
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
                <NativeLink url={previousPost.frontmatter.path || ""}>
                  <Text style={[styles.arrowIcon, { color: colors.color2 }]}>
                    {">"}
                  </Text>
                </NativeLink>
              </>
            ) : null}
          </View>
        </ResponsiveView>
        <BlankSpacer height={"2rem"} />
        <ProfileCard twitterHandle={twitterHandle} title={authorTitle} />
      </ResponsiveView>
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
    site(siteMetadata: {}) {
      siteMetadata {
        twitterHandle
        title
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
  infoTextRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoTextRowMobile: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    fontFamily: READING_FONT,
    fontSize: "0.9rem",
    lineHeight: "1.5rem",
    fontWeight: 400,
    letterSpacing: "0.03rem",
    fontStyle: "italic",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  infoLink: {
    textDecorationLine: "underline",
  },
  publishedTime: {},
  facebookIcon: {
    height: "1.5rem",
    width: "1.5rem",
    marginLeft: "0.2rem",
    marginTop: 4,
  },
  twitterIcon: {
    height: "1.6rem",
    width: "1.6rem",
    marginLeft: "0.6rem",
    marginTop: 4,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default Post
