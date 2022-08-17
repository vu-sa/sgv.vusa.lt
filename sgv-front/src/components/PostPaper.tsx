import { Container, Paper, Typography } from '@mui/material'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { Category } from '../types/Category'
import { PostEntity } from '../types/Post'
import Markdown from './MarkdownMapper'
import PostContainer from './PostContainer'

type SubcategoryPaperProps = {
  posts: PostEntity[]
  subcategoryName: string | undefined
  shouldBeOnScreen: boolean
  category: Category
}

export default function SubcategoryPaper({
  posts,
  subcategoryName,
  shouldBeOnScreen,
  category,
}: SubcategoryPaperProps) {
  function scrollToTargetAdjusted(element: MutableRefObject<HTMLDivElement | null>) {
    const headerOffset = 70
    const elementPosition = element.current?.getBoundingClientRect().top ?? 0
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
  const subcategoryRef = useRef<null | HTMLDivElement>(null)
  useEffect(
    () => (shouldBeOnScreen ? scrollToTargetAdjusted(subcategoryRef) : undefined),
    [shouldBeOnScreen],
  )
  return (
    <Container ref={subcategoryRef}>
      <Paper elevation={3} sx={{ padding: '3%', marginTop: '2%' }}>
        {subcategoryName && posts.length > 1 ? (
          <Typography sx={{ textAlign: 'center', width: '100%' }} variant='h3'>
            {subcategoryName}
          </Typography>
        ) : null}
        {posts.map((post, key) => (
          <PostContainer post={post} key={key}></PostContainer>
        ))}
      </Paper>
    </Container>
  )
}
