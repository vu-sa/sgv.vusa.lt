import { red, green, purple } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#78003F',
    },
    secondary: {
      main: '#414141',
    },
    error: {
      main: '#E64164',
    },
  },
  typography: {
    fontFamily: 'Raleway',
    h1: {
      fontFamily: 'GT Walsheim',
    },
    h2: {
      fontFamily: 'GT Walsheim',
    },
    h3: {
      fontFamily: 'GT Walsheim',
    },
    h6: {
      fontFamily: 'GT Walsheim',
    },
    fontWeightBold: 300,
  },
})

export default theme
