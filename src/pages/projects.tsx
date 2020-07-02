import React from "react"
import { View, Text, StyleSheet } from "react-native"
import HomeLayout from "../components/Layouts/HomeLayout"
import { useCurrentPrimaryLayout } from "../LayoutEngine/Layout/PrimaryLayout"
import useColors from "../hooks/useColors"
import { READING_FONT } from "../assets/styles/fonts"

const Projects = () => {
  const layout = useCurrentPrimaryLayout()
  const colors = useColors()

  return (
    <HomeLayout>
      <View
        style={[
          styles.projectContainer,
          layout === "mobile" ? styles.mobileContainer : null,
        ]}
      >
        <Text style={[styles.comingSoonText, { color: colors.textColor }]}>
          👷🏽‍♂️ I'm working on this page...
        </Text>
      </View>
    </HomeLayout>
  )
}

const styles = StyleSheet.create({
  projectContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50vh",
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
