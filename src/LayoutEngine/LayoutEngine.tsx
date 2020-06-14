import React, { Fragment, ReactNode } from "react"
import {
  ViewStyle,
  TextStyle,
  ImageStyle,
  PixelRatio,
  Platform,
} from "react-native"
import { useDimension, useDimensionDelayConfig } from "./hooks/useDimension"
import { isLayoutMatched } from "./utils/isLayoutMatched"

export interface LayoutEngineProps {
  children: ReactNode
}

export type deviceOrientationType = "portrait" | "landscape"

export type layoutConfigType = {
  maxWidth?: number
  minWidth?: number
  maxHeight?: number
  minHeight?: number
  minAspectRatio?: number
  maxAspectRatio?: number
  minPixelRatio?: number
  maxPixelRatio?: number
  orientation?: deviceOrientationType
  platform?: typeof Platform.OS
  condition?: boolean
}

const pixelRatio = PixelRatio.get()
const platform = Platform.OS

export const createLayout = <T extends { [key: string]: layoutConfigType }>(
  args: T
) => {
  type validKeyType = keyof typeof args

  type ICustomStyleProps = {
    [key in validKeyType]?: ViewStyle | TextStyle | ImageStyle | any
  }

  type LayoutProps = {
    children: ReactNode
    mode: validKeyType | validKeyType[]
    timeoutDelay?: useDimensionDelayConfig
  }

  const useLayoutStyle = (
    layoutStyles: ICustomStyleProps,
    timeoutConfig?: useDimensionDelayConfig
  ) => {
    const { width, height } = useDimension(timeoutConfig)
    const orientation: deviceOrientationType =
      width > height ? "landscape" : "portrait"
    let resultStyle: any = {}
    for (let each in layoutStyles) {
      const dimension = args[each]
      if (!dimension) resultStyle[each] = layoutStyles[each]
      else if (
        isLayoutMatched(dimension, {
          height,
          width,
          orientation,
          pixelRatio,
          platform,
        })
      ) {
        resultStyle = {
          ...resultStyle,
          ...layoutStyles[each],
        }
      }
    }
    return resultStyle
  }

  const Layout = ({
    children,
    mode,
    timeoutDelay = { timeout: 0 },
  }: LayoutProps) => {
    let isVisible = false

    const { width, height } = useDimension(timeoutDelay)
    const orientation: deviceOrientationType =
      width > height ? "landscape" : "portrait"

    if (Array.isArray(mode)) {
      mode.forEach(type => {
        const dimension = args[type]
        if (dimension)
          isVisible = isLayoutMatched(dimension, {
            height,
            width,
            orientation,
            pixelRatio,
            platform,
          })
      })
    } else {
      const dimension = args[mode]
      if (dimension)
        isVisible = isLayoutMatched(dimension, {
          height,
          width,
          orientation,
          pixelRatio,
          platform,
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
