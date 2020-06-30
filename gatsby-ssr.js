/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { ColorProvider, ColorManager } from "./src/hooks/useColors"
import { ThemeManager } from "./src/components/Common/ThemeManager"

export const wrapRootElement = ({ element }) => (
  <ColorManager>
    <ColorProvider>
      <ThemeManager>{element}</ThemeManager>
    </ColorProvider>
  </ColorManager>
)
