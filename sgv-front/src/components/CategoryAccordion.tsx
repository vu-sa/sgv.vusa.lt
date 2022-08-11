import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Category } from '../types/Category'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

type CategoryAccordionProps = {
  category: Category
  selectedCategory: boolean
}

export default function CategoryAccordion(props: CategoryAccordionProps) {
  const isExpandable = props.category.subcategories.length >= 1
  const [expanded, setExpanded] = React.useState<boolean>(props.selectedCategory && isExpandable)

  return (
    <div>
      <Accordion
        color={props.selectedCategory ? 'primary' : 'secondary'}
        sx={{ width: '100%' }}
        expanded={expanded}
      >
        <AccordionSummary
          sx={{ width: '100%' }}
          expandIcon={isExpandable ? <ExpandMoreIcon /> : null}
          aria-controls={`${props.category.urlName}-content`}
          id={props.category.urlName}
          onClick={() => {
            if (isExpandable) setExpanded(!expanded)
          }}
        >
          <Link style={{ textDecoration: 'none' }} to={`/${props.category.urlName}`}>
            {props.category.displayName}
          </Link>
        </AccordionSummary>
        <AccordionDetails>
          {props.category.subcategories.map((subcategory, key) => (
            <Typography width={'100%'} key={key}>
              <Link
                key={key}
                style={{ textDecoration: 'none' }}
                to={`/${props.category.urlName}/${subcategory.urlName}`}
              >
                {subcategory.displayName}
              </Link>
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
