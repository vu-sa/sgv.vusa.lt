import { Container, Typography } from '@mui/material'
import React from 'react'
import { PostEntity } from '../types/Post'
import Markdown from './MarkdownMapper'

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
