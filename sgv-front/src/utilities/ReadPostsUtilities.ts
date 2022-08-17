import { PostEntity } from '../types/Post'

type SgvStorage = {
  readPostTitles: string[]
}

export function getReadPostsBySubcategory(posts: PostEntity[], subcategory: string) {
  const sgvVusa: SgvStorage | null = JSON.parse(
    window.localStorage.getItem('SgvVusa') ?? '{ "readPostTitles": []}',
  )
  if (sgvVusa == null) {
    return []
  }
  return posts.filter(
    (post) =>
      post.subcategory == subcategory && sgvVusa.readPostTitles.find((x) => x == post.title),
  )
}

export function getReadPostsByCategory(posts: PostEntity[], categoryName: string) {
  const sgvVusa: SgvStorage | null = JSON.parse(
    window.localStorage.getItem('SgvVusa') ?? '{ "readPostTitles": []}',
  )
  if (sgvVusa == null) {
    return []
  }
  return posts.filter(
    (post) =>
      post.category.displayName == categoryName &&
      sgvVusa.readPostTitles.find((x) => x == post.title),
  )
}

export function addReadPost(readPost: PostEntity) {
  const sgvVusa: SgvStorage = JSON.parse(
    window.localStorage.getItem('SgvVusa') ?? '{ "readPostTitles": []}',
  )
  if (sgvVusa.readPostTitles.find((x) => x == readPost.title)) {
    return
  }
  sgvVusa?.readPostTitles.push(readPost.title)

  window.localStorage.setItem('SgvVusa', JSON.stringify(sgvVusa))
}

export function getReadCount(posts: PostEntity[], categoryTitle: string) {
  const sgvVusa: SgvStorage | null = JSON.parse(
    window.localStorage.getItem('SgvVusa') ?? '{ "readPostTitles": []}',
  )
  if (sgvVusa == null) {
    return 0
  }
  let readCount = 0
  posts
    .filter((post) => post.category.displayName == categoryTitle)
    .forEach((post) => (sgvVusa?.readPostTitles.find((x) => x == post.title) ? readCount++ : null))
  return readCount
}
