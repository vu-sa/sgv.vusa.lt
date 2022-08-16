import { Language } from './Language'

export type Category = {
  displayName: string
  urlName: string
  subcategories: Subcategory[]
  language: Language
  cardImageUrl: string
  titleImageUrl: string
  priority: number
}

export type CategoryDto = {
  displayName: string
  cardImageUrl: string
  titleImageUrl: string
  priority: number
}

export type Subcategory = {
  displayName: string
  urlName: string
}
