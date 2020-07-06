import React, { ReactNode } from "react"
import { createMedia } from "@artsy/fresnel"
import { View, StyleProp } from "react-native"
import { ViewStyle } from "@expo/html-elements/build/primitives/View"
export const {
  MediaContextProvider: PrimaryLayoutProvider,
  Media: PrimaryLayout,
  createMediaStyle,
} = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 481,
    desktop: 1025,
  },
})

export const PrimaryLayoutStyle = createMediaStyle()

export const ResponsiveView = ({
  children,
  style,
  mobileStyle,
  tabletStyle,
  desktopStyle,
}: {
  children: ReactNode
  style?: StyleProp<ViewStyle>
  mobileStyle?: StyleProp<ViewStyle>
  tabletStyle?: StyleProp<ViewStyle>
  desktopStyle?: StyleProp<ViewStyle>
}) => {
  return (
    <>
      <PrimaryLayout at="mobile">
        <View style={[style, mobileStyle]}>{children}</View>
      </PrimaryLayout>

      <PrimaryLayout at="tablet">
        <View style={[style, tabletStyle]}>{children}</View>
      </PrimaryLayout>

      <PrimaryLayout greaterThanOrEqual="desktop">
        <View style={[style, desktopStyle]}>{children}</View>
      </PrimaryLayout>
    </>
  )
}
