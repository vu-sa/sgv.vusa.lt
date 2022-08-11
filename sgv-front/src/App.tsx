import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { Route, Switch, useParams } from 'react-router-dom'
import MainPage from './pages/MainPage'
import { useMediaQuery } from 'react-responsive'
import { useEffect, useState } from 'react'
import { getAllPosts } from './clients/PostClient'
import { PostEntity } from './types/Post'
import NavigationDrawer from './components/NavigationDrawer'
import { getUniqueCategories } from './utilities/ParseCategoryName'

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
      <NavigationDrawer
        categories={getUniqueCategories(posts)}
        selectedCategory={category}
        posts={posts}
      />
    </ThemeProvider>
  )
}
