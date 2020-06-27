import React from "react"
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import Modal from "../../../Modal/Modal"
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
      animationType={"slide"}
      style={styles.nativeModalContainer}
      visible={isVisible}
      onRequestClose={toggleHamburger}
    >
      {isVisible ? (
        <View
          // onPress={toggleHamburger}
          style={styles.modalBackdrop}
        >
          <View
            style={[
              styles.modalContainer,
              { backgroundColor: colors.backgroundColor },
            ]}
          >
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
                    activeUrlStyle={{
                      textDecorationLine: "underline",
                      color: colors.color2,
                    }}
                  >
                    {item.label}
                  </NativeLink>
                </AnimatableView>
              )
            })}
          </View>
        </View>
      ) : null}
    </Modal>
  )
}

const styles = StyleSheet.create({
  nativeModalContainer: {
    position: "absolute",
    height: "100vh",
    width: "100vw",
    margin: 0,
    borderColor: "transparent",
  },
  modalBackdrop: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
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
})

export default MobileHamburgerMenu
