import { Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { PostEntity } from '../types/Post'
import MarkdownMapper from './MarkdownMapper'
import TrackVisibility from 'react-on-screen'
import { addReadPost } from '../utilities/ReadPostsUtilities'

type PostContainerProps = {
  post: PostEntity
}

type PostProps = {
  isVisible: boolean
}

export default function PostContainer({ post }: PostContainerProps) {
  const TrackedPost = ({ isVisible }: PostProps) => {
    useEffect(() => {
      if (isVisible) {
        addReadPost(post)
      }
    }, [isVisible])
    return <MarkdownMapper>{post.content}</MarkdownMapper>
  }
  return (
    <Container
      sx={{
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container sx={{ textAlign: 'center', marginBottom: '2%' }}>
        <Typography sx={{ padding: '2%', fontWeight: 300 }} variant='h4'>
          {post.title}
        </Typography>
      </Container>
      <TrackVisibility partialVisibility>
        {({ isVisible }) => <TrackedPost isVisible={isVisible} />}
      </TrackVisibility>
    </Container>
  )
}
