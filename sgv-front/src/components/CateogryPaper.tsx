import { Container, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Category } from '../types/Category'
import { PostEntity } from '../types/Post'
import { getPostsBySubcategory } from '../utilities/ParsePosts'
import SubcategoryPaper from './PostPaper'

type CategoryPaperProps = {
  category: Category
  posts: PostEntity[]
  subcategory: string | undefined
}

export default function CategoryPaper({ posts, category }: CategoryPaperProps) {
  const [postsBySubcategory, setPostsBySubcategory] = useState(getPostsBySubcategory(posts))
  return (
    <Container>
      <Typography variant='h3'>{category.displayName}</Typography>
      {Object.keys(postsBySubcategory).map((key) => (
        <SubcategoryPaper
          key={key}
          subcategoryName={key}
          posts={postsBySubcategory[key]}
        ></SubcategoryPaper>
      ))}
    </Container>
  )
}
