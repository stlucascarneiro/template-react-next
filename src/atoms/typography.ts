import { Breakpoints } from './breakpoints'

export class Typography {
  public readonly fonts
  public readonly fontSizes
  public readonly fontWeights

  constructor() {
    this.fonts = {
      body: '\'Laila\', sans-serif',
      heading: '\'Laila\', sans-serif'
    }
    this.fontSizes = {
      sm: '13px',
      md: '14px',
      lg: '18px',
      xl: '22px'
    }
    this.fontWeights = {
      light: '400',
      medium: '500',
      bold: '700'
    }
  }
}

export const globalTypography = `
    h1 {
        font-size: 22px;
        font-weight: 700;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 22px;
        }
    }
    h2 {
        font-size: 22px;
        font-weight: 700;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 22px;
        }
    }
    h3 {
        font-size: 22px;
        font-weight: 700;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 22px;
        }
    }
    h4 {
        font-size: 22px;
        font-weight: 700;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 22px;
        }
    }
    h5 {
        font-size: 22px;
        font-weight: 700;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 22px;
        }
    }
    a, button {
        font-size: 14px;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 13px;
        }
    }
    label {
        font-size: 14px;
        font-weight: 400;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 13px;
        }
    }
    p, li {
        font-size: 14px;
        font-weight: 300;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 13px;
        }
    }
    small {
        font-size: 13px;
        font-weight: 300;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 12px;
        }
    }
`