import CssBaseline from '@mui/material/CssBaseline'
import { Container, Grid, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

export default function MyApp() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false}>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          sx={{ height: '100vh', border: '1px solid #9eff49' }}
        >
          <Grid item container maxWidth='70vw'>
            <Grid
              item
              xs={6}
              sx={{
                border: '1px solid grey',
                height: 600,
                backgroundColor: '#d6fff9',
              }}
            >
              <Typography variant='h2'>SGV</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                border: '1px solid grey',
                height: 600,
                backgroundColor: 'secondary.main',
              }}
            >
              <Typography variant='h2'>CONTENT</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}
