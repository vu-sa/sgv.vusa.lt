import * as React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { alpha, styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { TextDictionary } from '../locale/TextDictionary'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.8),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 1),
  },
  marginLeft: 'auto',
  marginRight: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginRight: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function SearchBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={TextDictionary.Search['LT']}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}
