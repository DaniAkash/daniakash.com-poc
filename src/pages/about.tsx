import React from "react"
import { View, StyleSheet } from "react-native"
import HomeLayout from "../components/Layouts/HomeLayout"
import BlankSpacer from "react-native-blank-spacer"
import { H2, P } from "@expo/html-elements"
import { HERO_FONT, READING_FONT } from "../assets/styles/fonts"
import useColors from "../hooks/useColors"
import NativeLink from "../components/Common/NativeLink"

const About = () => {
  const colors = useColors()

  const regularStyle = [styles.regularText, { color: colors.textColor }]

  return (
    <HomeLayout>
      <BlankSpacer height={48} />
      <View style={styles.aboutContainer}>
        <H2 style={[styles.welcomeTitle, { color: colors.color4 }]}>Hi!</H2>
        <P style={regularStyle}>
          <P style={[styles.boldText, { color: colors.color4 }]}>I'm Dani</P>, I
          build & teach people build quality software. I mostly do programming
          work but I also love to mentor people, write, travel & plan fun
          projects over the weekend
        </P>
        <P style={regularStyle}>
          I do lots of{" "}
          <NativeLink
            openNewTab
            url={`https://github.com/DaniAkash`}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            open source
          </NativeLink>{" "}
          work which you can follow in my{" "}
          <NativeLink
            openNewTab
            url={`https://trello.com/b/1zB34Jab/whats-dani-upto`}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            Trello Board
          </NativeLink>
          . Most of my work is based on the React & React Native ecosystem but I
          can work relatively well with other JavaScript libraries & frameworks
          too
        </P>
        <P style={regularStyle}>
          Checkout my tech blog{" "}
          <NativeLink
            openNewTab
            url={`https://nodemodules.xyz`}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            node_modules
          </NativeLink>{" "}
          📦 & my book{" "}
          <NativeLink
            openNewTab
            url={`https://www.amazon.in/JavaScript-Example-Dani-Akash/dp/1788293967`}
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
            url={`https://twitter.com/dani_akash_`}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            twitter
          </NativeLink>{" "}
          if you want to talk about quantum mechanics or string theory. Also
          checkout my tiny science blog{" "}
          <NativeLink
            openNewTab
            url={`https://scienceandstardust.com`}
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
            url={`https://myanimelist.net/profile/PirateHunter`}
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
            url={`https://twitter.com/dani_akash_`}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            Twitter
          </NativeLink>{" "}
          ﹣{" "}
          <NativeLink
            openNewTab
            url={`https://github.com/DaniAkash`}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            Github
          </NativeLink>{" "}
          ﹣{" "}
          <NativeLink
            openNewTab
            url={`https://www.linkedin.com/in/daniakash`}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            LinkedIn
          </NativeLink>{" "}
          ﹣{" "}
          <NativeLink
            openNewTab
            url={`https://stackoverflow.com/users/5597641/dani-akash`}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            Stack Overflow
          </NativeLink>{" "}
          ﹣{" "}
          <NativeLink
            openNewTab
            url={`https://instagram.com/dani_akash_`}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            Instagram
          </NativeLink>{" "}
          ﹣{" "}
          <NativeLink
            openNewTab
            url={`https://www.reddit.com/user/dani_akash_`}
            style={{ color: colors.color4 }}
            hoveredStyle={[{ color: colors.color2 }, styles.linkText]}
          >
            Reddit
          </NativeLink>
        </P>
      </View>
      <BlankSpacer height={"2rem"} />
    </HomeLayout>
  )
}

const styles = StyleSheet.create({
  aboutContainer: {
    marginHorizontal: 24,
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
