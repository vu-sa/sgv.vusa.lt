import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const faculties = [
  'VU CHGF',
  'VU EVAF',
  'VU FF',
  'VU FILF',
  'VU FSf',
  'VU GMC',
  'VU IF',
  'VU KF',
  'VU KNF',
  'VU MIF',
  'VU MF',
  'VU TF',
  'VU TSPMI',
  'VU VM',
  'VU ŠA',
]

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

export default function FacutlySelect() {
  const theme = useTheme()
  const [facultyName, setFacultyName] = React.useState('')

  const handleChange = (event) => {
    const {
      target: { value },
    } = event
    setFacultyName(value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id='demo-multiple-name-label'>Name</InputLabel>
        <Select
          labelId='demo-multiple-name-label'
          id='demo-multiple-name'
          value={facultyName}
          onChange={handleChange}
          input={<OutlinedInput label='Padalinys' />}
          MenuProps={MenuProps}
        >
          {faculties.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, facultyName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
