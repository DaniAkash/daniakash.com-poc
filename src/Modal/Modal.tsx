import React, { useRef, useEffect, ReactNode } from "react"
import { Modal as NativeModal, ModalProps, StyleProp } from "react-native"
import ReactDOM from "react-dom"
import { ViewStyle } from "@expo/html-elements/build/primitives/View"

const modalRoot = document.querySelector("body")

export interface IModalProps extends ModalProps {
  children?: ReactNode
  style?: StyleProp<ViewStyle>
}

const Modal = ({
  children,
  visible,
  onRequestClose,
  ...otherProps
}: IModalProps) => {
  const el = useRef(document.createElement("div"))

  useEffect(() => {
    const { current: element } = el

    const onEscPress = event => {
      console.log(event.key)
    }

    window.document.addEventListener("keypress", onEscPress)

    if (visible) {
      element.style.position = "absolute"
      element.style.height = "100vh"
      element.style.width = "100vw"
      element.style.top = "0px"
      element.style.left = "0px"
    } else {
      element.style.position = ""
      element.style.height = ""
      element.style.width = ""
      element.style.top = ""
      element.style.left = ""
    }
    modalRoot?.appendChild(element)
    return () => {
      modalRoot?.removeChild(element)
      window.document.removeEventListener("keypress", onEscPress)
    }
  }, [visible])

  if (visible) {
    return ReactDOM.createPortal(
      <NativeModal
        onRequestClose={onRequestClose}
        visible={visible}
        {...otherProps}
      >
        {children}
      </NativeModal>,
      el.current
    )
  }

  return null
}

export default Modal
