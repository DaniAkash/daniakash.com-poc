import React from "react"
import { colorPreferenceKey } from "../hooks/useColors"
import { primaryPallete, primaryDarkPallete } from "../assets/styles/colors"

const MagicScriptTag = () => {
  let codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem("${colorPreferenceKey}")
    const hasPersistedPreference = typeof persistedColorPreference === "string"
    if (hasPersistedPreference) {
      return persistedColorPreference
    }
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const hasMediaQueryPreference = typeof mql.matches === "boolean"
    if (hasMediaQueryPreference) {
      return mql.matches ? "dark" : "light"
    }
    return "light"
  }
  const colorMode = getInitialColorMode();
  const root = document.documentElement;
  root.setAttribute("color-mode", colorMode)
  if(colorMode === "light") {
    root.style.setProperty('--color1', "${primaryPallete.color1}");
    root.style.setProperty('--color2', "${primaryPallete.color2}");
    root.style.setProperty('--color3', "${primaryPallete.color3}");
    root.style.setProperty('--color4', "${primaryPallete.color4}");
    root.style.setProperty('--color5', "${primaryPallete.color5}");
    root.style.setProperty('--gray', "${primaryPallete.gray}");
    root.style.setProperty('--gray2', "${primaryPallete.gray2}");
    root.style.setProperty('--gray3', "${primaryPallete.gray3}");
    root.style.setProperty('--gray4', "${primaryPallete.gray4}");
    root.style.setProperty('--gray5', "${primaryPallete.gray5}");
    root.style.setProperty('--gray6', "${primaryPallete.gray6}");
    root.style.setProperty('--text-color', "${primaryPallete.textColor}");
    root.style.setProperty('--bg-color', "${primaryPallete.backgroundColor}");
  } else {
    root.style.setProperty('--color1', "${primaryDarkPallete.color1}");
    root.style.setProperty('--color2', "${primaryDarkPallete.color2}");
    root.style.setProperty('--color3', "${primaryDarkPallete.color3}");
    root.style.setProperty('--color4', "${primaryDarkPallete.color4}");
    root.style.setProperty('--color5', "${primaryDarkPallete.color5}");
    root.style.setProperty('--gray', "${primaryDarkPallete.gray}");
    root.style.setProperty('--gray2', "${primaryDarkPallete.gray2}");
    root.style.setProperty('--gray3', "${primaryDarkPallete.gray3}");
    root.style.setProperty('--gray4', "${primaryDarkPallete.gray4}");
    root.style.setProperty('--gray5', "${primaryDarkPallete.gray5}");
    root.style.setProperty('--gray6', "${primaryDarkPallete.gray6}");
    root.style.setProperty('--text-color', "${primaryDarkPallete.textColor}");
    root.style.setProperty('--bg-color', "${primaryDarkPallete.backgroundColor}");
  }
})()`
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

export default MagicScriptTag
