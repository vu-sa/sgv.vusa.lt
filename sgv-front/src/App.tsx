import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { Route, useParams } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import React, { useEffect, useState } from 'react'
import { getAllPosts } from './clients/PostClient'
import { PostEntity } from './types/Post'
import NavigationDrawer from './components/NavigationDrawer'
import { getUniqueCategories } from './utilities/ParseCategoryName'
import MainMenu from './pages/MainMenu'
import MainPage from './pages/MainPage'
import './App.css'

export default function App() {
  useEffect(() => {
    getAllPosts().then((x) => {
      setPosts(x.message.sort((a, b) => a.priority - b.priority))
    })
  }, [])

  const [posts, setPosts] = useState<PostEntity[]>([])
  const { category } = useParams<{ category?: string }>()
  const [locale, setLocale] = useState('LT')
  useEffect(() => {
    if (posts[0] != undefined) setLocale(posts[0].language)
  }, [posts])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationDrawer categories={getUniqueCategories(posts)} selectedCategory={category}>
        <Route exact path={'/'}>
          <MainMenu posts={posts} locale={locale} />
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
