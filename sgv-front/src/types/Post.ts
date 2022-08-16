import { Category, CategoryDto, Subcategory } from './Category'

export interface PostEntity extends PostDto {
  id: number
  createdAt: Date
}

export interface PostDto {
  content: string
  priority: number
  title: string
  subcategory: string
  isSponsored: boolean
  moreLink: string
  facultySpecific: string
  language: string
  category: CategoryDto
}

export interface PostsBySubcategory {
  [subcategory: string]: PostEntity[]
}
