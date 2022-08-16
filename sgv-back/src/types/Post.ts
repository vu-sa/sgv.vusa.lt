import { Post } from "@prisma/client";
import { Category } from "./Category";

export interface PostEntity extends PostDto {
    id: number;
    createdAt: Date;
}

export interface PostDto {
    content: string;
    priority: number;
    title: string;
    subcategory: string;
    isSponsored: boolean;
    moreLink: string;
    facultySpecific: string;
    language: string;
    category: Category
}

export interface PostCreate {
    title: string
    content: string
    category: string
    priority: number
    subcategory: string
    isSponsored: boolean
    facultySpecific: string
    moreLink: string
    language: string
    categoryCardImageUrl: string
    categoryTitleImageUrl: string
    categoryPriority: number
}

export function mapPostToDto(post: Post): PostEntity
{
    return {
        id: post.id,
        createdAt: post.createdAt,
        content: post.content,
        priority: post.priority,
        title: post.title,
        subcategory: post.subcategory,
        isSponsored: post.isSponsored,
        moreLink: post.moreLink,
        facultySpecific: post.facultySpecific,
        language: post.language,
        category: {
            displayName: post.category,
            cardImageUrl: post.categoryCardImageUrl,
            titleImageUrl: post.categoryTitleImageUrl,
            priority: post.categoryPriority
        }
    }
}

export function mapDtoToPost(post: PostDto): PostCreate
{
    return {
        content: post.content,
        priority: post.priority,
        title: post.title,
        subcategory: post.subcategory,
        isSponsored: post.isSponsored,
        moreLink: post.moreLink,
        facultySpecific: post.facultySpecific,
        language: post.language,
        category: post.category.displayName,
        categoryCardImageUrl: post.category.cardImageUrl,
        categoryTitleImageUrl: post.category.titleImageUrl,
        categoryPriority: post.category.priority
    }
}

export function mapPostToDtos(posts: Post[]): PostEntity[]
{
    return posts.map((post) => {
        return {
        id: post.id,
        createdAt: post.createdAt,
        content: post.content,
        priority: post.priority,
        title: post.title,
        subcategory: post.subcategory,
        isSponsored: post.isSponsored,
        moreLink: post.moreLink,
        facultySpecific: post.facultySpecific,
        language: post.language,
        category: {
            displayName: post.category,
            cardImageUrl: post.categoryCardImageUrl,
            titleImageUrl: post.categoryTitleImageUrl,
            priority: post.categoryPriority
        }
    }
    })
}