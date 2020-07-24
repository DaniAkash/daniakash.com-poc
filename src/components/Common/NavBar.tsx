import React, { Fragment } from "react"
import { View, StyleSheet } from "react-native"
import { NavBarProps } from "./Mobile/MobileNavBar"
import useColors from "../../hooks/useColors"
import { READING_FONT } from "../../assets/styles/fonts"
import BlankSpacer from "react-native-blank-spacer"
import NativeLink from "./NativeLink"

const NavBar = ({ menu, containerStyle }: NavBarProps) => {
  const colors = useColors()

  return (
    <View style={[styles.navbarContainer, containerStyle]}>
      {menu.map((item, itemIndex) => {
        return (
          <Fragment key={itemIndex}>
            <View style={styles.linkContainer}>
              <BlankSpacer height={24} />
              <NativeLink
                style={[styles.linkStyle, { color: colors.color4 }]}
                activeUrlStyle={styles.activeLinkStyle}
                hoveredStyle={styles.activeLinkStyle}
                openNewTab
                url={item.path}
              >
                {item.label}
              </NativeLink>
            </View>
          </Fragment>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  navbarContainer: {},
  linkContainer: {},
  linkStyle: {
    fontFamily: READING_FONT,
    fontSize: 18,
  },
  activeLinkStyle: {
    textDecorationLine: "underline",
  },
})

export default NavBar
