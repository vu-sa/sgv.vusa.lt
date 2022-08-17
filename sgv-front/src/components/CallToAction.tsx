import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { TextDictionary } from '../locale/TextDictionary'

type CallToActionProps = {
  locale: string
}

export default function CallToAction({ locale }: CallToActionProps) {
  return (
    <section>
      <Container maxWidth='md'>
        <Box py={8} textAlign='center'>
          <Typography color='primary' variant='h3' component='h2' gutterBottom={true}>
            {TextDictionary.CallToActionHeader[locale]}
          </Typography>
          <Typography variant='h5' color='textSecondary'>
            {TextDictionary.CallToActionDescription[locale]}
          </Typography>
          <Box mt={4}>
            <Button variant='contained' size='large' color='primary'>
              {TextDictionary.CallToActionPrimaryAction[locale]}
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  )
}
