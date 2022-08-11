import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostEntity } from '../types/Post'
import { getUniqueCategories, parseCategoryName } from '../utilities/ParseCategoryName'
import CategoryPaper from '../components/CateogryPaper'

type MainPageProps = {
  category: string | undefined
  posts: PostEntity[]
}

export default function MainPage({ category, posts }: MainPageProps) {
  const { subcategory } = useParams<{ subcategory?: string }>()
  const [onScreenPost, setOnScreenPost] = useState<PostEntity | undefined>()

  return (
    <Container>
      {getUniqueCategories(posts)
        .filter((x) => x.urlName == category)
        .map((category, key) => (
          <CategoryPaper
            key={key}
            category={category}
            posts={posts.filter((x) => x.category == category.displayName)}
            subcategory={subcategory?.length ?? 0 > 1 ? subcategory : undefined}
          />
        ))}
    </Container>
  )
}
