import { useState } from "react"
import { createRexStore } from "rex-state"

const usePageState = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false)

  return {
    isPageLoaded,
    setIsPageLoaded,
  }
}

export const {
  useStore: usePageStateStore,
  RexProvider: PageStateProvider,
} = createRexStore(usePageState)
