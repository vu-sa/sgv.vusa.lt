import { Category } from '../types/Category'
import { Language } from '../types/Language'
import { PostEntity } from '../types/Post'

interface Dictionary<T> {
  [Key: string]: T
}

const dict: Dictionary<string> = {
  ą: 'a',
  č: 'c',
  ę: 'e',
  ė: 'e',
  į: 'i',
  š: 's',
  ų: 'u',
  ū: 'u',
  ž: 'z',
  A: 'a',
  Č: 'c',
  E: 'e',
  Ė: 'e',
  Į: 'i',
  Š: 's',
  Ų: 'u',
  Ū: 'u',
  Ž: 'z',
  '!': '',
  ':': '',
}

export function parseCategoryName(category: string): string {
  let parsedCategory = ''
  Array.from(category).forEach((char) => (parsedCategory += dict[char] ?? char.toLowerCase()))
  return parsedCategory.replace(/[^a-z0-9]/gim, '-').replace(/\s+/g, '-')
}

export function getUniqueCategories(posts: PostEntity[]): Category[] {
  const categories: Category[] = []
  posts.forEach((post) => {
    if (!categories.find((category) => category.displayName == post.category.displayName)) {
      categories.push({
        displayName: post.category.displayName,
        urlName: parseCategoryName(post.category.displayName),
        subcategories:
          post.subcategory.length > 1
            ? [{ displayName: post.subcategory, urlName: parseCategoryName(post.subcategory) }]
            : [],
        language: post.language == 'EN' ? Language.EN : Language.LT,
        cardImageUrl: post.category.cardImageUrl,
        titleImageUrl: post.category.titleImageUrl,
        priority: post.category.priority,
      })
    } else {
      const index = categories.findIndex((x) => x.displayName == post.category.displayName)
      if (
        !categories[index].subcategories.find(
          (subcategory) => subcategory.displayName == post.subcategory,
        )
      )
        if (post.subcategory.length > 1) {
          categories[index].subcategories.push({
            displayName: post.subcategory,
            urlName: parseCategoryName(post.subcategory),
          })
        }
    }
  })
  categories.forEach((x) =>
    x.subcategories.sort((a, b) => a.displayName.localeCompare(b.displayName)),
  )
  return categories
}
