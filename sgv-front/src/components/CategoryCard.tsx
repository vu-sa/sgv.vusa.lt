import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { TextDictionary } from '../locale/TextDictionary'
import { Category } from '../types/Category'
import ProgressBar from './ProgressBar'
import { Link } from 'react-router-dom'

interface CategoryCardProps {
  category: Category
  postCount: number
  readPostCount: number
  cardImageUrl: string
}

export default function CategoryCard({
  category,
  readPostCount,
  postCount,
  cardImageUrl,
}: CategoryCardProps) {
  return (
    <Link to={category.urlName} style={{ textDecoration: 'none' }}>
      <Card sx={{ width: '100%', height: '100%', margin: '1%' }}>
        <CardMedia component='img' height='140' image={cardImageUrl} alt='Kategorija' />
        <CardContent>
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
              textAlign: 'center',
            }}
            gutterBottom
            variant='h5'
            component='div'
          >
            {category.displayName}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Typography>
            {readPostCount}/{postCount}
          </Typography>
        </CardActions>
        <CardActions>
          <ProgressBar progress={readPostCount / postCount} />
        </CardActions>
      </Card>
    </Link>
  )
}
