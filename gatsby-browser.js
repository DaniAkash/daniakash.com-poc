/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import DarkModeToggle from "./src/components/Common/DarkModeToggle"
import { PrimaryLayoutProvider } from "./src/LayoutEngine/PrimaryLayout"
import { PageStateProvider } from "./src/store/PageState"
import "./src/assets/styles/global.css"
import "typeface-roboto"
import "typeface-roboto-mono"
import Overlay from "./src/components/Common/Overlay"

export const wrapRootElement = ({ element }) => {
  return (
    <PageStateProvider>
      <PrimaryLayoutProvider>
        {element}
        <DarkModeToggle />
        <Overlay />
      </PrimaryLayoutProvider>
    </PageStateProvider>
  )
}
