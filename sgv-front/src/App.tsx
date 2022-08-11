import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { Route, Switch, useParams } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import React, { useEffect, useState } from 'react'
import { getAllPosts } from './clients/PostClient'
import { PostEntity } from './types/Post'
import NavigationDrawer from './components/NavigationDrawer'
import { getUniqueCategories } from './utilities/ParseCategoryName'
import MainMenu from './pages/MainMenu'
import MainPage from './pages/MainPage'

export default function App() {
  useEffect(() => {
    getAllPosts().then((x) => {
      setPosts(x.message)
    })
  }, [])

  const [posts, setPosts] = useState<PostEntity[]>([])
  const { category } = useParams<{ category?: string }>()

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationDrawer categories={getUniqueCategories(posts)} selectedCategory={category}>
        <Route exact path={'/'}>
          <MainMenu posts={posts} locale={posts[0]?.language ?? 'LT'} />
        </Route>
        <Route exact path={'/:category/'}>
          <MainPage category={category} posts={posts} />
        </Route>
        <Route path={'/:category/:subcategory'}>
          <MainPage category={category} posts={posts} />
        </Route>
      </NavigationDrawer>
    </ThemeProvider>
  )
}
