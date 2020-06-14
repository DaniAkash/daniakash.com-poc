import { Platform } from "react-native"
import { deviceOrientationType, layoutConfigType } from "../LayoutEngine"
import { isInInterval } from "./isInInterval"

export type deviceDetailType = {
  height: number
  width: number
  orientation: deviceOrientationType
  pixelRatio: number
  platform: typeof Platform.OS
}

export const isLayoutMatched = (
  layoutDetails: layoutConfigType,
  deviceDetails: deviceDetailType
): boolean => {
  return (
    isInInterval(
      deviceDetails.width,
      layoutDetails.minWidth,
      layoutDetails.maxWidth
    ) &&
    isInInterval(
      deviceDetails.height,
      layoutDetails.minHeight,
      layoutDetails.maxHeight
    ) &&
    isInInterval(
      deviceDetails.pixelRatio,
      layoutDetails.minPixelRatio,
      layoutDetails.maxPixelRatio
    ) &&
    isInInterval(
      deviceDetails.width / deviceDetails.height,
      layoutDetails.minAspectRatio,
      layoutDetails.maxAspectRatio
    ) &&
    (layoutDetails.orientation === undefined ||
      layoutDetails.orientation === deviceDetails.orientation) &&
    (layoutDetails.platform === undefined ||
      layoutDetails.platform === deviceDetails.platform) &&
    (layoutDetails.condition === undefined || layoutDetails.condition)
  )
}
