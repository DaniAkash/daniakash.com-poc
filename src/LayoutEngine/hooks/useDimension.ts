import { useState, useEffect } from "react"
import { Dimensions, ScaledSize } from "react-native"

export type useDimensionDelayConfig = {
  timeout?: number
}

export const useDimension = (
  { timeout = 150 }: useDimensionDelayConfig = {
    timeout: 150,
  }
) => {
  const [width, setWidth] = useState(Dimensions.get("window").width)
  const [height, setHeight] = useState(Dimensions.get("window").height)

  useEffect(() => {
    let timeoutId = null
    const handleWindowChange = ({
      window: { width: currentWidth, height: currentHeight },
    }: {
      window: ScaledSize
    }) => {
      clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        setWidth(currentWidth)
        setHeight(currentHeight)
      }, timeout)
    }

    Dimensions.addEventListener("change", handleWindowChange)
    return () => {
      Dimensions.removeEventListener("change", handleWindowChange)
    }
  }, [])

  return { width, height }
}
