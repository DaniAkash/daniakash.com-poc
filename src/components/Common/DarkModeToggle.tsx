import React, { useState, useEffect } from "react"
import Switch from "expo-dark-mode-switch"
import { StyleSheet, View } from "react-native"
import { toggleColorScheme, getCurrentColorMode } from "../../hooks/useColors"
import { useCurrentPrimaryLayout } from "../../LayoutEngine/Layout/PrimaryLayout"

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null)
  const layout = useCurrentPrimaryLayout()

  const toggleDarkMode = () => {
    toggleColorScheme()
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const currentMode = getCurrentColorMode()
    if (currentMode === "dark") {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

  if (typeof isDarkMode === "boolean") {
    return (
      <View
        style={
          layout === "desktop"
            ? styles.desktopDarkModeToggle
            : styles.mobileDarkModeToggle
        }
      >
        <Switch value={isDarkMode} onChange={toggleDarkMode} />
      </View>
    )
  }

  return null
}

const styles = StyleSheet.create({
  desktopDarkModeToggle: {
    position: "absolute",
    top: "1.6rem",
    right: "2rem",
    padding: "1rem",
    transform: [
      {
        scale: 0.5,
      },
    ],
  },
  mobileDarkModeToggle: {
    position: "absolute",
    top: 8,
    right: -4,
    transform: [
      {
        scale: 0.5,
      },
    ],
  },
})

export default DarkModeToggle
