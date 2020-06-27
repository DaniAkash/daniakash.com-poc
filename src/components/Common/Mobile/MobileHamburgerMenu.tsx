import React from "react"
import { View, StyleSheet } from "react-native"
// @ts-ignore
import Modal from "modal-enhanced-react-native-web"
import useColors from "../../../hooks/useColors"
import { MenuType } from "./MobileNavBar"
import NativeLink from "../NativeLink"
import * as Animatable from "react-native-animatable"
import { READING_FONT } from "../../../assets/styles/fonts"

const { createAnimatableComponent } = Animatable

const AnimatableView = createAnimatableComponent(View)

export interface MobileHamburgerMenuProps {
  isVisible: boolean
  toggleHamburger: () => any
  menu: MenuType[]
}

const MobileHamburgerMenu = ({
  isVisible,
  toggleHamburger,
  menu,
}: MobileHamburgerMenuProps) => {
  const colors = useColors()

  return (
    <Modal
      animationType={"slideInUp"}
      isVisible={isVisible}
      onRequestClose={toggleHamburger}
      backdropColor={colors.backgroundColor}
      hasBackdrop
      backdropOpacity={0.9}
      onBackdropPress={toggleHamburger}
    >
      {isVisible ? (
        <View style={[styles.modalContainer]}>
          {menu.map((item, itemIndex) => {
            return (
              <AnimatableView
                animation={"fadeInUp"}
                style={styles.linkWrapper}
                delay={100 * (itemIndex + 1)}
              >
                <NativeLink
                  style={[styles.linkText, { color: colors.color4 }]}
                  hoveredStyle={{ color: colors.color2 }}
                  openNewTab
                  url={item.path}
                  activeUrlStyle={[
                    styles.linkActive,
                    {
                      color: colors.color2,
                    },
                  ]}
                >
                  {item.label}
                </NativeLink>
              </AnimatableView>
            )
          })}
        </View>
      ) : null}
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    opacity: 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  linkWrapper: {
    margin: "1rem",
  },
  linkText: {
    fontFamily: READING_FONT,
    fontWeight: "600",
    fontSize: "1.2rem",
  },
  linkActive: {
    textDecorationLine: "underline",
  },
})

export default MobileHamburgerMenu
