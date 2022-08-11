import { Box, Container, keyframes, Typography } from '@mui/material'
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
        <Typography variant='h3'>{TextDictionary.ProgressTitle[locale]}</Typography>
      </Box>
      <Box>
        <Typography variant='h3'>{TextDictionary.ContinueTitle[locale]}</Typography>
      </Box>
      <Box width='100%'>
        <Typography variant='h3'>{TextDictionary.AllThemesTitle[locale]}</Typography>
        <Container sx={{ flexDirection: 'row', justifyContent: 'center' }}>
          {categories.map((category, key) => (
            <CategoryCard
              category={category}
              postCount={posts.filter((post) => post.category == category.displayName).length}
              readPostCount={0}
              key={key}
            ></CategoryCard>
          ))}
        </Container>
      </Box>
    </Container>
  )
}
