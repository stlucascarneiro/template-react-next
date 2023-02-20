export class Color {
  public readonly brand
  public readonly background
  public readonly element
  public readonly feedback

  constructor() {
    this.brand = {
      primary: '#3065B6'
    }
    this.background = {
      default: '#121D2E'
    }
    this.element = {
      strong: '#000',
      regular: '#E8EDF6'
    }
    this.feedback = {
      success: '#00AC81',
      warning: '#D7D37F',
      error: '#EAAA87'
    }
  }
}
