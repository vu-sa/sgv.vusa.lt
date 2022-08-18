import { Container, Grid } from '@mui/material'
import React, { MutableRefObject, useRef } from 'react'
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
  const gridRef = useRef<HTMLDivElement | null>(null)

  function scrollToTargetAdjusted(element: MutableRefObject<HTMLDivElement | null>) {
    const headerOffset = 70
    const elementPosition = element.current?.getBoundingClientRect().top ?? 0
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
  console.log(gridRef)

  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ paddingBottom: '15%' }}>
          <CallToAction locale={locale} actionFunction={() => scrollToTargetAdjusted(gridRef)} />
        </Grid>
      </Grid>
      <Grid ref={gridRef} container spacing={6}>
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
