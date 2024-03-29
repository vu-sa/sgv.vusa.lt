import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Category } from '../types/Category'
import CategoryAccordion from './CategoryAccordion'
import { Link, useParams } from 'react-router-dom'
import { TextDictionary } from '../locale/TextDictionary'
import SearchBar from './SearchBar'
import CategoryAccordionLink from './CategoryAccordionLink'
import FacutlySelect from './FacutlySelect'

const drawerWidth = 320

type NavDrawerProps = {
  categories: Category[]
  selectedCategory?: string
  children: React.ReactNode
}

export default function NavigationDrawer(props: NavDrawerProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const { categories, selectedCategory } = props
  const { category } = useParams<{ category?: string }>()
  const drawer = (
    <div>
      <Box sx={{ padding: '5% 15% 0 15%' }}>
        <Link to='/'>
          <img src='https://i.imgur.com/0WOljtv.png' width='100%'></img>
        </Link>
      </Box>
      <List>
        {categories.map((category, key) => (
          <ListItem key={key} sx={{ width: '100%' }}>
            <CategoryAccordion
              selectedCategory={selectedCategory == category.urlName}
              category={category}
            />
          </ListItem>
        ))}
        {
          <ListItem sx={{ width: '100%' }}>
            <CategoryAccordionLink
              displayName='VU atributika'
              link='https://www.vu.lt/parduotuve/'
            />
          </ListItem>
        }
      </List>
      <Box sx={{ pt: '32px', display: 'flex', justifyContent: 'center' }}>
        <Link target='_blank' to={{ pathname: 'https://www.vusa.lt/' }}>
          <img src='https://vusa.lt/logos/vusa.lin.hor.svg' width={drawerWidth * 0.4}></img>
        </Link>
      </Box>
    </div>
  )

  const container = undefined

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#fafafa' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          display: { sm: 'none' },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'white',
        }}
      >
        <Toolbar>
          <IconButton
            color='primary'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color='primary' variant='h6'>
            {TextDictionary.SgvHeader['LT']}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  )
}
