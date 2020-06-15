import { useColorScheme } from "react-native-appearance"
import { darkColors, lightColors } from "../assets/colors"

const useColors = () => {
  const colorScheme = useColorScheme()

  return colorScheme === "light" ? lightColors : darkColors
}

export default useColors
