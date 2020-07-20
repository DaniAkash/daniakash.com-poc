import { StyleProp, ViewStyle } from "react-native"

export type MenuType = {
  label: string
  path: string
}

export type NavBarProps = {
  menu: MenuType[]
  containerStyle?: StyleProp<ViewStyle>
}
