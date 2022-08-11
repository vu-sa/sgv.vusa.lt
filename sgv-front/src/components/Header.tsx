import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar>{femmecubatorLogo}</Toolbar>
  }

  const femmecubatorLogo = (
    <Typography variant='h6' component='h1'>
      STUDENTIŠKO GYVENIMO VADOVAS
    </Typography>
  )

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  )
}
