import React, { Fragment } from "react"
import { View, StyleSheet } from "react-native"
import { NavBarProps } from "./Mobile/MobileNavBar"
import useColors from "../../hooks/useColors"
import { READING_FONT } from "../../assets/styles/fonts"
import { Link } from "gatsby"
import BlankSpacer from "react-native-blank-spacer"

const NavBar = ({ menu, containerStyle }: NavBarProps) => {
  const colors = useColors()

  return (
    <View style={[styles.navbarContainer, containerStyle]}>
      {menu.map((item, itemIndex) => {
        return (
          <Fragment key={itemIndex}>
            <style>
              {`a.${item.label}${itemIndex} {
                color: ${colors.color4};
                font-family: ${READING_FONT};
                font-size: 18px;
              }
              a.${item.label}${itemIndex}.active {
                color: ${colors.color2};
                text-decoration-line: underline;
              }
              a.${item.label}${itemIndex}:hover {
                text-decoration-line: underline;
              }`}
            </style>
            <View style={styles.linkContainer}>
              <BlankSpacer height={24} />
              <Link
                className={`${item.label}${itemIndex}`}
                activeClassName={`active`}
                to={item.path}
              >
                {item.label}
              </Link>
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
})

export default NavBar
