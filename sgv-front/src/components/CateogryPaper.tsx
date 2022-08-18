import { Container, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Category } from '../types/Category'
import { PostEntity } from '../types/Post'
import { parseCategoryName } from '../utilities/ParseCategoryName'
import { getPostsBySubcategory } from '../utilities/ParsePosts'
import SubcategoryPaper from './PostPaper'

type CategoryPaperProps = {
  category: Category
  posts: PostEntity[]
  subcategory: string | undefined
}

export default function CategoryPaper({ posts, category, subcategory }: CategoryPaperProps) {
  const [postsBySubcategory, setPostsBySubcategory] = useState(getPostsBySubcategory(posts))
  useEffect(() => {
    setPostsBySubcategory(getPostsBySubcategory(posts))
    if (!subcategory) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }, [category])
  return (
    <Container>
      <div
        style={{
          width: '100%',
          height: '280px',
          backgroundImage: `url(${category.titleImageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          verticalAlign: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            verticalAlign: 'center',
            color: 'white',
            margin: 'auto',
            textShadow: '1px 1px 1px gray',
          }}
          variant='h3'
        >
          {category.displayName}
        </Typography>
      </div>
      {Object.keys(postsBySubcategory).map((key) => (
        <SubcategoryPaper
          category={category}
          key={key}
          subcategoryName={key}
          posts={postsBySubcategory[key]}
          shouldBeOnScreen={subcategory == parseCategoryName(key) ? true : false}
        ></SubcategoryPaper>
      ))}
    </Container>
  )
}
