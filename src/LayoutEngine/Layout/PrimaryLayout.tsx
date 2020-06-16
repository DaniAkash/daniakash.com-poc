import { createLayout } from "../LayoutEngine"

export const {
  useLayoutStyle: usePrimaryLayoutStyle,
  Layout: PrimaryLayout,
  LayoutStyleSheet: PrimaryLayoutStyleSheet,
  useCurrentLayout: useCurrentPrimaryLayout,
} = createLayout({
  mobile: {
    maxWidth: 480,
  },
  tablet: {
    minWidth: 481,
    maxWidth: 1024,
  },
  desktop: {
    minWidth: 1025,
    maxWidth: Infinity,
  },
})
