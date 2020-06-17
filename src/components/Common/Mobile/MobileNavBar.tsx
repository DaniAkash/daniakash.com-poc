import React, { Fragment } from "react"
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native"
import { Link } from "gatsby"
import { READING_FONT } from "../../../assets/styles/fonts"
import useColors from "../../../hooks/useColors"
import useResponsiveWidth from "../../../hooks/useResponsiveWidth"

export type MenuType = {
  label: string
  path: string
}

export type NavBarProps = {
  menu: MenuType[]
  containerStyle?: StyleProp<ViewStyle>
}

const MobileNavBar = ({ menu, containerStyle }: NavBarProps) => {
  const width = useResponsiveWidth(100)

  const colors = useColors()

  return (
    <View style={[styles.navbar, { width }, containerStyle]}>
      {menu.map((item, itemIndex) => {
        return (
          <Fragment key={itemIndex}>
            <style>
              {`a.${item.label}${itemIndex} {
                color: ${colors.backgroundColor};
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
            <Link
              className={`${item.label}${itemIndex}`}
              activeClassName={`active`}
              to={item.path}
            >
              {item.label}
            </Link>
          </Fragment>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  navLink: {
    textDecorationLine: "underline",
  },
})

export default MobileNavBar
