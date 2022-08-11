/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import Markdown from 'markdown-to-jsx'

export default function MarkdownMapper(props) {
  return (
    <Markdown
      options={{
        overrides: {
          Parallel: {
            component: Box,
            props: {
              sx: {
                flexDirection: 'row',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
          },
          Box: { component: Box },
          h1: {
            component: Typography,
            props: {
              gutterBottom: true,
              variant: 'h1',
            },
          },
          h2: { component: Typography, props: { gutterBottom: true, variant: 'h3' } },
          h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1' } },
          h4: {
            component: Typography,
            props: { gutterBottom: true, variant: 'caption', paragraph: true },
          },
          p: { component: Typography, props: { paragraph: true } },
          a: { component: Link },
          li: {
            component: ({ ...props }) => (
              <li>
                <Typography component='span' {...props} />
              </li>
            ),
          },
        },
      }}
      {...props}
    />
  )
}
