/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import DarkModeToggle from "./src/components/Common/DarkModeToggle"

// You can delete this file if you're not using it

export const wrapRootElement = ({ element }) => {
  return (
    <>
      {element}
      <DarkModeToggle />
    </>
  )
}
