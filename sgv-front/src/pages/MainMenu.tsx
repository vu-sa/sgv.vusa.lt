import { Box, Container, Grid, keyframes, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostEntity } from '../types/Post'
import { getUniqueCategories, parseCategoryName } from '../utilities/ParseCategoryName'
import CategoryPaper from '../components/CateogryPaper'
import { TextDictionary } from '../locale/TextDictionary'
import CategoryCard from '../components/CategoryCard'

type MainPageProps = {
  posts: PostEntity[]
  locale: string
}

export default function MainMenu({ posts, locale }: MainPageProps) {
  const categories = getUniqueCategories(posts)
  return (
    <Container>
      <Box>
        <Typography variant='h4'>{TextDictionary.ProgressTitle[locale]}</Typography>
      </Box>
      <Box>
        <Typography variant='h4'>{TextDictionary.ContinueTitle[locale]}</Typography>
      </Box>
      <Grid container spacing={6}>
        <Grid item sm={12}>
          <Typography variant='h4'>{TextDictionary.AllThemesTitle[locale]}</Typography>
        </Grid>
        {categories.map((category, key) => (
          <Grid sx={{ padding: '2%' }} item xs={8} sm={8} md={8} lg={6} key={key}>
            <CategoryCard
              category={category}
              postCount={posts.filter((post) => post.category == category.displayName).length}
              readPostCount={0}
            ></CategoryCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
