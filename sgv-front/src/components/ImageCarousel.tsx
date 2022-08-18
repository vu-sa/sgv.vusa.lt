import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

type ImageCarouselProps = {
  images: string[] | undefined
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <Carousel sx={{ width: { sm: '80%', md: '60%', lg: '60%' }, height: '350px', margin: 'auto' }}>
      {images != undefined
        ? images.map((image, i) => (
            <img key={i} style={{ width: 'auto', height: '350px' }} src={image} />
          ))
        : null}
    </Carousel>
  )
}
