import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

type ImageCarouselProps = {
  images: string[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <Carousel>
      {images.map((image, i) => (
        <img key={i} style={{ width: '100%', height: 'auto' }} src={image} />
      ))}
    </Carousel>
  )
}
