import React, { useRef, ReactNode } from "react"
// @ts-ignore
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { useColorManager } from "../../hooks/useColors"

export const ThemeManager = ({ children }: { children: ReactNode }) => {
  const isThemeSet = useRef(false)
  const [, setColorScheme] = useColorManager()

  const setTheme = (theme, toggleTheme) => {
    if (!isThemeSet.current) {
      setColorScheme(theme, toggleTheme)
    }
    isThemeSet.current = true
  }

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        setTheme(theme, toggleTheme)
        return children
      }}
    </ThemeToggler>
  )
}
