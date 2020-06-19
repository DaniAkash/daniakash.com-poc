import React from "react"
import { View, StyleSheet, StyleProp } from "react-native"
import { Link } from "gatsby"
import { Time, H2, P } from "@expo/html-elements"
import { ViewStyle } from "@expo/html-elements/build/primitives/View"
import { READING_FONT } from "../../assets/styles/fonts"
import useColors from "../../hooks/useColors"
import BlankSpacer from "react-native-blank-spacer"
import dayjs from "dayjs"
import NativeLink from "./NativeLink"
import { POST_DATE_FORMAT } from "../../assets/styles/dateformats"

export type PostSummaryProps = {
  containerStyle: StyleProp<ViewStyle>
  title: string
  description: string
  date: string
  category: string
  url: string
  path: string
}

const PostSummary = ({
  containerStyle,
  title,
  description,
  date,
  category,
  url,
  path,
}: PostSummaryProps) => {
  const colors = useColors()

  return (
    <View style={[styles.postSummary, containerStyle]}>
      <View style={styles.infoRow}>
        <Time
          style={[styles.dateText, { color: colors.color3 }]}
          dateTime={dayjs(date).format(POST_DATE_FORMAT)}
        >
          {dayjs(date).format(POST_DATE_FORMAT)}
        </Time>
        <NativeLink
          style={[styles.categoryText, { color: colors.color5 }]}
          hoveredStyle={{ color: colors.color2 }}
          url={category}
        >
          {category}
        </NativeLink>
      </View>
      <BlankSpacer height={16} />
      <View style={styles.titleSection}>
        <NativeLink
          style={{ color: colors.color2 }}
          hoveredStyle={{ color: colors.color4 }}
          openNewTab
          url={url || path}
        >
          <H2 style={[styles.title]}>{title}</H2>
        </NativeLink>
      </View>
      <BlankSpacer height={16} />
      <View style={styles.contentSection}>
        <P style={[styles.content, { color: colors.textColor }]}>
          {description}
        </P>
      </View>
      <BlankSpacer height={16} />
      <View style={styles.linkSection}>
        <NativeLink
          url={url || path}
          openNewTab
          style={[styles.readMoreText, { color: colors.color4 }]}
          hoveredStyle={{ color: colors.color2 }}
        >
          Read
        </NativeLink>
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
    textTransform: "capitalize",
  },
  categoryText: {
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: READING_FONT,
    textTransform: "capitalize",
    marginBottom: 2,
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
  readMoreText: {
    fontFamily: READING_FONT,
    fontWeight: "normal",
    fontSize: 14,
  },
})

export default PostSummary
