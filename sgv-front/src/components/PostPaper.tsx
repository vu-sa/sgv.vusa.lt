import { Container, Typography } from '@mui/material'
import Markdown from 'markdown-to-jsx'
import React from 'react'
import { PostEntity } from '../types/Post'

type PostPaperProps = {
  post: PostEntity
}

export default function PostPaper({ post }: PostPaperProps) {
  return (
    <Container>
      <Typography>{post.title}</Typography>
      <Markdown>{post.content}</Markdown>
    </Container>
  )
}
