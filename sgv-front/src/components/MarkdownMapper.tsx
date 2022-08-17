/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'
import { Box, Grid, Link, Typography } from '@mui/material'
import Markdown from 'markdown-to-jsx'
import ImageCarousel from './ImageCarousel'

export default function MarkdownMapper(props) {
  return (
    <Markdown
      options={{
        overrides: {
          parallel: {
            component: Grid,
            props: {
              container: true,
              spacing: 1,
            },
          },
          gridItem: {
            component: ({ ...props }) => <Grid {...props} />,
            props: {
              item: true,
              sx: { padding: '1%' },
            },
          },
          img: {
            component: ({ ...props }) => <img {...props} />,
            props: {
              width: '100%',
              height: 'auto',
            },
          },
          box: { component: Box, props: { sx: { padding: '1%' } } },
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
            props: { gutterBottom: true, variant: 'h5', paragraph: true },
          },
          p: {
            component: ({ ...props }) => <Typography {...props} />,
            props: { paragraph: true, sx: { fontWeight: 'inherit' } },
          },
          a: { component: Link },
          li: {
            component: ({ ...props }) => (
              <li>
                <Typography component='span' {...props} />
              </li>
            ),
          },
          strong: {
            component: ({ ...props }) => <Typography {...props} />,
            props: { sx: { fontWeight: 600 }, display: 'inline' },
          },
          imageCarousel: {
            component: ({ images, ...props }) => <ImageCarousel images={images} {...props} />,
          },
        },
      }}
      {...props}
    />
  )
}
