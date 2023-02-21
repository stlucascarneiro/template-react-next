export class Color {
  public readonly brand
  public readonly background
  public readonly element
  public readonly feedback

  constructor() {
    this.brand = {
      primary: '#78F2F4'
    }
    this.background = {
      default: '#0C0F14',
      card: '#0F161E',
      aplha: {
        default: 'rgba(255, 255, 255, 0.10)',
        hover: 'rgba(255, 255, 255, 0.15)'
      }
    }
    this.element = {
      strong: '#FFF',
      regular: 'rgba(255, 255, 255, 0.85)',
      light: 'rgba(255, 255, 255, 0.5)',
      lighter: 'rgba(255, 255, 255, 0.2)'
    }
    this.feedback = {
      success: '#00AC81',
      warning: '#D7D37F',
      error: '#EAAA87'
    }
  }
}
