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
        font-size: 22px !important;
        font-weight: 700 !important;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 22px !important;
        }
    }
    h2 {
        font-size: 22px !important;
        font-weight: 700 !important;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 22px !important;
        }
    }
    h3 {
        font-size: 22px !important;
        font-weight: 700 !important;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 22px !important;
        }
    }
    h4 {
        font-size: 22px !important;
        font-weight: 700 !important;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 22px !important;
        }
    }
    h5 {
        font-size: 22px !important;
        font-weight: 700 !important;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 22px !important;
        }
    }
    a, button {
        font-size: 14px !important;
        font-weight: 500 !important;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 13px !important;
        }
    }
    label {
        font-size: 14px !important;
        font-weight: 400 !important;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 13px !important;
        }
    }
    p, li {
        font-size: 14px !important;
        font-weight: 300 !important;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 13px !important;
        }
    }
    small {
        font-size: 13px !important;
        font-weight: 300 !important;
        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 12px !important;
        }
    }
`