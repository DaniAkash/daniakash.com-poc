/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { ColorProvider } from "./src/hooks/useColors"

export const wrapRootElement = ({ element }) => (
  <ColorProvider>{element}</ColorProvider>
)
