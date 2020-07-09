import React from "react"
import { Text, StyleSheet } from "react-native"
import HomeLayout from "../components/Layouts/HomeLayout"
import useColors from "../hooks/useColors"
import { READING_FONT } from "../assets/styles/fonts"
import { ResponsiveView } from "../LayoutEngine/PrimaryLayout"

const Projects = () => {
  const colors = useColors()

  return (
    <HomeLayout>
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
