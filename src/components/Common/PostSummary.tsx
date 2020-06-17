import React from "react"
import { View, StyleSheet, StyleProp } from "react-native"
import { Link } from "gatsby"
import { Time, H2, P } from "@expo/html-elements"
import { ViewStyle } from "@expo/html-elements/build/primitives/View"
import { READING_FONT } from "../../assets/styles/fonts"
import useColors from "../../hooks/useColors"
import BlankSpacer from "react-native-blank-spacer"

export type PostSummaryProps = {
  containerStyle: StyleProp<ViewStyle>
}

const PostSummary = ({ containerStyle }: PostSummaryProps) => {
  const colors = useColors()

  return (
    <View style={[styles.postSummary, containerStyle]}>
      <View style={styles.infoRow}>
        <Time
          style={[styles.dateText, { color: colors.color3 }]}
          dateTime="April 1, 2020"
        >
          April 2020
        </Time>
        <style>
          {`a.p-summary-category {
          color: ${colors.color5};
          font-family: ${READING_FONT};
          font-weight: bold;
          font-size: 14px;
        }
        a.p-summary-category:hover {
          color: ${colors.color2};
        }`}
        </style>
        <Link className={"p-summary-category"} to="/">
          Tech Talks
        </Link>
      </View>
      <BlankSpacer height={16} />
      <View style={styles.titleSection}>
        <H2 style={[styles.title, { color: colors.color2 }]}>
          Visualize application state with XSTATE
        </H2>
      </View>
      <BlankSpacer height={16} />
      <View style={styles.contentSection}>
        <P style={[styles.content, { color: colors.textColor }]}>
          A quick tutorial on how we can visualize complex states with Finite
          State Machines & XSTATE. Third video for the people under self
          quarantine.
        </P>
      </View>
      <BlankSpacer height={16} />
      <View style={styles.linkSection}>
        <style>
          {`a.p-read-more {
          color: ${colors.color4};
          font-family: ${READING_FONT};
          font-weight: normal;
          font-size: 14px;
        }
        a.p-read-more:hover {
          color: ${colors.color2};
        }`}
        </style>
        <Link className={"p-read-more"} to="/">
          Read
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  postSummary: {},
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  dateText: {
    fontFamily: READING_FONT,
    fontSize: 18,
    marginRight: 16,
  },
  titleSection: {},
  title: {
    marginVertical: 0,
    fontFamily: READING_FONT,
    fontSize: 24,
  },
  content: {
    marginVertical: 0,
    fontFamily: READING_FONT,
    fontSize: 14,
  },
  contentSection: {},
  linkSection: {
    alignSelf: "flex-start",
  },
})

export default PostSummary
