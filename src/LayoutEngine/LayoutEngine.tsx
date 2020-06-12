import React, { Fragment, ReactNode } from "react"
import {
  useResponsiveWidth,
} from "react-native-responsive-dimensions"
import { ViewStyle, TextStyle, ImageStyle } from "react-native"

export interface LayoutEngineProps {
  children: ReactNode
}

export const MOBILE_WIDTH: [number, number] = [0, 480]

export const TABLET_WIDTH: [number, number] = [481, 1024]

export const DESKTOP_WIDTH: [number, number] = [1025, Infinity]

export type layoutWidthType = {
  width?: [number, number]
  maxWidth?: number
  minWidth?: number
}

export const createLayout = (args: { [key: string]: layoutWidthType }) => {

  type validKeyType = keyof typeof args;

  type ICustomStyleProps = {
    [key in validKeyType]: ViewStyle | TextStyle | ImageStyle | any
  }

  type LayoutProps = {
    children: ReactNode
    mode: validKeyType | validKeyType[]
  }

  const useLayoutStyle = (layoutStyles: ICustomStyleProps) => {
    const width = useResponsiveWidth(100);
    let resultStyle: object = {};
    for(let each in layoutStyles) {
      const dimension = args[each];
      if(!dimension) resultStyle[each] = layoutStyles[each];
      else {
        if (dimension.width) {
          if (width >= dimension.width[0] && width <= dimension.width[1]) {
            resultStyle = {
              ...resultStyle,
              ...layoutStyles[each]
            }
          }
        }
        if (dimension.maxWidth) {
          if (width <= dimension.maxWidth) {
            resultStyle = {
              ...resultStyle,
              ...layoutStyles[each]
            }
          }
        }
        if (dimension.minWidth) {
          if (width >= dimension.minWidth) {
            resultStyle = {
              ...resultStyle,
              ...layoutStyles[each]
            }
          }
        }
      }
    }
    return resultStyle;
  }

  const Layout = ({ children, mode }: LayoutProps) => {
    let isVisible = false

    const width = useResponsiveWidth(100)

    if (Array.isArray(mode)) {
      mode.forEach(type => {
        const dimension = args[type]
        if (dimension.width) {
          if (width >= dimension.width[0] && width <= dimension.width[1]) {
            isVisible = true
          }
        }
        if (dimension.maxWidth) {
          if (width <= dimension.maxWidth) {
            isVisible = true
          }
        }
        if (dimension.minWidth) {
          if (width >= dimension.minWidth) {
            isVisible = true
          }
        }
      })
    }

    if (isVisible) return <Fragment>{children}</Fragment>
    return null
  }

  return {
    useLayoutStyle,
    Layout,
  }
}

export const { useLayoutStyle, Layout } = createLayout({
  mobile: {
    width: MOBILE_WIDTH,
  },
  tablet: {
    width: TABLET_WIDTH,
  },
  desktop: {
    width: DESKTOP_WIDTH,
  },
})
