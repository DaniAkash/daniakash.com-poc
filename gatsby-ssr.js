/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import DarkModeToggle from "./src/components/Common/DarkModeToggle"
import {
  PrimaryLayoutProvider,
  PrimaryLayoutStyle,
} from "./src/LayoutEngine/PrimaryLayout"
import MagicScriptTag from "./src/components/MagicScriptTag"
import "./src/assets/styles/global.css"
import "typeface-roboto"
import "typeface-roboto-mono"

export const wrapRootElement = ({ element }) => {
  return (
    <PrimaryLayoutProvider>
      {element}
      <DarkModeToggle />
    </PrimaryLayoutProvider>
  )
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag key="dark-mode-toggler" />)
}

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  replaceHeadComponents(
    [
      <style
        key="custom-styles"
        dangerouslySetInnerHTML={{
          __html: PrimaryLayoutStyle,
        }}
      />,
    ].concat(getHeadComponents())
  )
}
