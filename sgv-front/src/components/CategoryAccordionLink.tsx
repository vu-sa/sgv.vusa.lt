import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { AccordionDetails } from '@mui/material'

type CategoryAccordionLinkProps = {
  link: string
  displayName: string
}

export default function CategoryAccordionLink({ link, displayName }: CategoryAccordionLinkProps) {
  return (
    <Accordion sx={{ width: '100%' }} expanded={false}>
      <AccordionSummary sx={{ width: '100%' }} aria-controls={`${displayName}-content`} id={link}>
        <Link style={{ textDecoration: 'none' }} to={{ pathname: link }} target='_blank'>
          <Typography color='primary' variant='subtitle1'>
            {displayName}
          </Typography>
        </Link>
      </AccordionSummary>
    </Accordion>
  )
}
