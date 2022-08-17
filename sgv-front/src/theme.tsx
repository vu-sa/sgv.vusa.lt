import { createTheme } from '@mui/material/styles'

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
    fontFamily: 'Inter Family',
    fontWeightBold: 400,
  },
})

export default theme
