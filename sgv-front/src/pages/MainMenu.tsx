import { Container, Grid } from '@mui/material'
import React from 'react'
import { PostEntity } from '../types/Post'
import { getUniqueCategories } from '../utilities/ParseCategoryName'
import CategoryCard from '../components/CategoryCard'
import { getReadCount } from '../utilities/ReadPostsUtilities'
import CallToAction from '../components/CallToAction'

type MainPageProps = {
  posts: PostEntity[]
  locale: string
}

export default function MainMenu({ posts, locale }: MainPageProps) {
  const categories = getUniqueCategories(posts)
  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CallToAction locale={locale} />
        </Grid>
        {categories.map((category, key) => (
          <Grid sx={{ padding: '2%' }} item xs={8} sm={8} md={8} lg={6} key={key}>
            <CategoryCard
              category={category}
              postCount={
                posts.filter((post) => post.category.displayName == category.displayName).length
              }
              readPostCount={getReadCount(posts, category.displayName)}
              cardImageUrl={category.cardImageUrl}
            ></CategoryCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
