import { Language } from './Language'

export type Category = {
  displayName: string
  urlName: string
  subcategories: Subcategory[]
  language: Language
}

export type Subcategory = {
  displayName: string
  urlName: string
}
