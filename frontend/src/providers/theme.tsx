import { createTheme } from '@material-ui/core/styles'

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    header: {
      primary?: string,
      secondary?: string,
    },
    logo: {
      primary?: string
    },
    default: SimplePaletteColorOptions
  }
  interface PaletteOptions {
    header: {
      primary?: string,
      secondary?: string,
    },
    logo: {
      primary?: string
    },
    default: SimplePaletteColorOptions
  }

  interface PaletteColor {
    hover: string
    active: string
    outlineActive?: string
  }
  interface SimplePaletteColorOptions {
    hover?: string
    active?: string
    outlineActive?: string
  }
  
  interface TypeText {
    normal?: string
    muted?: string
    link?: string
    linkLowSaturation?: string
    positive?: string
    warning?: string
    danger?: string
    channelDefault?: string

    interactiveNormal?: string
    interactiveHover?: string
    interactiveActive?: string
    interactiveMuted?: string
  }

  interface TypeBackground {
    primary?: string
    secondary?: string
    secondaryAlt?: string
    tertiary?: string
    accent?: string
    floating?: string

    mobilePrimary?: string
    mobileSecondary?: string

    modifierHover?: string
    modifierActive?: string
    modifierSelected?: string
    modifierAccent?: string
  }
}

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'hsl(235, 85.6%, 64.7%)',
      contrastText: '#fff',
      hover: 'hsl(235, 51.4%, 52.4%)',
      active: 'hsl(235, 46.7%, 44.1%)',
    },
    secondary: {
      main: 'hsl(139, 47.3%, 43.9%)'
    },
    default: {
      main: '#4f545c',
      contrastText: '#fff',
      hover: '#5d6269',
      active: '#72767d',
    },
    error: {
      main: 'hsl(359, 82.6%, 59.4%)',
      hover: 'hsl(359, 56.7%, 48%)',
      active: 'hsl(359, 56.3%, 40.4%)',
      outlineActive: 'hsla(359, 82.6%, 59.4%, .1)'
    },
    success: {
      main: '#3aa65c',
    },

    header: {
      primary: '#fff',
      secondary: '#b9bbbe',
    },
    logo: {
      primary: '#fff'
    },
    text: {
      normal: '#dcddde',
      muted: '#72767d',
      link: 'hsl(197, 100%, 47.8%)',
      linkLowSaturation: 'hsl(197, 100%, 52.9%)',
      positive: 'hsl(139, 66.8%, 58.6%)',
      warning: 'hsl(38, 95.7%, 54.1%)',
      danger: 'hsl(359, 82.6%, 59.4%)',
      channelDefault: '#8e9297',

      interactiveNormal: '#b9bbbe',
      interactiveHover: '#dcddde',
      interactiveActive: '#fff',
      interactiveMuted: '#4f545c',
    },
    background: {
      primary: '#36393f',
      secondary: '#2f3136',
      secondaryAlt: '#292b2f',
      tertiary: '#202225',
      accent: '#4f545c',
      floating: '#18191c',
      mobilePrimary: '#36393f',
      mobileSecondary: '#2f3136',

      modifierHover: 'rgba(79, 84, 92, 0.16)',
      modifierActive: 'rgba(79, 84, 92, 0.24)',
      modifierSelected: 'rgba(79, 84, 92, 0.32)',
      modifierAccent: 'hsla(0, 0%, 100%, 0.06)',
    }
  },
  shape: { borderRadius: 3 },
  typography: {
    button: {
      textTransform: 'none',
    }
  },
})
