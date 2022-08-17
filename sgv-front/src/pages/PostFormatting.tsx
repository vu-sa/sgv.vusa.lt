import { Container, Grid, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'
import { PostEntity } from '../types/Post'
import { getUniqueCategories } from '../utilities/ParseCategoryName'
import CategoryCard from '../components/CategoryCard'
import { getReadCount } from '../utilities/ReadPostsUtilities'
import CallToAction from '../components/CallToAction'
import MarkdownMapper from '../components/MarkdownMapper'

type PostFormattingProps = {
  posts: PostEntity[]
}

export default function PostFormatting({ posts }: PostFormattingProps) {
  const [editablePost, setEditablePost] = useState<string>('')

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
  }
  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TextareaAutosize
            aria-label='minimum height'
            minRows={8}
            placeholder='Minimum 3 rows'
            style={{ width: '100%' }}
            onChange={(text) => {
              setEditablePost(text.currentTarget.value)
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Container>
            <MarkdownMapper>{editablePost}</MarkdownMapper>
          </Container>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Typography>{editablePost}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
