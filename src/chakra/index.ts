import { getButton } from './components/button'

export function getChakraTheme() {
  return {
    components: {
      Button: getButton()
    }
  }
}