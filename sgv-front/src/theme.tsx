import { red, green, purple } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export const mcgpalette150 = '#f7e4e6'
export const mcgpalette1100 = '#ecbcc1'
export const mcgpalette1200 = '#df8f97'
export const mcgpalette1300 = '#d2626d'
export const mcgpalette1400 = '#c8404e'
export const mcgpalette1500 = '#be1e2f'
export const mcgpalette1600 = '#b81a2a'
export const mcgpalette1700 = '#af1623'
export const mcgpalette1800 = '#a7121d'
export const mcgpalette1900 = '#990a12'
export const mcgpalette1A100 = '#ffc7c9'
export const mcgpalette1A200 = '#ff9498'
export const mcgpalette1A400 = '#ff6167'
export const mcgpalette1A700 = '#ff474e'

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          '-ms-overflow-style': 'none',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      light: '#d2626d',
      dark: '#A7121D',
      main: '#be1e2f',
    },
    secondary: {
      light: '#FFE696',
      main: '#ffcd2c',
      dark: '#FFBA1B',
    },

    error: {
      main: '#E64164',
    },
  },
  typography: {
    fontFamily: 'Myriad Pro Regular, Myriad Pro Bold',
    h1: {
      fontFamily: 'Myriad Pro Regular, Myriad Pro Bold',
    },
    h2: {
      fontFamily: 'Myriad Pro Regular, Myriad Pro Bold',
    },
    h3: {
      fontFamily: 'Myriad Pro Regular, Myriad Pro Bold',
    },
    h6: {
      fontFamily: 'Myriad Pro Regular, Myriad Pro Bold',
    },

    fontWeightBold: 600,
  },
})

export default theme
