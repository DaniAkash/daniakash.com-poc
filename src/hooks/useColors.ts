import { useColorScheme } from "react-native-appearance"
import { darkColors, lightColors } from "../assets/styles/colors"

const useColors = () => {
  // const colorScheme = useColorScheme()

  // return colorScheme === "light" ? lightColors : darkColors
  return lightColors
}

export default useColors
