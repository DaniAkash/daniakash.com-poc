import { Appearance, ColorSchemeName } from "react-native-appearance"
import { darkColors, lightColors } from "../assets/styles/colors"
import { createRexStore } from "rex-state"
import { useState, useEffect, useRef, ReactNode } from "react"

/**
 * TODO: This whole file is a big mistake
 */

export const colorSchemeUtil: {
  setColorScheme?: (scheme: ColorSchemeName) => any
} = {}

const useColorManagerStore = (): [
  ColorSchemeName,
  (
    initialTheme: ColorSchemeName,
    themeToggler?: ((themeName: ColorSchemeName) => any) | undefined
  ) => void
] => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme())
  const persistedToggler = useRef<any>(null)

  const changeColorScheme = (
    initialTheme: ColorSchemeName,
    themeToggler?: (themeName: ColorSchemeName) => any
  ) => {
    setColorScheme(initialTheme)
    themeToggler?.(initialTheme)
    if (themeToggler) {
      persistedToggler.current = themeToggler
    }
    persistedToggler.current?.(initialTheme)
  }

  return [colorScheme, changeColorScheme]
}

export const {
  useStore: useColorManager,
  RexProvider: ColorManager,
} = createRexStore(useColorManagerStore)

const useColorsStore = () => {
  const [colorScheme, setColorScheme] = useColorManager()

  const changeColorScheme = (scheme: ColorSchemeName) => {
    setColorScheme(scheme)
  }

  colorSchemeUtil.setColorScheme = changeColorScheme

  return colorScheme === "light" || colorScheme === "no-preference"
    ? lightColors
    : darkColors
}

const { useStore: useColors, RexProvider } = createRexStore(useColorsStore)

export const ColorProvider = RexProvider

export default useColors
