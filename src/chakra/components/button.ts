import theme from 'theme'
const { color, typography } = theme

export function getButton() {
  return {
    variants: {
      primary: {
        bg: 'linear-gradient(104.4deg, #2E585E 26.09%, rgba(120, 242, 244, 0.46) 103.5%, rgba(120, 242, 244, 0.46) 103.5%)',
        color: 'white',
        border: 'none',
        padding: '6px 24px',
        borderRadius: '4px',
        fontFamily: typography.fonts.body,
        _hover: {
          boxShadow: '0 0 8px 4px rgba(46, 88, 94, 0.5)'
        }
      },
      secondary: {
        bg: color.background.aplha.default,
        color: color.element.regular,
        padding: '6px 24px',
        borderRadius: '4px',
        fontFamily: typography.fonts.body,
        _hover: {
          bg: color.background.aplha.hover
        }
      }
    }
  }
}