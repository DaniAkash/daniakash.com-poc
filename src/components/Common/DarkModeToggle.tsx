import React, { useState, useEffect } from "react"
import Switch from "expo-dark-mode-switch"
import { toggleColorScheme, getCurrentColorMode } from "../../hooks/useColors"

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null)

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

  if (typeof isDarkMode === "boolean")
    return <Switch value={isDarkMode} onChange={toggleDarkMode} />

  return null
}

export default DarkModeToggle
