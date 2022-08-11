/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'
import ReactMarkdown, { MarkdownToJSX } from 'markdown-to-jsx'
import { Link, Typography } from '@mui/material'

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h5',
      },
    },
    h1: { component: Typography, props: { gutterBottom: true, variant: 'h2' } },
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
}

export default function Markdown(
  props: JSX.IntrinsicAttributes & {
    [key: string]: any
    children: string
    options?:
      | Partial<{
          createElement: (
            tag: string | React.FunctionComponent<{}> | React.ComponentClass<{}, any>,
            props: React.Props<any>,
            ...children: React.ReactChild[]
          ) => JSX.Element
          disableParsingRawHTML: boolean
          forceBlock: boolean
          forceInline: boolean
          namedCodesToUnicode: { [key: string]: string }
          overrides: MarkdownToJSX.Overrides
          wrapper: React.ElementType<any> | null
          forceWrapper: boolean
          slugify: (source: string) => string
        }>
      | undefined
  },
) {
  return <ReactMarkdown options={options} {...props} />
}
