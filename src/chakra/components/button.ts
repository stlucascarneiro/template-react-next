import theme from 'theme'
const { color } = theme

export function getButton() {
  return {
    variants: {
      primary: {
        bg: color.brand.primary,
        color: 'white',
        border: 'none',
        padding: '0 12px',
        borderRadius: '4px',
        fontSize: '15px',
        fontWeight: 600,
        _hover: {
          boxShadow: '0 0 8px 4px rgba(102, 78, 227, 0.5)'
        }
      },
      secondary: {
        bg: color.background.default,
        color: color.element.regular,
        border: `1px solid ${color.element.regular}`,
        padding: '0 12px',
        borderRadius: '4px',
        fontSize: '15px',
        fontWeight: 600,
        _hover: {
          bg: 'white'
        }
      }
    }
  }
}