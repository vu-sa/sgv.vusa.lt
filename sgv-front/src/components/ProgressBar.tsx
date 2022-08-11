import * as React from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

interface ProgressBarProps {
  progress: number
}

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant='determinate' value={100 * props.progress} />
    </Box>
  )
}
