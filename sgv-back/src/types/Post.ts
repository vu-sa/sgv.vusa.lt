export interface PostEntity extends PostDto {
    id: number;
    createdAt: Date;
}

export interface PostDto {
    content: string;
    priority: number;
    title: string;
    category: string;
    subcategory: string;
    isSponsored: boolean;
    moreLink: string;
    facultySpecific: string;
    language: string;
}