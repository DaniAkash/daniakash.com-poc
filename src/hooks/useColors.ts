import { Appearance, ColorSchemeName } from "react-native-appearance"
import { darkColors, lightColors } from "../assets/styles/colors"
import { createRexStore } from "rex-state"
import { useState, useEffect } from "react"

/**
 * TODO: This whole file is a big mistake
 */

const colorPreferenceKey = "@daniakash.com/color-scheme"

export const colorSchemeUtil: {
  setColorScheme?: React.Dispatch<React.SetStateAction<ColorSchemeName>>
} = {}

const useColorsStore = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme())

  useEffect(() => {
    setColorScheme(
      (window.localStorage.getItem(colorPreferenceKey) as ColorSchemeName) ||
        Appearance.getColorScheme()
    )
  }, [])

  useEffect(() => {
    window.localStorage.setItem(colorPreferenceKey, colorScheme)
  })

  colorSchemeUtil.setColorScheme = setColorScheme

  return colorScheme === "light" || colorScheme === "no-preference"
    ? lightColors
    : darkColors
}

const { useStore: useColors, RexProvider } = createRexStore(useColorsStore)

export const ColorProvider = RexProvider

export default useColors
