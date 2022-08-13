import { PostEntity, PostsBySubcategory } from '../types/Post'

const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    ;(groups[key(item)] ||= []).push(item)
    return groups
  }, {} as Record<K, T[]>)

export function getPostsBySubcategory(posts: PostEntity[]): Record<string, PostEntity[]> {
  return groupBy(posts, (i) => i.subcategory)
}
