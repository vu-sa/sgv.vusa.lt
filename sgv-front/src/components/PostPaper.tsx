import { Container, Paper, Typography } from '@mui/material'
import React from 'react'
import { PostEntity } from '../types/Post'
import Markdown from './MarkdownMapper'

type SubcategoryPaperProps = {
  posts: PostEntity[]
  subcategoryName: string | undefined
}

export default function SubcategoryPaper({ posts, subcategoryName }: SubcategoryPaperProps) {
  return (
    <Container>
      <Paper elevation={3} sx={{ padding: '3%', marginTop: '2%' }}>
        {subcategoryName && posts.length > 1 ? (
          <Typography variant='h2'>{subcategoryName}</Typography>
        ) : null}
        {posts.map((post, key) => (
          <Markdown key={key}>{post.content}</Markdown>
        ))}
      </Paper>
    </Container>
  )
}
