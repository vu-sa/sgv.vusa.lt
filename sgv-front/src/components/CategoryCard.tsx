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

interface CategoryCardProps {
  category: Category
  postCount: number
  readPostCount: number
}

export default function CategoryCard({ category, readPostCount, postCount }: CategoryCardProps) {
  return (
    <Card sx={{ width: '30%', height: '20%', display: 'inline-block', margin: '1%' }}>
      <CardMedia
        component='img'
        height='140'
        image='https://i.imgur.com/KaQVyCP.png'
        alt='Kategorija'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {category.displayName}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Quae nesciunt perferendis vel in optio et minus non. Et ex nisi delectus. Mollitia et quia
          quia enim dignissimos quisquam
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button size='small'>{TextDictionary.MoreButton[category.language]}</Button>
        <Typography>
          {readPostCount}/{postCount}
        </Typography>
      </CardActions>
      <CardActions>
        <ProgressBar progress={readPostCount / postCount} />
      </CardActions>
    </Card>
  )
}
