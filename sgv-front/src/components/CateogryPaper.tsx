import { Container, Typography } from '@mui/material'
import React from 'react'
import { Category } from '../types/Category'
import { PostEntity } from '../types/Post'
import PostPaper from './PostPaper'

type CategoryPaperProps = {
  category: Category
  posts: PostEntity[]
  subcategory: string | undefined
}

export default function CategoryPaper({ posts, category }: CategoryPaperProps) {
  return (
    <Container>
      <Typography variant='h1'>{category.displayName}</Typography>
      {posts
        .sort((a, b) => a.priority - b.priority)
        .map((post) => (
          <PostPaper key={post.id} post={post} />
        ))}
    </Container>
  )
}
